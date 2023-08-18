'use client'

import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const font = Montserrat({
    weight: '600',
    subsets: ['latin']
})


const LandingNavbar = () => {
  return (
    <nav className="flex z-40 lg:mx-20 m-4 justify-between items-center">
        <Link href='/' className="flex items-center">
          <div className="h-16 w-16 relative mr-4 ">
            <Image src='/images/loog-gym.jpg' alt="Logo gym" fill 
                className="object-cover bg-transparent"/>
          </div>
          <h1 className={cn('text-2xl lg:text-3xl font-semibold',
            font.className)}>
            YourGym
          </h1>
        </Link>

        <Link href='/sign-up' className="flex items-center">
            <Button variant='secondary' 
                className="hover:scale-105 hover:opacity-80">
                Get Started
            </Button>
        </Link>

    </nav>
  )
}

export default LandingNavbar