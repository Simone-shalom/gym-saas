'use client'

import LandingCategories from '@/components/LandingCategories'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useAuth, useUser } from '@clerk/nextjs'
import {QrCode, Dumbbell, Settings, ArrowRight, GithubIcon} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from "next/navigation"


const pages = [
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
    label: 'Access code',
    icon: QrCode,
    href: '/code',
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    image: '/images/codeqr.png',
    desc: 'Get access code to your favorite gym'
  },
  {
    label: 'Subscription',
    icon: Settings,
    href: '/subscription',
    color: 'text-gray-500',
    bgColor: 'bg-gray-500',
    image: '/images/settings.webp',
    desc: 'Set your subscription or renew one'
  },
]


const DashboardPage = () => {

  const router = useRouter()
  const {user} = useUser()

  const githubLink = 'https://github.com/Simone-shalom/gym-saas' 

  const goToGitHub = () => {
    window.open(githubLink, "_blank")
  }

  return (
    <div className="pb-6">
    <div className="mb-8 space-y-4 flex items-center justify-center flex-col">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-emerald-700">
        Your dashboard {user?.firstName}
      </h2>
      <Button
          onClick={goToGitHub} 
          variant='secondary' className='hover:opacity-80 hover:scale-110 transition'>
        Github
        <GithubIcon size={32}/>
        </Button>
      <p className="text-muted-foreground text-center text-sm md:text-lg md:px-10">
        Check our new Virtual trainer or get access to your gym anywhere,
         anytime using qr code
      </p>
    </div>
    <LandingCategories />
    <div className="px-4 md:px-12 lg:px-32 space-y-4 flex flex-col items-center pt-5">
      {pages.map((page) => (
        <Card key={page.href}
        onClick={()=> router.push(page.href)}
        className='p-4 border-black/5 flex items-center justify-between
        hover:shadow-xl transition cursor-pointer w-full '>
          <div className='flex items-center gap-x-1'>
            <div className={cn('p-2 rounded-md w-[180px] h-[180px] flex items-center')}>
              <Image src={page.image} width={140} height={100} alt='Tool image'
                className='rounded-md object-cover'/>
            </div>
            <div className='font-semibold lg:w-[120px]'>
              {page.label}
            </div>
            <div className='hidden xl:flex'>
              <div className='flex flex-col items-center px-10'>
              <p className='text-sm font-semibold text-muted-foreground'>
                {page.desc}
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