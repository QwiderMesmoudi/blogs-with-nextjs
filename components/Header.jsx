import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
function Header() {
  return (
    <div className='flex  w-[90vw] justify-between p-5 shadow-sm border-b-2 fixed top-0  bg-white z-50'>
        <div>
            <Image src='https://dopetgztsfho3.cloudfront.net/Logo_DS_blue_bb827584c6.webp' width={150} height={20}/>
        </div>
        <div className='hidden md:flex space-x-5 font-semibold text-lg'>
            <div className='flex space-x-2 items-center'>Services
                <ChevronDownIcon className='w-5 h-5'/>
            </div >
            <div className='flex space-x-2 items-center'>Expertise 
            <ChevronDownIcon className='w-5 h-5'/>
            </div>
            <div className='flex space-x-2 items-center' >Blog
            
            </div>
            <div className='flex space-x-2 items-center' >Company
            <ChevronDownIcon className='w-5 h-5'/>
            </div>
            
        </div>
        <div>
            <button className='bg-[#1890ff] text-white px-5 py-2 font-semibold rounded-md '>
                Contact us
            </button>
        </div>
    </div>
  )
}

export default Header
