"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ayush Dasgupta",
    avatar: "A",
    title: "Team Leader",
    description: "Full Stack Developer",
  },
  {
    name: "Riya Paul",
    avatar: "R",
    title: "Team Member",
    description: "MERN Stack Developer",
  },
  {
    name: "Achirshman Deb",
    avatar: "A",
    title: "Team Member",
    description: "Front-end Developer & UI/UX Designer",
  },
  {
    name: "Praveen Kumar",
    avatar: "P",
    title: "Team Member",
    description: "Back-end Developer",
  },
  {
    name: "Debashri Mandal",
    avatar: "D",
    title: "Team Member",
    description: "Front-end Developer",
  },
   {
    name: "Suman Saha",
    avatar: "S",
    title: "Team Member",
    description: "UI/UX Designer",
  },
 
 
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-transparent border-none text-white shadow-[inset_0px_0px_20px_0px_rgba(181,59,202,1)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2 ">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}