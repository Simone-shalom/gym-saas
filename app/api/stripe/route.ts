import {auth,currentUser} from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'

const subscriptionUrl = absoluteUrl('/subscription')

export async function GET() {

    try{

        const {userId} = auth()
        const user = await currentUser()

        if(!user || !userId){
            return new NextResponse('unauthorized', {status: 401})
        }

        const userSubscription = await prismadb.userSubscription.findUnique({
            where: {
                userId: userId,
            }
        })

        if(userSubscription && userSubscription.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: subscriptionUrl
            })
            return new NextResponse(JSON.stringify({url: stripeSession.url}))
        }
        //stripe checkout create session api-reference 
        const stripeSession = await stripe.checkout.sessions.create({
            success_url: subscriptionUrl,
            cancel_url: subscriptionUrl,
            payment_method_types: ['card'],
            mode: 'subscription',
            billing_address_collection: 'auto',
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: 'USD',
                        product_data: {
                            name: 'Gymify Pro',
                            description: "Unlimited Access"
                        },
                        unit_amount: 2900,
                        recurring: {
                            interval: 'month'
                        }
                    },
                    quantity: 1
                }
            ],
            metadata: {
                userId
            }
        })

        return new NextResponse(JSON.stringify({url: stripeSession.url}))

    }catch(error){
        console.log('Stripe error', error)
        return new NextResponse('Internal Server Error', {status: 500})
    }
}