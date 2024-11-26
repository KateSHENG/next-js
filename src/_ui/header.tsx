'use client'
 
import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import UserAvatar from './userAvatar'
export  function Header() {
  const pathname = usePathname()
 
  return (
    <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      {/* <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
      <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
        Dashboard
      </Link>
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
      <UserAvatar /> */}
    </nav>
  )
}
