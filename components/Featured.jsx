import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <div className='mt-32 mb-10 space-y-10 p-5'>
        <div className='space-y-2'>
        <h1 className='text-2xl  md:text-3xl lg:text-5xl font-bold'>Tech news & latest updates in IT sphere</h1>
        <p className='text-xl lg:text-2xl text-gray-700' >Here we share our expertise about creation, development and delivery of software products</p>
        </div>
        <div className='lg:flex space-x-5 items-center space-y-10 '>
            <div className='max-w-[350px] space-y-5'>
                <p className='bg-blue-100 w-[150px] font-extrabold p-1'>Featured articles</p>
                <h1 className='font-bold text-lg'>Hire a Shopify development company</h1>
                <p className='text-gray-600'>
                Discover the advantages of hiring a Shopify development company. Learn valuable tips for selection based on portfolio, client reviews, communication, and technical proficiency.
                </p>

            </div>
            <div className='relative flex-1 bg-red-100 '>
              <Image className='w-full rounded-md ' objectFit='cover' src={'https://dopetgztsfho3.cloudfront.net/Top_Reasons_to_Hire_a_Shopify_Development_Company_663e1c3fca.webp'} width={300} height={300}/>  
            </div>
        </div>
        

    </div>
  )
}

export default Featured
