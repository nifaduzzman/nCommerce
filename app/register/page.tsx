'use client'
import Link from 'next/link'
import React, { useState } from 'react'



function Register() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [message, setMessage] = useState<{green:boolean,text:string} >({green:true,text:""})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!username || !email || !password) {
      setMessage({green:false,text:"Please enter all the fields"})
      
    }
    try {
      const res =  await fetch("/api/users",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,email,password})
      })

      const data = await res.json()
      if(data.success){
        setMessage({green:true,text:data.message})
      }
      else{
        setMessage({green:false,text:data.message})
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <main className='grid place-items-center h-screen'>
      <form className='min-h-40 w-96  shadow-xl shadow-orange-500/10 px-8 py-12 rounded-md flex flex-col ' onSubmit={handleSubmit} >
        <h1 className='text-3xl'>Register</h1>
        <div className='*:border *:border-orange-400/25  *:px-4 *:py-2 my-2 flex flex-col gap-2 *:rounded-md '>
          <input type="text" placeholder='Enter your name' spellCheck="false"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
          />
          <input type="email" placeholder='Enter your email'spellCheck="false"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input type="password" placeholder='Set password ' spellCheck="false"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}  
          />
        </div>
        
        <button type='submit' className='px-4 hover:bg-orange-500 active:bg-orange-600 py-2  bg-orange-400 rounded-md '>Register</button>

        <div>
          <p className={message.green ? "text-green-500":"text-red-500"}>{message.text}</p>
        </div>
        <div>Already have an account? <Link href="/login" className='text-orange-400'>Login</Link></div>
      </form>
      
    </main>
  )
}

export default Register
