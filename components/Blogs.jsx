
import { db } from '@/firebase'
import { BLOGS } from '@/shared/blogs'
import { DateFormat } from '@/utils/utils'
import { collection, orderBy, query } from 'firebase/firestore'
import moment from 'moment'
import Image from 'next/image'
//import { useCollection } from 'react-firebase-hooks/firestore';

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

//

function Blogs({blogs}) {
  const router = useRouter()
  console.log(blogs)
  return (
    <div className='my-5 space-y-5 mx-auto p-5'>
      <h1 className='text-[#1890ff] text-xl font-semibold'>Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
        
        {
            blogs?.map((blog,index)=>(
              <div key={index} className='space-y-4 cursor-pointer' onClick={()=>{router.push(`/blogs/${blog.id}`)}}>
                
                <div className=''>
                
                    <Image src={blog.image} className='w-full h-[300px]' width={400} height={400}/>
                
                </div>
                <div className='h-[130px] space-y-4  '>
                <p>{DateFormat(blog.date)}</p>
               
                <h1 className='font-bold text-lg'>{blog.title}</h1>
              </div>
                
              </div>

            ))
        }

      </div>
    </div>
  )
}

export default Blogs



