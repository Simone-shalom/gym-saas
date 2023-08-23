'use client'
import { UserButton } from "@clerk/nextjs/app-beta/client"
import MobileSidebar from "./MobileSidebar"

interface NavbarProps {
  apiLimitCount: number
  isPro: boolean
}

const Navbar = ({apiLimitCount, isPro}:NavbarProps) => {
  return (
    <div className="p-4 flex items-center">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar