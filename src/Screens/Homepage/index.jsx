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
import How from "../../Components/How"
import Expertise from '../../Components/Expertise'
import Banner from "../../Components/Banner"

import ScrollTop from "../../Utils/ScrollTop.js"
import { Helmet } from 'react-helmet'
const Homepage = () => {
 
  return (
    <>
    <div className='overflow-x-hidden'>
       <Helmet>
        <title>Shark Immigration Solutions | Canadian Immigration Experts</title>
        <meta
          name="description"
          content="Welcome to Shark Immigration Solutions. We provide trusted Canadian immigration, visa, and study permit services to make your journey stress-free and successful."
        />
        <meta name="keywords" content="Canadian immigration, visa, study permit, PR, citizenship" />
        <meta name="author" content="Shark Immigration Solutions" />
      </Helmet>

    <ScrollTop/>
      <SocialNav/>
      <Navbar/>
      <Carousel/>
      {/* <Banner/> */}
      <About/>
      <Services/>
      <How/>
      <ServicesTwo/>
      <CTA/>
      <Contact/>
      <Expertise/>
      <Testimonials/>
      <Footer/>
    </div>

    </>
  )
}

export default Homepage