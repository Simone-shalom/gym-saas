'use client'
import { cn } from "@/lib/utils"
import { Urbanist } from "next/font/google"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import {useAuth} from '@clerk/nextjs'


const font = Urbanist({
  weight: '600',
  subsets: ['latin']
})

const LandingHero = () => {

  const { isSignedIn } = useAuth();

  return (
    <div className="h-[500px] relative">
      <div className="w-full">
        <Image src='/images/gymhero.jpg' alt="hero Image" fill
            className="object-cover"/>
      </div>
      <div className="absolute top-[0%] h-[100px] w-full bg-gradient-to-b
       from-black to-transparent z-10 ">
      </div>
      <div className="absolute top-[50%] h-[250px] w-full bg-gradient-to-t
       from-black to-transparent z-10 ">
      </div>

      <div className="absolute flex flex-col items-center justify-center py-40 
        md:px-40 lg:px-64 z-20 p-4 w-full text-center space-y-2">
        <div className={cn(`text-4xl md:text-5xl xl:text-6xl 
           font-bold`, font.className)}>
            Best membership
            <br />
            gym platform 
         </div>
         <p className="text-lg text-gray-200">
            Simplify life for your users
            <br /> using our membership system
         </p>
         <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
          <Button variant='premium'  className="text-xl font-italic p-4 md:p-6 ">
            Join Now
          </Button>
         </Link>
      </div>
    </div>
  )
}

export default LandingHero