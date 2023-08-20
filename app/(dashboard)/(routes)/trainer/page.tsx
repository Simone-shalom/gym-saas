'use client'
import Heading from "@/components/Heading"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import{Dumbbell} from 'lucide-react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {useRouter} from 'next/navigation'
import axios from 'axios'
import {ChatCompletionRequestMessage} from 'openai'
import { UserAvatar } from "@/components/UserAvatar"
import { BotAvatar } from "@/components/BotAvatar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Loader from "@/components/Loader"


const TrainerPage = () => {

  const [messages, setMessags] = useState<ChatCompletionRequestMessage[]>([])
  const router = useRouter()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //make api call on submit
    try {

      const userMessage:ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt
      }
      const newMessages =[...messages, userMessage]

      const response = await axios.post('/api/trainer', {
        messages: newMessages
      })

      setMessags((current) => [...current, userMessage, response.data])

      form.reset()

    }catch(error) {
      console.log(error)
    }finally{
      router.refresh()
    }
  }


  return (
    <div>
      <Heading title="Virtual Trainer" desc="Advanced AI fitness coach"
        icon={Dumbbell} iconColor="text-sky-500" bgColor="bg-sky-100"/>
        {/*AI Generation with openai api button and messages*/}
        <div className="space-y-2 px-4 lg:px-8">
          <div>
            <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} 
               className='rounded-lg border w-full p-6 px-3 md:px-8 
               focus-within:shadow-sm flex flex-col lg:flex-row gap-2'>
              <FormField control={form.control} name="prompt"  
                render={({field}) => (
                  <FormItem className="flex-1">
                   <FormControl>
                    <Input placeholder="How to squat properly??" {...field}
                      disabled={isLoading} className="border-0 outline-none
                      focus:visible:ring-0 focus-visible:ring-transparent 
                      text-center text-lg
                      lg:text-start"/>
                   </FormControl>
                  </FormItem>
                )}/>
                <Button variant='pro' type="submit" disabled={isLoading}
                  className="lg:w-40">
                  Ask
                </Button>
             </form>
            </Form>
          </div>

          {/*Messages send and received from AI*/}
          <div className="space-y-4 text-center">
          {isLoading && (
              <div className='p-8 rounded-lg h-[200px] w-full flex flex-col items-center
              justify-center bg-muted'>
                <Loader />
                <p className="text-mono text-lg"> Your Trainer is thinking...</p>
              </div>
            )}
            {messages.length === 0 && (
              <div className="w-full h-[300px] rounded-md p-3 flex flex-col
               items-center justify-center pt-40">
                <Image src='/images/arnold.png' alt="arnold photo" 
                width={160} height={100} className="object-cover rounded-2xl"/>
                <p className="text-lg font-mono mx-auto text-center pt-10">
                  Ask me anything, im right here - your personal trainer
                </p>
              </div>
            )}

            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((message) => (
                <div key={message.name} 
                className={cn('p-8 w-full flex items-start gap-x-8 rounded-lg',
                message.role === 'user' ? 'bg-white border border-black/10'
                 : 'bg-muted' )}>
                  {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                  <p>
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default TrainerPage