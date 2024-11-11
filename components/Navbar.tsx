import Link from 'next/link'
import React from 'react'
import ProfleAndLogin from './ProfleAndLogin'

function Navbar() {
  const navLinks = [
    {name:"Home",href:"/"},
    {name:"Cart",href:"/cart"},
  ]
  

  return (
    <nav className='flex justify-between items-center w-full px-12 py-4 bg-slate-300'>
      <h1 className='text-3xl text-orange-400 '>nCommerce</h1>
      <div className='flex gap-10'>
      {
        navLinks.map((link)=>(
          <Link href={link.href} key={link.name} className='text-2xl font-bold px-6 '>{link.name}</Link>
        ))
      }
      </div>
      <div>
        <ProfleAndLogin/>
      </div>
      
    </nav>
  )
}

export default Navbar
