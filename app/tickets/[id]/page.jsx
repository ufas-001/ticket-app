import React from 'react'
import { notFound } from 'next/navigation'
async function generateStaticParams () {
    const res = await fetch("http://localhost:4000/tickets")
    const tickets = res.json()
    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}
async function getTicket (id) {
    const res = await fetch("http://localhost:4000/tickets/" + id,{
        next: {
            revalidate: 0
        }
    })
    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
        </div>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
        </div>
    </main>
  )
}
