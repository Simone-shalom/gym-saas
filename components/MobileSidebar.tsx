'use client'

import Sidebar from "./Sidebar"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import {Menu} from 'lucide-react'

const MobileSidebar = () => {
  return (
   <Sheet>
    <SheetTrigger>
      <Button variant='ghost' className="md:hidden">
        <Menu size={20}/>
      </Button>
    </SheetTrigger>
    <SheetContent side='left' className="p-0 w-72">
        <Sidebar />
    </SheetContent>
   </Sheet>
  )
}

export default MobileSidebar