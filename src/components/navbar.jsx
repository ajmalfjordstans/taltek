'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="bg-gray text-white p-4">
      <div className="container mx-auto flex justify-between items-center xl:px-[5%] px-[5%] md:px-0">
        <div className='flex items-center'>
          <Image src="/logo/logo_white.png" height={80} width={80} alt='logo' />
          <p className='text-[24px] font-bold font-cabin'>TalTek</p>
        </div>
        {/* <a href="#" className="text-xl font-bold">My App</a> */}
        <div className='hidden lg:block'>
          <ul className="flex space-x-6">
            <Link href="/"><p className="hover:text-gray-300">Home</p></Link>
            <Link href="/about"><p className="hover:text-gray-300">About</p></Link>
            <Link href="/services"><p className="hover:text-gray-300">Our Services</p></Link>
            <Link href="/blogs"><p className="hover:text-gray-300">Resources</p></Link>
            <Link href="contact"><p className="hover:text-gray-300">Contact Us</p></Link>
          </ul>
        </div>
        <div className='lg:hidden block'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      {/* Menu */}
      {showMenu && (
        <div className="lg:hidden absolute top-0 right-0 h-full bg-gray text-white z-20 transition-all duration-300 transform translate-x-0  w-[80vw]">
          <div className="px-[30px] relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ml-4 absolute right-2 top-[-30px]"
              onClick={() => setShowMenu(false)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <ul className="flex flex-col space-y-4 mt-16">
              <Link href="/"><p className="hover:text-gray-300" onClick={() => setShowMenu(false)}>Home</p></Link>
              <Link href="/about"><p className="hover:text-gray-300" onClick={() => setShowMenu(false)}>About</p></Link>
              <Link href="/services"><p className="hover:text-gray-300" onClick={() => setShowMenu(false)}>Our Services</p></Link>
              <Link href="/blogs"><p className="hover:text-gray-300" onClick={() => setShowMenu(false)}>Resources</p></Link>
              <Link href="contact"><p className="hover:text-gray-300" onClick={() => setShowMenu(false)}>Contact Us</p></Link>
            </ul>
          </div>
        </div>
      )}
    </nav >
  )
}
