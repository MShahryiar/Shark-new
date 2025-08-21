import SocialNav from "../../Components/SocialNav"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import { MapPin, Mail, Phone } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


import CTA from "../../Components/CTA"
import FAQData from "../../data/faqs.js"
import FAQ from "../../Components/FAQ";
import { useState } from "react";

const ContactPage = () => {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (index)=>{
    setOpenCategory(openCategory === index ? null:index)
  }
  return (
    <div>
      <SocialNav/>
      <Navbar/>

      {/* <div className="h-fit h-[700px] ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-5/6 mx-auto p-10 px-5 md:px-20  h-[400px]">
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.058816703905!2d-79.67033302471283!3d43.62613475418225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51f41443a921d%3A0xd5a69bd7d45ec911!2sShark%20Immigration%20Solutions!5e0!3m2!1sen!2s!4v1755449894518!5m2!1sen!2s"
  
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-full w-full bg-red-200 md:col-span-2 rounded-sm"
    />
            <div className="bg-primary rounded-sm h-full text-white flex  flex-col items-start px-10 text-left  justify-evenly">
              <h1 className="font-medium text-xl ">Contact Details</h1>
              <div className="flex flex-col gap-2 items-start w-full font-light">

              <div className="list-none flex gap-3 justify-between items-center px-2">
                  <MapPin  className="size-8 "/>
                  <div>
                 <li className="text-sm list-none  text-left">211 Watline Avenue, Mississauga</li>
                  </div>
              </div>
              <div className='list-none flex gap-3 justify-between  items-center px-2'>
                <Mail className="size-6  "/>
                <li className="text-sm ">info@shark-immigration.ca</li>
            </div>
             <div className='list-none flex gap-3 justify-between   items-center px-2'>
                <Phone className="size-6 "/>
                <li className="whitespace-nowrap text-sm ">(905) 407-4275</li>
            </div>
              </div>
                <div className="flex gap-3  justify-start      text-sm">
              <a href="https://facebook.com/sharkimmigrationca"  className="border-1 p-1 bg-white text-primary duration-500 group hover:bg-red-500 hover:text-white text-white not:border-white  rounded-full p-1" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="  size-5 group-hover:text-white   " />
              </a>
                <a href="https://instagram.com/sharkimmigrationca"  className="border-1 p-1 bg-white text-primary duration-500 group hover:bg-red-500 hover:text-white text-white not:border-white  rounded-full p-1" >
                <FaInstagram className="size-5    group-hover:text-white   " />
              </a>
                <a href="https://tiktok.com/@sharkimmigrationca"  className="border-1 p-1 bg-white text-primary duration-500 group hover:bg-red-500 hover:text-white text-white not:border-white  rounded-full p-1" >
                <SiTiktok className=" size-5   group-hover:text-white   " />
              </a>
                <a href="https://youtube.com/@sharkimmigration.ca"  className="border-1 p-1 bg-white text-primary duration-500 group hover:bg-red-500 hover:text-white text-white not:border-white  rounded-full p-1" >
                <FaYoutube className="size-5  group-hover:text-white   " />
              </a>
               <a href="https://x.com/sharkimmca"  className="border-1 p-1 bg-white text-primary duration-500 group hover:bg-red-500 hover:text-white text-white not:border-white  rounded-full p-1" >
                <FaXTwitter className="size-5  group-hover:text-white   " />
              </a>
            </div>
            </div>
            
          </div>
      </div>
       */}


       <div className="w-5/6 mx-auto my-10  ">
       <div className='flex justify-center text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>Contact Our Team</h2>
            <h1 className='text-primary text-xl md:text-3xl max-w-3xl text-center text-center font-bold capitalize mb-5'>Get in touch with our support team for quick assistance, personalized solutions, and expert guidance tailored to your needs.</h1>
          </div>

      </div>
      <div className=" w-1/1 md:w-5/6 mx-auto">

          <div className="grid grid-cols-3 gap-5">
            {/* left FORM */}
            <form className="bg-red-200 h-[500px] col-span-2" >
s
            </form>
            {/* Contact information */}
            <div className="bg-green-200">d</div>
          </div> 

        <div className='flex justify-center my-10 text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>FAQs</h2>
            <h1 className='text-primary text-xl md:text-3xl max-w-3xl text-center text-center font-bold capitalize mb-5'>Got Questions? We’ve Got You Covered</h1>
          </div>


      </div>
      <div className="flex flex-col gap-2 ">

          {FAQData.map((cat, i)=>(
            <>
            <FAQ  
            key={i}
          index={i}
          title={cat.title}
          faqs={cat.faqs}
          isOpen={openCategory === i}
          onToggle={toggleCategory}/>
            {/* <ul>
              {categories.faqs.map((faq)=>(
                <li>{faq.question}</li>
                ))}
                </ul> */}
            </>
          ))}
          </div>
      </div>

       </div>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default ContactPage