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
const Homepage = () => {
 
  return (
    <>
    <ScrollTop/>
      <SocialNav/>
      <Navbar/>
      <Carousel/>
      {/* <Banner/> */}
      <About/>
      <Services/>
      <How/>
      <ServicesTwo/>
      <div className='p-10'>
      <CTA/>
      </div>
      <Contact/>
      <Expertise/>
      <Testimonials/>
      <Footer/>

    </>
  )
}

export default Homepage