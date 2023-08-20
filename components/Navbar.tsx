'use client'
import { UserButton } from "@clerk/nextjs/app-beta/client"
import MobileSidebar from "./MobileSidebar"

interface NavbarProps {
  apiLimitCount: number
}

const Navbar = ({apiLimitCount}:NavbarProps) => {
  return (
    <div className="p-4 flex items-center">
      <MobileSidebar apiLimitCount={apiLimitCount}/>
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar