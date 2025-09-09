import React from 'react'
import { Check } from 'lucide-react';
import SocialIcons from '../SocialIcons';
import { useNavigate } from 'react-router-dom';
const ThankYou = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen flex justify-center items-center bg-gray-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div className='flex flex-col col-span-2 items-center gap-5'>
                    <Check className='h-16 w-16 bg-green-600 rounded-full p-3 text-white'/>
                    <h1 className='font-bold text-primary text-4xl'>Thank you for reaching out!</h1>
                    <p className='font-medium text-gray-700 max-w-lg text-center'>Your message has been successfully sent. One of our team members will review it and respond as soon as possible.</p>
            </div>

            <div className='bg-white p-10 flex flex-col gap-10 items-center shadow-xl rounded-xl'>
                <h2 className='font-bold text-2xl text-primary'>Connect with us</h2>
                <SocialIcons size={5}/>

            </div>
            <div className='bg-white p-10 flex flex-col gap-10 items-center shadow-xl rounded-xl'>
                <h2>Visit out webiste</h2>
                <button
                onClick={()=>navigate("/")}
                className='px-5 py-2 bg-primary rounded-lg text-white hover:-translate-y-2 cursor-pointer duration-300'>Visit Website</button>
            </div>
        </div>
    </div>
  )
}

export default ThankYou