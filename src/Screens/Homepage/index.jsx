import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import SocialNav from "../../Components/SocialNav"
import About from "../../Components/About"
import Carousel from '../../Components/Carousel'
import Services from '../../Components/Services'
import CTA from "../../Components/CTA"
import Testimonials from '../../Components/Testimonials'
import Footer from '../../Components/Footer'
import Contact from '../../Components/Contact'
import ServicesTwo from "../../Components/ServicesTwo"
import Banner from "../../Components/Banner"
const Homepage = () => {
  
  return (
    <>
      <SocialNav/>
      <Navbar/>
      {/* <Carousel/> */}
      <Banner/>
      <About/>
      <Services/>
      <ServicesTwo/>
      <CTA/>
      <Contact/>
      <Testimonials/>
      <Footer/>

    </>
  )
}

export default Homepage