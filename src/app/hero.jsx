import EnquiryForm from '@/components/forms/enquiry_form'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-cover bg-hero relative'>
      <div className='min-h-[100%] w-[100%] container mx-auto items-center xl:px-[5%] px-[5%] md:px-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 h-full'></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-[80%] items-center pb-[30px]">
          <p className='font-cabin font-[700] text-[30px] md:text-[42px] lg:text-[53px] mt-[60px] md:mt-0 text-white '>
            Accounting Simplified <br />
            New Ideal Cloud Solution
          </p>
          <EnquiryForm />
        </div>
      </div>
    </div>
  )
}
