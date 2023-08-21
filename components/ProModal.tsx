'use client'

import { useProModal } from "@/hooks/use-pro-modal"
import axios from "axios"
import { Check, Dumbbell, QrCode, Zap } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const tools =[
  {
    label: 'Virtual Trainer',
    icon: Dumbbell,
    href: '/trainer',
    color: 'text-sky-500'
  },
    {
      label: 'Access code',
      icon: QrCode,
      href: '/code',
      color: 'text-green-500'
    },
    
  ]

export const ProModal = () => {

    const proModal = useProModal()
    const [loading, setLoading] = useState(false)


    const onSubscribe = async() => {

        try {
            setLoading(true)
            const response = await axios.get('api/stripe')
            window.location.href = response.data.url
        
        }catch(error){
            toast.error('Something went wrong')
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
       <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col
                    gap-y-2 pb-2'>
                    <div className='flex items-center gap-x-2 font-bold py-1'>
                        Became a Member
                    </div>
                    <p className="text-sm text-muted-foreground">Unlimated ussage for just 29.99$ a month</p>
                </DialogTitle>
                <DialogDescription className='text-center pt-2 text-zinc-900
                 font-medium space-y-2'>
                    {tools.map((tool)=> (
                        <Card key={tool.label} 
                            className='p-3 flex justify-between items-center border-black/5'>
                            <div className='flex items-center gap-x-4'>
                                <div className={cn('p-2 w-fit rounded-md')}>
                                    <tool.icon className={cn('w-6 h-6', tool.color)}/>
                                </div>
                                <div className='font-semibold text-sm'>
                                    {tool.label}
                                </div>
                            </div>
                            <Check className='text-primary w-5 h-5'/>
                        </Card>
                    ))}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button 
                onClick={onSubscribe}
                size='lg' variant='pro' className='w-full'
                disabled={loading}>
                Upgrade
                <Zap className='w-4 h-3 ml-2 fill-white'/>
              </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
