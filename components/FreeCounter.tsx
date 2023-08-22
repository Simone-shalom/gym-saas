'use client'

import { useProModal } from "@/hooks/use-pro-modal";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { MAX_FREE_COUNT } from "@/constants";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
}

export const FreeCounter = ({apiLimitCount, isPro}: FreeCounterProps) => {

    const proModal =useProModal()
    const [mounted, setMounted] =useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) {
        return null
    }

  return (
    <div className="fixed bottom-20 w-[240px] px-3">
      <Card className="bg-gray-900/90 border-0">
        <CardContent className="py-6">
            <div className="text-center text-sm text-white mb-4 space-y-2">
                <p>
                    {apiLimitCount} / {MAX_FREE_COUNT} Free trial 
                </p>
                <Progress value={apiLimitCount/ MAX_FREE_COUNT *100} 
                    className="rounded-none h-4"/>
            </div>
            <Button variant='pro' className="w-full"
              onClick={proModal.onOpen} disabled={isPro}>
               {isPro ? 'You are Pro': 'Upgrade'}
                <Zap className='w-4 h-4 ml-2 fill-white'/>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}
