import React from 'react'

export default function hero() {
  return (
    <div className='bg-cover bg-services bg-bottom relative'>
      <div className='min-h-[70vh] w-[100%] container mx-auto flex items-center xl:px-[5%] px-[5%] md:px-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 h-full'></div>
        <div className="relative z-10 h-[80%] w-full items-center justify-center pb-[30px]">
          <p className='font-cabin font-[700] text-[30px] md:text-[42px] lg:text-[53px] mt-[60px] md:mt-0 text-white text-center'>
            Services
          </p>
        </div>
      </div>
    </div>
  )
}