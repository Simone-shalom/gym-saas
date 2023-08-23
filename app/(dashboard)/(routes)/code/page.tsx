'use client'

import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import QRCode from 'qrcode'
import { useState } from "react"
import { toast } from "react-hot-toast"

const CodePage = () => {

  const [src, setSrc] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  
  const Generate = async()  => {

    try {
      setLoading(true)

      const response = await axios.post('/api/code')

      setSrc((response.data))
      toast.success("Code generated")

    }catch(error:any){
      toast.error('Something went wrong')
    } finally{
      setLoading(false)
      router.refresh()
    }

  }
  


  return (
    <div>
       {src ? (
        <div>Your access code</div>
       ) :
        <Button onClick={Generate} disabled={loading}>
          Show Qr Your Qr Code
        </Button> }
      {src && (
          <div>
          <Image src={src} alt='Qr Code' width={200} height={200}/>
        </div>
      )}
    </div>
  )
}

export default CodePage