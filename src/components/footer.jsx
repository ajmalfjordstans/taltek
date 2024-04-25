import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgb(149, 63, 16) 0%, rgb(84, 84, 84) 100%);"
    }}>
      <div className='min-h-[300px] w-full container xl:px-[5%] px-[5%] md:px-0 py-[80px] text-white mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center mx-auto'>
              <Image src="/logo/logo_white.png" height={80} width={80} alt='logo' />
              <p className='text-[24px] font-bold font-cabin'>TalTek</p>
            </div>
            <div className='flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p className='text-[16px] w-[70%] text-center leading-[30px]'>
                UNIT 4
                Business Development Centre
                Main Avenue
                Treforest Industrial Estate
                Pontypridd, Wales
                CF37 5UR
              </p>
            </div>
            <div className='flex justify-around'>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
          <div className='leading-[30px] py-[20px] md:py-0'>
            <p>Partner With Us</p>
            <p>Customer Review</p>
            <p>Data Security</p>
            <p>Download Brochure</p>
          </div>
          <div className='leading-[30px] py-[20px] md:py-0'>
            <p>Refer and Earn</p>
            <p>Blog</p>
            <p>FAQ & Help</p>
            <p>Contact Us</p>
          </div>
          <div className='w-full'>
            {/* Social Media Icons */}
            <div className='flex gap-3 mx-auto'>
              <div className='bg-white rounded-full flex justify-center items-center h-[40px] w-[40px] p-[13px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-8">
                  <path fill="gray"
                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                  </path>
                </svg>
              </div>
              <div className='bg-white rounded-full flex justify-center items-center h-[40px] w-[40px] p-[7px]'>
                <svg className="w-10 h-10" fill="gray" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </div>
              <div className='bg-white rounded-full flex justify-center items-center h-[40px] w-[40px] p-[10px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8">
                  <path fill="gray"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                  </path>
                </svg>
              </div>
            </div>
            <div className='mt-[10px]'>
              <p>Subscribe to our Newsletter</p>
              <div className='bg-white p-[10px] rounded-[10px] mt-[10px] flex justify-between'>
                <input type="text" className='outline-none text-black w-full' placeholder='Enter your email' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
