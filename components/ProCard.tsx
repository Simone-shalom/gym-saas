'use client'

import { useProModal } from "@/hooks/use-pro-modal";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreeCounterProps {
    isPro: boolean;
}

export const ProCard = ({isPro}: FreeCounterProps) => {

    const proModal =useProModal()
    const [mounted, setMounted] =useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) {
        return null
    }

  return (
    <div className="flex items-center justify-center px-3">
      <Card className="bg-gray-900/90 border-0">
        <CardContent className="py-6">
            <Button variant='pro' className="w-full"
              onClick={proModal.onOpen} disabled={isPro}>
               {isPro ? 'You are Pro': 'Subscribe'}
                <Zap className='w-4 h-4 ml-2 fill-white'/>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}
