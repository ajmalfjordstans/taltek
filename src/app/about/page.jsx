import React from 'react'
import Hero from './hero'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Hero />
      <div className='container mx-auto xl:px-[5%] px-[5%] md:px-0 py-[60px] text-center leading-[20px]'>
        <div className='max-w-[850px] mx-auto'>
          <p> TalTek is a leading provider of SAP solutions and corporate training, leveraging a unique ecosystem of managed freelance consultants.</p>
          <p className='mt-[30px]'>At TalTek, our strength comes from our unique ecosystem of managed freelance consultants.  We offer support and solutions for several SAP modules, including MM, PLM, SD, QM, FI, and HCM.  In addition, we offer corporate training in 19 SAP Training Modules, helping build your staff&apos;s self-reliance.</p>
        </div>
        <div className='flex flex-col gap-10 mt-[60px]'>
          <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
            <Image src="/images/services/expertise.jpg" height={300} width={400} alt='service' className='mx-auto' />
            <div className='flex flex-col gap-4'>
              <p className='font-[700] font-cabin text-[22px]'>Our Areas of Expertise</p>
              <div className='max-w-[600px] mx-auto'>
                <p>SAP Module Support: MM, PLM, SD, QM, FI, HCM</p>
                <p>Corporate Training in 19 SAP Training Modules</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center'>
            <div className='flex flex-col gap-4'>
              <p className='font-[700] font-cabin text-[22px]'>Mission</p>
              <div className='max-w-[600px] mx-auto'>
                <p>Our mission is to build long-lasting, mutually beneficial relationships with our clients by delivering effective solutions and exceptional service.</p>
              </div>
            </div>
            <Image src="/images/services/mission.jpg" height={300} width={400} alt='service' className='mx-auto' />
          </div>
          <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
            <Image src="/images/services/values.jpg" height={300} width={400} alt='service' className='mx-auto' />
            <div className='flex flex-col gap-4'>
              <p className='font-[700] font-cabin text-[22px]'>Core Value</p>
              <div className='max-w-[600px] mx-auto'>
                <p>At TalTek, we value Ownership above all else Focusing on Ownership allows us to never waver from owning our responsibilities to our clients, our consultants, our solutions, and our own integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
