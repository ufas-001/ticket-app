import React from 'react'
import CreateForm from "./CreateForm"
export default async function CreateTicket() {
  return (
    <main>
       <h2 className='text-center'>Open a new ticket</h2> 
       <CreateForm />
    </main>
  )
}
