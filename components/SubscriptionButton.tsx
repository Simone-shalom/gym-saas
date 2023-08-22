'use client'
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({isPro}:
    SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false)

    const onClick = async() => {
        try {
        
            setLoading(true)

            const response = await axios.get('/api/stripe')

            window.location.href = response.data.url

        }catch(error){
            toast.error("Failed to manage subscription")
        }finally {
            setLoading(false)
        }
    }

  return (
    <Button onClick={onClick} disabled={loading}
        variant={isPro? 'default' : 'pro'}>
        {isPro ? 'Manage Subscription' : 'Subscribe'}
    </Button>
  )
}
