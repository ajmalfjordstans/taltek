import Image from 'next/image'
import React from 'react'

export default function Mission() {
  return (
    <div className='bg-[#e4e4e4]'>
      <div className='container mx-auto xl:px-[5%] px-[5%] md:px-0 py-[60px] flex flex-wrap gap-[30px] lg:flex-nowrap lg:gap-7'>
        <div className='lg:w-[65%] grid grid-cols-2 gap-3 text-primary font-[700] text-[24px] md:text-[27px] font-cabin mx-auto'>
          <div className='bg-white rounded-[6px] p-[20px] flex flex-col justify-between'>
            <p className=''>Relationships</p>
            <Image src="/images/mission/relationship.png" height="200" width="200" alt="mission" className='mx-auto mt-[30px]' />
          </div>
          <div className='bg-white rounded-[6px] p-[20px] rounded-tr-[80px] flex flex-col justify-between'>
            <p className='text-right'>Solutions</p>
            <Image src="/images/mission/solutions.png" height="200" width="200" alt="mission" className='mx-auto mt-[30px]' />
          </div>
          <div className='bg-white rounded-[6px] p-[20px] rounded-bl-[80px] flex flex-col justify-between'>
            <p className=''>Service</p>
            <Image src="/images/mission/service.png" height="200" width="200" alt="mission" className='mx-auto' />
          </div>
          <div className='bg-white rounded-[6px] p-[20px] flex flex-col justify-between'>
            <p className='text-right'>Ownership</p>
            <Image src="/images/mission/ownership.png" height="200" width="200" alt="mission" className='mx-auto' />
          </div>
        </div>
        <div className='lg:w-[30%] flex flex-col justify-evenly gap-[20px]'>
          <div>
            <p className='font-cabin font-[700] text-[22px]'>Our Mission</p>
            <p className='text-[18px] mt-[15px]'>&quot;Our mission is to build long-lasting, mutually beneficial relationships with our clients by delivering effective solutions and exceptional service.&quot;</p>
          </div>
          <div>
            <p className='font-cabin font-[700] text-[22px]'>Our Vision</p>
            <p className='text-[18px] mt-[15px]'>&quot;: At TalTek, we value Ownership above all else. Focusing on Ownership allows us
              to never waver from owning our responsibilities to our clients, our consultants, our solutions,
              and our own integrity.&quot;</p>
          </div>
        </div>
      </div>
    </div>
  )
}
