import React from 'react'
import SocialNav from '../../Components/SocialNav'
import Navbar from '../../Components/Navbar'
import Footer from "../../Components/Footer"
import CTA from '../../Components/CTA'

import {motion } from "framer-motion"
import ScrollTop from '../../Utils/ScrollTop'

const About = () => {
  return (
    <div>
      <ScrollTop/>
        <SocialNav/>
        <Navbar/>
        <div className='flex justify-center w-5/6 mx-auto mt-10 text-center items-center'>
          <div className='my-10'>
            <h2 className='font-medium  text-secondary max-md:text-sm text-md mb-3 uppercase'>About Us</h2>
            <h1 className='text-primary text-xl md:text-2xl max-w-3xl text-center text-center font-medium capitalize mb-5'>Dedicated to guiding individuals and families with honesty and expertise, we strive to make your Canadian immigration journey stress-free, transparent, and successful.</h1>
          </div>
           

        </div>
          <div className='w-5/6  mb-10 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-5 place-items-center'>
            <div className=' col-span-1 lg:col-span-3 '>
                <h1 className='font-medium text-2xl my-5 text-primary'>Welcome to Shark Immigration Solutions!</h1>
                <p className='max-w-xl text-justify text-lg text-gray-700'>I’m Daniyal Hussain, President of Shark Immigration Solutions. Whether you’re reuniting with loved ones, pursuing education, starting a new chapter in Canada, facing any inadmissibility issues or Asylum Seeker. Our expert team is here to guide you with care and professionalism. With extensive experience in Canadian immigration, we are dedicated to simplifying the process and ensuring your success.</p>
                <p className='max-w-xl text-justify text-lg text-gray-700 my-5'>Thank you for placing your trust in us. Together, we’ll turn your Canadian aspirations into reality.</p>

                <p className='max-w-xl text-justify text-lg text-gray-700'>Sincerely,</p>
                <p className='max-w-xl text-justify text-lg text-gray-700'>Daniyal Hussain</p>
                <p className='max-w-xl text-justify text-lg text-gray-700'>RCIC-IRB</p>
                <p className='max-w-xl text-justify text-lg text-gray-700'>Founder and Director</p>
                <p className='max-w-xl text-justify text-lg text-gray-700'>Shark Immigration Solutions</p>
            </div>
            <div className=' col-span-1 lg:col-span-2'>
                <img src={"/images/welcomeToShark.jpg"} className='p-[5px] rounded-2xl ' alt="" />
            </div>

          </div>
{/* 
        <div className='bg-gray-50 p-10' >

          <div className='flex justify-center mt-10 text-center items-center'>
          <div className='my-10'>
            <h2 className='font-medium  max-md:text-sm text-md mb-3 uppercase text-secondary'>Our Dedicated Team </h2>
            <h1 className=' text-xl md:text-2xl max-w-3xl text-center text-center font-medium text-primary  capitalize mb-5'>From certified consultants to creative specialists, every member plays a vital role in your success.</h1>
          </div>
        </div> */}
{/* 
        <div className='grid sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 w-5/6 mx-auto' >
                    <div className='h-70 w-full rounded-md '>
                    <img src={"/images/ServiceBg.jpg"} className=' cursor-pointer w-full rounded-2xl h-4/6 object-cover'      />
                    <div className='px-2 py-5'>
                    <h2 className='text-primary text-xl '>Daniyal Hussain</h2>
                    <p className='text-xs font-light text-gray-800'>Founder / CEO  </p>
                    </div>
                </div>
                  <div className='h-70 w-full rounded-md '>
                    <img src={"/images/ServiceBg.jpg"} className=' cursor-pointer  w-full rounded-2xl h-4/6 object-cover'      />
                    <div className='px-2 py-5'>
                    <h2 className='text-primary text-xl '>Rakesh</h2>
                    <p className='text-xs font-light text-gray-800'>Immigration Case Worker </p>
                    </div>
                </div>
                <div className='h-70 w-full rounded-md '>
                    <img src={"/images/ServiceBg.jpg"} className=' cursor-pointer w-full rounded-2xl h-4/6 object-cover'      />
                    <div className='px-2 py-5'>
                    <h2 className='text-primary text-xl '>M. Shahryiar</h2>
                    <p className='text-xs font-light text-gray-800'>Social Media Marketing Manager </p>
                    </div>
                </div>
                <div className='h-70 w-full rounded-md '>
                    <img src={"/images/ServiceBg.jpg"} className=' cursor-pointer  w-full rounded-2xl h-4/6 object-cover'      />
                    <div className='px-2 py-5'>
                    <h2 className='text-primary text-xl '>Haider</h2>
                    <p className='text-xs font-light text-gray-800'>Video Editor </p>
                    </div>
                </div>
        </div> */}
        {/* </div> */}
        <CTA/>
        <Footer/>
    </div>
  )
}

export default About