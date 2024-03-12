import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { razorpay } from "@/lib/razorpay";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings")


export async function GET() {
    try {
        const { userId } = auth();
        const user = await currentUser();

        if (!userId || !user) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const userSubscription=await prismadb.userSubscription.findUnique({
            where: {
                userId
            }
        });
       
        const plan_id=process.env.PLAN_ID || 'plan_NkaWdpKFZG51Mv'

        const razorpaySession=await razorpay.subscriptions.create({
            plan_id,
            customer_notify: 1,
            total_count: 1,
            
           
          })
        
        return new NextResponse(JSON.stringify({url:razorpaySession.short_url}))

    } catch (error) {
        console.log("[STRIPE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}
        