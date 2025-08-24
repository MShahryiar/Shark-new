import React from 'react'
import SocialNav from '../../Components/SocialNav'
import Navbar from '../../Components/Navbar'
import Footer from "../../Components/Footer"

const About = () => {
  return (
    <div>
        <SocialNav/>
        <Navbar/>
        <div className='flex justify-center mt-10 text-center items-center'>
          <div className='my-10'>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>About Us</h2>
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
                <img src={"/images/Welcome-to-Shark-Immigration-Solutions.png"} className='p-[5px] rounded-lg bg-gradient-to-r from-blue-500 to-red-500' alt="" />
            </div>

          </div>
        <Footer/>
    </div>
  )
}

export default About