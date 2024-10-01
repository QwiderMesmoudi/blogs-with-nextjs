import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';  // Quill editor styles
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

// Dynamically load react-quill to prevent SSR issues in Next.js
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
function WriteBlog() {
  
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    
     const modules = {
    toolbar: [
      // Adding custom toolbar options
      [{ 'font': ['Arial', 'Times New Roman', 'Courier New', 'Roboto']  }],                  // Font family
      [{ 'size': ['small', false, 'large', 'huge'] }],  // Font size
      [{ 'header': '1' }, { 'header': '2' },{'header':'3'}],          // Header levels
      [{ 'color': [] }, { 'background': [] }],         // Text color and background
      ['bold', 'italic', 'underline', 'strike'],       // Text styling
      [{ 'script': 'sub' }, { 'script': 'super' }],    // Subscript / superscript
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],   // Lists
      [{ 'align': [] }],                              // Alignment
      ['link', 'image', 'video'],                     // Link, Image, Video
      ['clean'],                                      // Remove formatting
    ],
  };

  const formats = [
    'font', 'size', 'header', 'color', 'background',
    'bold', 'italic', 'underline', 'strike', 'script', 'list', 'align', 'link', 'image', 'video',
  ];
    
    const handleChange = (content) => {
      setValue(content);  // Store the content from the editor
    };

    const publishBlog= async()=>
    {
        await addDoc(collection(db,'blogs'),{
            title:title,
            desc:value,
            image:image,
            
            date:serverTimestamp()
            })

            setTitle('')
            setImage('')
            setValue('')

    }

    return (
    <div className=" w-[100vw] overflow-x-hidden">
      <div className="mx-auto px-10">
        {/**this is the nav bar */}
        <Header/>
    <main className='my-32 space-y-10  px-10'>
      <h1 className='text-2xl lg:text-4xl font-semibold'>Add A Blog</h1>
        <div className='flex flex-col space-y-5'>
            <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title' className='w-100 text-2xl p-4 border border-gray-200 rounded-lg outline-none'/>
            <input type='text' value={image} placeholder='Past The Url of The Image' onChange={(e)=>{setImage(e.target.value)}} className='p-4 border border-gray-200 rounded-lg outline-none'/>
            </div>   
      <ReactQuill value={value} onChange={handleChange} className='border border-gray-200 rounded-lg'
      modules={modules}
      formats={formats}
      />
      
      <button className='bg-[#1890ff] text-white rounded-md px-4 py-3' onClick={publishBlog}>publish</button>
    </main>
        </div>
      <Footer className=''/>
    </div>
  )
}

export default WriteBlog
