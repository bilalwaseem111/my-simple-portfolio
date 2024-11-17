import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Contact to me</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Send me a msg or call me 
                </p>
              <div className='flex gap-3 place-items-center'>
              <MdOutlineMarkEmailRead size={30} /> bilalwaseem.thala@gmail.com

              </div>

              <div className='flex gap-3 place-items-center'>
              <BsTelephoneOutbound size={30} /> 03372412661 </div>

                <div className='space-y-8'></div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='msg'>Message</label>
                    <textarea
                    className=' bg-transparent border border-accent'
                    id='msg' rows={8}>
                        </textarea>
                </div>
                <button className='bg-accent p-2 px-6'>Send</button>
              </div>
            </div>

        </div>
      
    
  )
}

export default Contact
