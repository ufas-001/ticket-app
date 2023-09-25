"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {
  const router = useRouter()  
  const [title, setTittle] = useState("")
  const [body, setBody] = useState("")
  const [priority, setPriority] = useState("low")
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const newTicket = {title, body, priority, user_email: "hello@test.mail"}
    const res = await fetch("http://localhost:4000/tickets", {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(newTicket)
    })

    if (res.status === 201){
        router.refresh()
        router.push("/tickets")
    }
  }
  return (
   <form onSubmit={handleSubmit}>
      <label>
         <span>Title:</span>
         <input
           required 
           type="text"
           value={title}
           onChange={(e) => setTittle(e.target.value)}
         />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
         { isLoading && (<span>Adding ....</span>) }
         { !isLoading && (<span>Add Ticket</span>) }
    </button>
   </form>
  )
}
