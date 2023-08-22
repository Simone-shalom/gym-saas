import { checkApiLimit } from "@/actions/api-limit"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from 'openai'
import OpenAI from "openai"
import { increaseApiLimit } from "@/actions/api-limit"
import { checkSubscription } from "@/lib/subscription"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const instructionMessage:ChatCompletionRequestMessage = {
    role: 'system',
    content: `You are a personal trainer.
     You must respond in a few Lines, short responses
     You must answer like a person who workouts every day and know everything about gym .
     explain exercises and how to do them correctly`
} 



export  async function POST(req: Request) {

    try {
        const {userId} = auth()
        const body = await req.json()
        const {messages} =body

        if(!userId){
            return new NextResponse("unauthorized", {status:401})
        }

        if(!messages){
            return new NextResponse("Message not found", {status:400})
        }

        const freeTrial =  await checkApiLimit()

        const isPro = await checkSubscription()

        if(!freeTrial && !isPro){
            return new NextResponse("Free trial has expired", {status:403})
        }

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [instructionMessage, ...messages],
        })

        if(!isPro){
            await increaseApiLimit()
        }

        return NextResponse.json(response.data.choices[0].message)

    }catch(error){
        console.log('POST TRAINER_ERROR' , error)
        return new NextResponse("Internal Server", {status: 500})
    }

}