"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, {useEffect, useState } from 'react'

function ProfleAndLogin() {
  const {data:session} = useSession()
  const [userData, setUserData] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/users?email=${session?.user?.email}`,)
      const user = await res.json()
      console.log("user",user)
      setUserData(user)
    }
    fetchData()
  },[])
  return (
    <div>
      {session?.user?.email ?(
        <div className='h-12 w-12 rounded-full text-3xl grid place-items-center text-orange-500 bg-slate-900'>{session.user.email.charAt(0).toUpperCase()}</div>
      ):(
        <Link href="/login" className='text-2xl font-bold px-6  bg-orange-200'>SignIn</Link>
      )}
      
    </div>
  )
}

export default ProfleAndLogin
