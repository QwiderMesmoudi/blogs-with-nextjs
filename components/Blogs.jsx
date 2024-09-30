import { BLOGS } from '@/shared/blogs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogs() {
  return (
    <div className='my-5 space-y-5 mx-auto p-5'>
      <h1 className='text-[#1890ff] text-xl font-semibold'>Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
        
        {
            BLOGS.map((blog,index)=>(
              <div key={index} className='space-y-5 '>
                
                <div className='relative'>
                
                    <Image src={blog.image} className='w-full h-[300px]' width={400} height={400}/>
                
                </div>
                <p>{blog.date}</p>
                <Link href={`/blogs/${blog.title}`}>
                <h1 className='font-bold text-lg'>{blog.title}</h1>
                </Link>
              </div>

            ))
        }

      </div>
    </div>
  )
}

export default Blogs
