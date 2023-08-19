'use client'

import {useEffect} from 'react'
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {

    useEffect(() => {
        Crisp.configure('7e27c7a9-1252-4ffe-a9a1-d6d7125e9b38')
    },[])

    return null
}