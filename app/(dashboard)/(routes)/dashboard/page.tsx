'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useAuth, useUser } from '@clerk/nextjs'
import {QrCode, Dumbbell, Settings, ArrowRight} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from "next/navigation"


const tools = [
  {
    label: 'Access code',
    icon: QrCode,
    href: '/code',
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    image: '/images/codeqr.png',
    desc: 'Get access code to your favorite gym'
  },
  {
    label: 'Virtual Trainer',
    icon: Dumbbell,
    href: '/trainer',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500',
    image: '/images/arnold.png',
    desc: 'Ask our virtual trainer modal your questions'
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-gray-500',
    bgColor: 'bg-gray-500',
    image: '/images/settings.webp',
    desc: 'Set your subscription or renew one'
  },
]


const DashboardPage = () => {

  const router = useRouter()
  const {user} = useUser()

  return (
    <div className="">
    <div className="mb-8 space-y-4">
      <h2 className="text-3xl md:text-4xl font-italic text-center">
        Welcome {user?.firstName}
      </h2>
      <p className="text-muted-foreground text-center text-sm md:text-lg md:px-10">
        Check our new Virtual trainer or get access to your gym anywhere,
         anytime using qr code
      </p>
    </div>
    <div className="px-4 md:px-12 lg:px-32 space-y-4 flex flex-col items-center ">
      {tools.map((tool) => (
        <Card key={tool.href}
        onClick={()=> router.push(tool.href)}
        className='p-4 border-black/5 flex items-center justify-between
        hover:shadow-xl transition cursor-pointer w-full '>
          <div className='flex items-center gap-x-1'>
            <div className={cn('p-2 rounded-md w-[180px] h-[180px] flex items-center')}>
              <Image src={tool.image} width={140} height={100} alt='Tool image'
                className='rounded-md object-cover'/>
            </div>
            <div className='font-semibold lg:w-[120px]'>
              {tool.label}
            </div>
            <div className='hidden xl:flex'>
              <div className='flex flex-col items-center px-10'>
              <p className='text-sm font-semibold text-muted-foreground'>
                {tool.desc}
              </p>
              </div>
            </div>
          </div>
          <ArrowRight className='w-5 h-5'/>
      </Card>
      ))}
    </div>
   </div>
  )
}

export default DashboardPage