import { FOOTERIMAGES } from '@/shared/footerimages'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='h-[300px] bg-[#1890ff] text-white space-y-5 p-10'>
      <div className="mx-auto max-w-6xl space-y-10">
        <div className='grid grid-cols-2 lg:grid-cols-4'>
            <div className='space-y-5'>
                <div className='relative'>
                    <Image src='https://dopetgztsfho3.cloudfront.net/Logo_DS_fe61034bb2.webp' width={150} height={150}/>
                </div>
                <p className='text-gray-100'>
                DigitalSuits is a full-cycle ecommerce agency with a focus on Shopify development and extensive expertise in custom software development.
                </p>
            </div>
            <div className='gap-6'>
                <h3 className='font-semibold'>Contact us</h3>
                <p className='text-gray-100'>test@gmail.com</p>
            </div>
            <div>
                <h3 className='font-semibold'>Company</h3>
                <p className='text-gray-100'>About us</p>
                <p className='text-gray-100'>contact us</p>
            </div>
            <div className='space-y-3'>
                <h3 className='font-semibold'>Resources</h3>
                <p className='text-gray-100'>Blog</p>
                <p className='text-gray-100'>ase studies</p>
            </div>
        </div>
        <div className='grid grid-cols-4 p-5 place-items-center'>
           {
            FOOTERIMAGES.map((footer,index)=>(
                <div key={index} className='relative'>
                    <Image src={footer.image} width={200} height={200}/>
                </div>

            ))
           }

        </div>
      </div>
    </div>
  )
}

export default Footer
