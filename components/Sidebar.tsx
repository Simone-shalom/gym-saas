'use client'
import { cn } from "@/lib/utils"
import { Dumbbell, QrCode, Settings, LayoutDashboard } from "lucide-react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from 'next/navigation'
import { useEffect, useState } from "react"
import { auth } from "@clerk/nextjs"
import { ProCard } from "./ProCard"


const montse = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const routes =[
{
  label: 'Virtual Trainer',
  href: '/trainer',
  color: 'text-sky-500'
},
  {
    label: 'Access code',
    href: '/code',
    color: 'text-green-500'
  },
  {
    label: 'Subscription',
    href: '/subscription',
    color: 'text-gray-500'
  },
  
]

interface SidebarProps {
  isPro: boolean
}

const Sidebar = ({isPro}:SidebarProps) => {

  const [showBackground, setShowBackground] = useState(false)


  const TOP_OFFSET = 66

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > TOP_OFFSET) {
            setShowBackground(true)
    }else {
        setShowBackground(false)
    }
}
window.addEventListener('scroll', handleScroll)

return() =>{
    window.removeEventListener('scroll', handleScroll)
}

},[])

  const pathName = usePathname()

  return (
    <nav className= {`  ${showBackground ? ' md:bg-gradient-to-b from-black to-gray-800' : ''} 
      md:w-full md:px-4 md:fixed z-50 shadow-md  space-y-4 flex flex-col md:flex-row h-full md:h-auto   bg-black text-white`}>
      <div className={`flex flex-col md:flex-row items-center gap-8 md:px-5 md:space-x-24 lg:space-x-48 xl:space-x-96   rounded-xl md:justify-between 
        py-3 max-w-7xl md:m-auto transition duration-500 h-24`}>
          <div className="flex items-center justify-center">
        <Link href='/dashboard' className='flex'>
            <div className='relative h-10 w-10'>
                <Image fill alt='Logo' src='/images/loog-gym.jpg'/>
            </div>
            <h1 className={cn ('text-2xl font-bold text-white ml-2', montse.className)} >
                Gymify
            </h1>
        </Link>
        </div>
        <div className='space-y-4 md:space-y-0 pt-10 md:pt-0 flex flex-col md:flex-row items-center justify-center'>
            {routes.map((route) => (
                <Link key={route.href} href={route.href}
                    className={ cn(` font-bold group flex text-center p-3 w-full justify-start
                     cursor-pointer hover:text-white
                     hover:bg-white/10 transition rounded-lg`,
                      pathName === route.href ? 'text-white bg-white/10': 'text-zinc-400')}>
                   <div className='flex items-center flex-1'>
                    {route.label}
                    </div> 
                </Link>
            ))}
        </div>
    </div>
</nav>
  )
}

export default Sidebar