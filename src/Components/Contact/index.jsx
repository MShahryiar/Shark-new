import { MoveRight } from 'lucide-react'
import React from 'react'
import { Star } from 'lucide-react';

const Contact = () => {
  return (
    <div className={`h-screen flex justify-center items-center bg-[url("/images/pattern-4.png")] `}>
        {/* <img src={"./images/pattern-4.png"}/> */}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center'>

            <h6 className='text-white'>Get free Assessment Today!</h6>
            <h5 className='text-4xl text-white font-bold'>Feel Free To Inquire.</h5>
            <form 
            action="https://formsubmit.co/1751026aa6275ac7477211ff3d40d6f3"  method='POST'
            className='flex flex-col gap-5 my-5 items-center' >
                <input type="text"  className='rounded-md bg-[#476c92] w-full p-3 placeholder:text-gray-200 focus-0 border-0 outline-0 text-gray-200' name='full_name' placeholder='Full Name' />
                <input type="email"  className='rounded-md bg-[#476c92] w-full p-3 placeholder:text-gray-200 focus-0 border-0 outline-0 text-gray-200' name='email' placeholder='Email' />
                <input type="hidden" name="_subject" value="New submission!"/>
                <input type="hidden" name="_next" value="http://localhost:5173/thank"/>
                <input type="hidden" name="_autoresponse" value="Thank you for your message. Our team has received your inquiry and will respond as soon as possible."/>
                <input type="hidden" name="_template" value="table"/>

                <textarea name="message" placeholder='Message' rows={5} cols={50} id=""  className='rounded-md bg-[#476c92] w-full p-3 placeholder:text-gray-200 focus-0 border-0 outline-0 text-gray-200' ></textarea>
                <button type='submit' className='hover:-translate-y-2 duration-300 bg-secondary rounded-md text-white px-5 py-3 flex gap-5 items-center'><MoveRight className='size-5 '/> Send Message</button>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact