'use client'

import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { useProModal } from "@/hooks/use-pro-modal"
import { useAuth, useUser } from "@clerk/nextjs"
import axios from "axios"
import { PartyPopper,} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"
import LandingCategories from "@/components/LandingCategories"

const CodePage = () => {

  const [src, setSrc] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {user} = useUser()
  const proModal = useProModal()

  
  const Generate = async()  => {

    try {
      setLoading(true)

      const response = await axios.post('/api/code')

      setSrc((response.data))
      toast.success("Code generated")

    }catch(error:any){
      if(error?.response?.status === 403 ){
        proModal.onOpen()
      }else {
        toast.error('Something went wrong')
      }
    } finally{
      setLoading(false)
      router.refresh()
    }

  }
  


  return (
    <div className="flex flex-col justify-center items-center px-20">
      <Heading title="Access code" desc="Generate your access code here"
       />
       {src ? (
        <p className="text-lg italic mt-6">Your access code    
          <span className="text-muted-foreground ">  {user?.fullName} </span>
          </p>
       ) :
        <Button onClick={Generate} disabled={loading} className="mt-6">
          Show Qr Your Qr Code
        </Button> }
        {!src && (
           <div className="pt-5">
           <LandingCategories />
           </div>
        )}
      {src && (
        <div className="shadow-xl p-2 rounded-xl mt-2 opacity-80 hover:opacity-100
          cursor-pointer group flex flex-col items-center justify-center">
            <Image src={src} alt='Qr Code' width={300} height={300} 
              className="flex lg:hidden"/>
              <Image src={src} alt='Qr Code' width={400} height={400} 
              className="hidden lg:flex"/>
            <div className="fixed top-[560px] lg:top-[720px]
              hidden group-hover:flex flex-col space-x-3">
                <div className="flex items-center justify-center space-x-2 ">
                  <p className="text-italic text-lg text-purple-800">
                    Scan the Code
                  </p>
                  <PartyPopper size={20}color="purple" 
                    className="transition animate-pulse duration-1000"/>
                </div>
              <p className="text-muted-foreground italic text-sm">
              Thank You for using my app @Simone</p>
            </div>
           
        </div>
      )}
    </div>
  )
}

export default CodePage