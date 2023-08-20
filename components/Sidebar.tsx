'use client'
import { cn } from "@/lib/utils"
import { UserApiLimit } from "@prisma/client"
import { Dumbbell, QrCode, Settings, LayoutDashboard } from "lucide-react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from 'next/navigation'
import { FreeCounter } from "./FreeCounter"


const montse = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const routes =[
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-purple-500'
},
  {
    label: 'Access code',
    icon: QrCode,
    href: '/code',
    color: 'text-green-500'
  },
  {
    label: 'Virtual Trainer',
    icon: Dumbbell,
    href: '/trainer',
    color: 'text-sky-500'
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-gray-500'
  },
  
]

interface SidebarProps {
  apiLimitCount:number
}

const Sidebar = ({apiLimitCount}:SidebarProps) => {

  const pathName = usePathname()

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-black text-white'>
    <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
            <div className='relative w-8 h-8 mr-4'>
                <Image fill alt='Logo' src='/images/loog-gym.jpg'/>
            </div>
            <h1 className={cn ('text-2xl font-bold', montse.className)} >
                Gymify
            </h1>
        </Link>
        <div className='space-y-1'>
            {routes.map((route) => (
                <Link key={route.href} href={route.href}
                    className={ cn(`text-sm group flex p-3 w-full justify-start
                    font-medium cursor-pointer hover:text-white
                     hover:bg-white/10 transition rounded-lg`,
                      pathName === route.href ? 'text-white bg-white/10': 'text-zinc-400')}>
                   <div className='flex items-center flex-1'>
                    <route.icon className={cn('h-5 w-5 mr-3', route.color)}/>
                    {route.label}
                    </div> 
                </Link>
            ))}
        </div>
    </div>
    <div className="flex justify-center">
      <FreeCounter apiLimitCount={apiLimitCount}/>
    </div>
</div>
  )
}

export default Sidebar