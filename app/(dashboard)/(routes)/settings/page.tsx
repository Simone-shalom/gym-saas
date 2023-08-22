import Heading from "@/components/Heading"
import { SubscriptionButton } from "@/components/SubscriptionButton"
import { Card, CardContent } from "@/components/ui/card"
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"


const SettingsPage = async() => {

  const isPro = await checkSubscription()


  return (
    <div>
       <Heading title="Settings" desc="You can change your plan here"
        icon={Settings} iconColor="black" bgColor="bg-gray-300"/>
        <div className='flex flex-col items-center justify-center px-12 space-y-4
          pt-10'></div>
      <Card className='mx-auto p-10 border-black/5 flex items-center justify-center
          hover:shadow-md transition  cursor-pointer'>
       
        <div className='flex flex-col items-center justify-center px-12 space-y-4
          '>
            <div className='text-muted-foreground text-lg'>
                {isPro ? 'You are currenlty on pro plan': 'You are on free trial'}
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
      </Card>
        <div className="pt-48">
          
        </div>
    </div>
  )
}

export default SettingsPage