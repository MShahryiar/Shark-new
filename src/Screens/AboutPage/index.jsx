import React from 'react'
import SocialNav from '../../Components/SocialNav'
import Navbar from '../../Components/Navbar'
import Footer from "../../Components/Footer"
import CTA from '../../Components/CTA'

import {motion } from "framer-motion"
import ScrollTop from '../../Utils/ScrollTop'
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Shark Immigration Solutions</title>
        <meta
          name="description"
          content="Learn about Shark Immigration Solutions, led by Daniyal Hussain. We simplify your Canadian immigration journey with honesty, transparency, and expertise."
        />
      </Helmet>
      <ScrollTop/>
        <SocialNav/>
        <Navbar/>
        <div className='flex justify-center w-5/6 mx-auto mt-10 text-center items-center'>
          <div className='my-10'>
            <h1 className='font-medium  text-secondary max-md:text-sm text-md mb-3 uppercase'>About Us</h1>
            <h2 className='text-primary text-xl md:text-2xl max-w-3xl text-center font-medium capitalize mb-5'>Dedicated to guiding individuals and families with honesty and expertise, we strive to make your Canadian immigration journey stress-free, transparent, and successful.</h2>
          </div>
           

        </div>
          <div className='w-5/6  mb-10 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-5 place-items-center'>
            <main className=' col-span-1 lg:col-span-3 '>
                <h2 className='font-medium text-2xl my-5 text-primary'>Welcome to Shark Immigration Solutions!</h2>
                <p className='max-w-xl text-justify text-lg text-gray-700'>I’m Daniyal Hussain, President of Shark Immigration Solutions. Whether you’re reuniting with loved ones, pursuing education, starting a new chapter in Canada, facing any inadmissibility issues or Asylum Seeker. Our expert team is here to guide you with care and professionalism. With extensive experience in Canadian immigration, we are dedicated to simplifying the process and ensuring your success.</p>
                <p className='max-w-xl text-justify text-lg text-gray-700 my-5'>Thank you for placing your trust in us. Together, we’ll turn your Canadian aspirations into reality.</p>

                <p className='max-w-xl text-justify text-lg text-gray-700'>Sincerely,</p>
                <p className='max-w-xl text-justify text-lg text-primary font-bold mt-5'>Daniyal Hussain</p>
                <p className='max-w-xl text-justify text-sm text-primary '>RCIC-IRB</p>
                <p className='max-w-xl text-justify text-sm text-primary '>Founder and Director</p>
                <p className='max-w-xl text-justify text-sm text-primary '>Shark Immigration Solutions</p>
            </main>
            <div className=' col-span-1 lg:col-span-2'>
                <img src={"/images/welcomeToShark.avif"} className='p-[5px] rounded-2xl ' alt="Daniyal Hussain, Founder of Shark Immigration Solutions" />
            </div>

          </div>

        <CTA/>
        <Footer/>
    </div>
  )
}

export default About