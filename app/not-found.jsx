import React from 'react'
import Link from 'next/link'
export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-red-700'>There was a problem</h2>
        <p>We could not find the page you are looking for.</p>
        <p>Go back to the <Link href="/" className='text-green-950'>DashBoard</Link></p>
    </main>
  )
}
