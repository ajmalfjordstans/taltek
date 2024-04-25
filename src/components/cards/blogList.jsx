import Image from 'next/image'
import React from 'react'

export default function BlogList() {
  return (
    <div className="w-[100%] border-t-[1px] border-t-black text-[16px] flex flex-col-reverse md:flex-row justify-between py-[17px] " >
      <div className="md:w-[70%] pt-[20px] md:pt-0 flex flex-col gap-5">
        <p className='text-primary text-[24px]'>What is a P45 Form?</p>
        <p>February 5, 2024</p>
        <p className='ellipsis '>A P45 is a crucial document in the United Kingdom related to employment and taxation. It is provided by employers to employees when they cease working for a particular company. Here are key points about the</p>
        <div
          className="mt-[12px] flex items-center hover:cursor-pointer gap-3"
        // onClick={() => {
        //   // Blog redirection
        //   history.push(`/blog/${blog.id}`)
        // }}
        >
          <span className="text-primary ">Find out more</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </div>
      </div>
      <div className="w-[100%] md:w-[268px] h-[240px]  mx-auto md:mx-0 flex justify-end">
        <Image src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog picture" className="h-[100%]  object-cover"  height={250} width={250}/>
      </div>
    </div>
  )
}
