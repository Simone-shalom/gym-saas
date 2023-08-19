import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from '@/components/CrispProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gymify',
  description: 'Your gym membership application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
