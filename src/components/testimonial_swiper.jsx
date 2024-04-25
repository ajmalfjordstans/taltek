import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Avatar } from '@material-tailwind/react';

export function SwiperCard() {
  return (
    <div className='w-full bg-white rounded-[10px] shadow-lg border-black p-[20px]'>
      <p className='italic font-[300]'>Taltek worked with Perfect Accounting and they were an extremely professional, and dependable payroll vendor for our needs at the time. During the time working together, Perfect Accounting on-boarded quickly and smoothly and ensured the employee experience continued to be positive throughout the duration of...</p>
      <div className='mt-[15px] flex gap-3'>
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div>
          <p className='font-cabin text-[18px]'>Kevin Evans</p>
          <p className='text-[12px]'>Harlequin Home care services Ltd</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSwiper() {
  const breakpoints =
  {
    320: { slidesPerView: 1.1, spaceBetween: 15, },
    530: { slidesPerView: 2.1, spaceBetween: 15, },
    1440: { slidesPerView: 3.1, spaceBetween: 15, },
  }

  return (
    <div className='w-full lg:w-[75%] flex gap-7'>
      <Swiper
        // spaceBetween={20}
        // slidesPerView={3}
        breakpoints={breakpoints}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><SwiperCard /></SwiperSlide>
        <SwiperSlide><SwiperCard /></SwiperSlide>
        <SwiperSlide><SwiperCard /></SwiperSlide>
        <SwiperSlide><SwiperCard /></SwiperSlide>
        <SwiperSlide><SwiperCard /></SwiperSlide>
        <SwiperSlide><SwiperCard /></SwiperSlide>

      </Swiper>
    </div>
  )
}
