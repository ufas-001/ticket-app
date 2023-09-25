import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "./dojo-logo.png"
export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt='logo' width={70} quality={100} placeholder='blur'/>
      <h1>Hello Abdul</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
