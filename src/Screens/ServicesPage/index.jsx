import React from 'react'
import SocialNav from '../../Components/SocialNav'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { services } from '../../data/services.js'
import Service from '../../Components/Services/Service.jsx'
import ScrollTop from '../../Utils/ScrollTop.js'

const ServicesPage = () => {
  return (
    <div>
      <ScrollTop/>
      <SocialNav/>
      <Navbar/>
        <div className='flex justify-center mt-10 text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>Services we offer</h2>
            <h1 className='text-primary px-8 text-xl md:text-2xl  max-w-3xl text-center text-center font-medium capitalize mb-5'>Comprehensive Canadian Immigration Services Tailored to Your Journey for a Smooth and Successful Move to Canada.</h1>
          </div>
           

        </div>
      <div className='my-10 w-5/6 mx-auto grid gap-5 mt-10 md:grid-cols-3'>

        {services.map((service)=>(
          <Service name={service.name} key={service.id} id={service.id} brief={service.brief} Icon={service.Icon} />
        ))}
        </div>
      <Footer/>
    </div>
  )
}

export default ServicesPage