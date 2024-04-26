'use client'
import React from 'react'
import Hero from './hero'
import ContactForm from '@/components/forms/contact_form'
import Reveal from '@/components/animation/reveal'

export default function Page() {
  return (
    <div className=''>
      <Hero />
      <div className='bg-white py-[30px] container mx-auto xl:px-[5%] px-[5%] md:px-0'>
        <p className='text-center font-[700] font-cabin text-[30px] md:text-[42px] lg:text-[53px] text-primary'>Send us a message</p>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
