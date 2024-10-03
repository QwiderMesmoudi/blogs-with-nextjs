import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const router=useRouter()
  return (
    <div className='flex w-[100%]    justify-between py-5 pl-8 pr-24 shadow-sm border-b-2 fixed top-0  bg-white z-50 items-center'>
        <div onClick={()=>{
            router.push('/')
        }} className='cursor-pointer'>
            <Image src='https://dopetgztsfho3.cloudfront.net/Logo_DS_blue_bb827584c6.webp' width={150} height={20}/>
        </div>

        

        <div className={` md:flex   space-x-5  text-md ${isOpen ? 'flex flex-col items-center' : 'hidden'}`}>
            <div className='flex cursor-pointer  space-x-2 items-center'><p>Services</p>
                <ChevronDownIcon className='w-5 h-5'/>
            </div >
            <div className='flex cursor-pointer space-x-3 items-center'><p>Expertise</p> 
            <ChevronDownIcon className='w-5 h-5'/>
            </div>
            <div className='flex cursor-pointer space-x-2 items-center' ><p>Case Studies</p>
            
            </div>
            <div className='flex space-x-2 items-center cursor-pointer' onClick={()=>{
            router.push('/write')
        }}>Blog
            
            </div>
            <div className='flex space-x-2 items-center' ><p>Company</p>
            <ChevronDownIcon className='w-5 h-5'/>
            </div>
            
        </div>
        <div>
            <button className='bg-[#1890ff] text-white px-5 py-2 font-semibold rounded-md  hidden md:inline-flex'>
                Contact us
            </button>
            <button
          onClick={toggleMenu}
          className="text-[#1890ff] block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          
        </button>
        </div>
    </div>
  )
}

export default Header
