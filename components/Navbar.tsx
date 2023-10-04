'use client'
import { UserButton } from "@clerk/nextjs/app-beta/client"
import MobileSidebar from "./MobileSidebar"

interface NavbarProps {
  isPro: boolean
}

const Navbar = ({isPro}:NavbarProps) => {
  return (
    <div className="p-4 flex">
      <MobileSidebar isPro={isPro}/>
      <div className="ml-auto fixed border-2  border-white rounded-xl top-8 right-6  z-50">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar