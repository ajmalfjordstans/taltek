import TestimonialSwiper from '@/components/testimonial_swiper'
import React from 'react'

export default function Testimonials() {
  return (
    <div className='w-full py-[60px] pl-[5%] pr-[10px] bg-primary flex flex-wrap lg:flex-nowrap gap-[40px]'>
      <p className='text-white font-[700] text-[32px] lg:text-[48px] lg:w-[40%] max-w-[400px] w-full'>What Our Clients Say About Us</p>
      <TestimonialSwiper />
    </div>
  )
}
