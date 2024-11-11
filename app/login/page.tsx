"use client"

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [message, setMessage] = useState<{green:boolean,text:string} >({green:true,text:""})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if( !email || !password) {
      setMessage({green:false,text:"Please enter all the fields"})
    }

    const res = await signIn("credentials",{email,password,redirect:false})
    if(res?.error) {
      setMessage({green:false,text:"Error to login"})
      return
    }
    console.log(res)

    setMessage({green:true,text:"Login successful"})
    redirect("/")
    return;
  }
  return (
  
    <main className='grid place-items-center h-screen'>
      <form className='min-h-40 w-96  shadow-xl shadow-orange-500/10 px-8 py-12 rounded-md flex flex-col ' onSubmit={handleSubmit} >
        <h1 className='text-3xl'>Login</h1>
        <div className='*:border *:border-orange-400/25  *:px-4 *:py-2 my-2 flex flex-col gap-2 *:rounded-md '>
  
          <input type="email" placeholder='Enter your email'spellCheck="false"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input type="password" placeholder='Set password ' spellCheck="false"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}  
          />
        </div>
        
        <button type='submit' className='px-4 hover:bg-orange-500 active:bg-orange-600 py-2  bg-orange-400 rounded-md '>Login</button>

        <div>
          <p className={message.green ? "text-green-500":"text-red-500"}>{message.text}</p>
        </div>
        <div>
          <p>Don't have an account?<Link href="/register">register</Link></p>
        </div>
      </form>
      
    </main>
  )
}

export default Login
