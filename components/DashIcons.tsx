'use client'

import { Dumbbell, PartyPopper } from "lucide-react"
import { Card } from "./ui/card"

export const DashIcons = () => {
  return (
    <div>
        {/* left side */}
        <div className=" hidden 2xl:block absolute top-[30%] left-10  animate-bounce">
            <Card className="shadow-xl p-5 hover:scale-110 transition duration-1000 bg-gradient-to-r from-emerald-100/50 ">
            <h2 className="font-semibold text-xl text-emerald-700 italic text-center">
            Best equipment out there !!!
            </h2>
            <p className="text-muted-foreground text-center ">
                Calibrates plates available now
            </p>
            <div className="flex pt-2 space-x-4 items-center justify-center">
            <Dumbbell size={40} className="hover:rotate-45 hover:scale-110 transition duration-500"/>
            <Dumbbell size={40} className="hover:rotate-45 hover:scale-110 transition duration-500"/>
            </div>
            </Card>
        </div>
        {/* Right side */}
        <div className=" hidden 2xl:block absolute top-[30%] right-10 animate-bounce">
            <Card className="shadow-xl p-5 hover:scale-110 transition duration-1000 bg-gradient-to-l from-purple-100/50">
            <h2 className="font-semibold text-xl text-purple-700 italic text-center">
                We have been open for 5 years
            </h2>
            <p className="text-muted-foreground text-center ">
                Get discount- now 10% off
            </p>
            <div className="flex pt-2 space-x-4 items-center justify-center">
            <PartyPopper size={40} className="hover:rotate-45 hover:scale-110 transition duration-500"/>
            <PartyPopper size={40} className="hover:rotate-45 hover:scale-110 transition duration-500"/>
            </div>
            </Card>
        </div>
    </div>
  )
}
