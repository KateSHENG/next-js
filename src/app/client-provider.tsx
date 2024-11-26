// 'use client'

// import { SessionProvider } from "next-auth/react"

export default function Provider ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {
    
  return <section >
    {children}
  </section>
}