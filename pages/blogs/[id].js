import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { db } from '@/firebase';
import { BLOGS } from '@/shared/blogs';
import { collection, doc, getDoc, query } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

function BlogDetail({blogd}) {
  console.log(blogd)
    const router =useRouter()
    
    const   blog = JSON.parse(blogd)
    if(blog){
    return (
    <div className=" w-[100vw] overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        {/**this is the nav bar */}
        <Header/>
              <main className='py-32 space-y-10 px-5'>
              <h1 className='font-bold text-xl lg:text-4xl px-10'>{blog.title}</h1>
              <div className='relative  px-10'>
                  <Image className='h-[200px] lg:h-[300px] ' objectFit='cover' src={blog.image} width={600} height={300}/>
              </div>
            <div className='lg:max-w-[70vw] px-10 space-y-10'> 
              <div dangerouslySetInnerHTML={{ __html:blog.desc}}/> 
              </div> 
      </main> 
              
        
     </div>
      <Footer/>
    </div>
  )
    }
    else{
        return(
            <div className='flex items-center justify-center font-bold '>404 blog not found</div>
        )
    }
}

export default BlogDetail;
export async function getServerSideProps(context){
  console.log(context.query)
 
  const blogRef=doc(db,'blogs',context.query.id)
  const blogDoc=await getDoc(blogRef)
  const blog={
    id:context.query.id,
    ...blogDoc.data()
  }
  
  return {props:{blogd:JSON.stringify(blog)}}
}