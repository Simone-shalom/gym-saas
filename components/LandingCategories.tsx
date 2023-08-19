'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Categories = [
    {
        name: "Virtual Trainer",
        desc: 'Ask our Ai trainer for your questions',
        image: '/images/exercises.jpeg'
    },
    {
        name: "Access",
        desc: 'With our code you can work out anywhere 24/7 ',
        image: '/images/access.webp'
    },
   
]


const LandingCategories = () => {
  return (
    <div className="px-4 flex items-center justify-center pb-4 md:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        {Categories.map((cat) => (
          <Card key={cat.name} 
            className="bg-transparent relative text-white w-[320px] h-[280px] 
              hover:opacity-70 rounded-sm ">
            <CardContent className="w-full h-full
                pt-4 z-10 flex justify-center cursor-pointer ">
                <Image src={cat.image} alt="cat image" 
                className="object-cover" fill/>
                 <div className="absolute top-[0%] h-[280px] w-full 
                    bg-gradient-to-b opacity-50
                 from-black to-transparent z-10 ">
                </div>
                <div className="flex flex-col space-y-40
                    text-center absolute z-20">
                    <p className="text-3xl z-30">
                        {cat.name}
                    </p>
                    <p className="flex items-center mx-10 text-gray-200 z-30">
                        {cat.desc}
                    </p>
                    <div className="absolute h-[100px] w-full 
                      bg-gradient-to-t
                    from-black to-transparent z-10 ">
                  </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingCategories