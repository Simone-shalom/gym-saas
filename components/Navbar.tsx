'use client'
import { UserButton } from "@clerk/nextjs/app-beta/client"
import MobileSidebar from "./MobileSidebar"

const Navbar = () => {
  return (
    <div className="p-4 flex items-center">
      <MobileSidebar />
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar