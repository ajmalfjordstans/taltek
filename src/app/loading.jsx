import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='absolute top-0 h-[100dvh] w-[100vw] bg-primary flex justify-center items-center'>
      <Image src="/logo/logo_white.png" height={400} width={400} alt='loading' />
    </div>
  )
}
