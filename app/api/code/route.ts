import { NextResponse } from "next/server";
import { checkApiLimit, increaseApiLimit } from "@/actions/api-limit";
import { auth } from "@clerk/nextjs";
import { checkSubscription } from "@/lib/subscription";
import  QRCode  from "qrcode";


export async function POST(req: Request, res: Response) {

    try {
        const {userId} = auth()

        if(!userId) {
            return new NextResponse('Unauthorized', {status:401})
        }

        const freeTrial =  await checkApiLimit()

        const isPro = await checkSubscription()

        if(!freeTrial && !isPro){
            return new NextResponse("Free trial has expired", {status:403})
        }

        const response = await QRCode.toDataURL(`http://YourDatabase/users/${userId}`)

        if(!isPro){
            await increaseApiLimit()
        }

        return NextResponse.json(response)

    }catch(error :any){
        console.log('POST code error:', error)
        return new NextResponse("Internal server error", {status:500})
    }

}