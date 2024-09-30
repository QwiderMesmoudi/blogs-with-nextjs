import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { BLOGS } from '@/shared/blogs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

function BlogDetail() {
    const router =useRouter()
    const {title}=router.query
    const   blog = BLOGS.find((blog) => blog.title === title);
  return ({blog}&&
    <div className=" w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        {/**this is the nav bar */}
        <Header/>
        <main className='py-32 space-y-10 px-5'>
        <h1 className='font-bold text-xl lg:text-4xl'>{title}</h1>
        <div className='relative  px-10'>
            <Image className='h-[200px] lg:h-[300px] ' objectFit='cover' src={blog.image} width={600} height={300}/>
        </div>
      <div className='lg:max-w-[70vw] px-10 space-y-10'> 
     <div className='space-y-3'>
    <h1 className='font-extrabold'>Customer Relationship Management</h1>
    <p className='text-lg text-gray-500 '>Features like lead scoring and predictive analytics help businesses easily spot promising leads and improve their sales efforts. Moreover, AI chatbots provide support 24/7, helping to answer the most common questions quickly and efficiently. Sixty-seven percent of customers prefer solving their problems without speaking to live agents. This builds stronger connections with customers and encourages business growth.</p>       
    </div>
    <div className='space-y-3'>
    <h1 className='font-bold'>Product development</h1>
    <p className='text-lg text-gray-500 '>Using AI in product development offers valuable insights from user data analysis. They help generate innovative ideas, streamline tasks such as prototyping and testing, and even assist with coding and debugging – better overall outcomes are on the surface. By spotting problems quickly, AI helps improve product quality and reliability, resulting in better products.</p>       
    </div>

    <div className='space-y-3'>
    <h1 className='font-bold'>Project management</h1>
    <p className='text-lg text-gray-500 '>Providing project management with AI tools makes the process much easier, saving time for important decision-making. AI can automate task assignments by analyzing workloads, deadlines, and team members' skills. AI-powered tools can also automate time tracking and generate detailed productivity reports. Resource optimization becomes easier with AI, as it can allocate resources based on real-time availability and project needs. Now, project managers have more time to concentrate on key projects, thus improving efficiency and productivity.</p>       
    </div>

    </div> 
 </main> 
        
        
     </div>
      <Footer/>
    </div>
  )
}

export default BlogDetail;
