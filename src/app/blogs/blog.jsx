import BlogList from '@/components/cards/blogList'
import React from 'react'

export default function Blog() {
  return (
    <div className='container mx-auto py-[60px] xl:px-[5%] px-[5%] md:px-0'>
      <p className='text-center font-[700] font-cabin text-[30px] md:text-[42px] lg:text-[53px] mb-[30px]'>Resources</p>
      <BlogList />
      <BlogList />
      <BlogList />
      <BlogList />
      <BlogList />
    </div>
  )
}
