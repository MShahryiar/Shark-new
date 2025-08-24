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
             
            </div>
            
          </div>
      </div>
       */}


       <div className="w-5/6 mx-auto my-10  ">
       <div className='flex justify-center my-10 text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>Contact Our Team</h2>
            <h1 className='text-primary text-xl md:text-2xl max-w-3xl text-center text-center font-medium capitalize mb-5'>Get in touch with our support team for quick assistance, personalized solutions, and expert guidance tailored to your needs.</h1>
          </div>

      </div>
      <div className=" ">

          <div className="grid grid-cols-1 md:grid-cols-3 max-md:divide-y-1 md:divide-x-1 divide-gray-200 gap-5">
            {/* left FORM */}
           

       <form className="h-fit grid col-span-2 grid-cols-1 md:grid-cols-2 gap-5 p-10 w-full">
  {/* First row: First + Last name */}
  <div className="flex flex-col gap-1">
    <label htmlFor="fname" className="text-sm text-gray-600 font-bold">First Name</label>
    <input type="text" id="fname" placeholder="First Name"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded" />
  </div>

  <div className="flex flex-col gap-1">
    <label htmlFor="lname" className="text-sm text-gray-600 font-bold">Last Name</label>
    <input type="text" id="lname" placeholder="Last Name"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded" />
  </div>

  {/* Second row: Email + Phone */}
  <div className="flex flex-col gap-1">
    <label htmlFor="email" className="text-sm text-gray-600 font-bold">Email</label>
    <input type="text" id="email" placeholder="Email"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded" />
  </div>

  <div className="flex flex-col gap-1">
    <label htmlFor="phone" className="text-sm text-gray-600 font-bold">Phone</label>
    <input type="text" id="phone" placeholder="Phone"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded" />
  </div>

  {/* Full width fields */}
  <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
    <label htmlFor="message" className="text-sm text-gray-600 font-bold">Message</label>
    <textarea id="message" placeholder="Message"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded"></textarea>
  </div>

  <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
    <label htmlFor="immigration_goal" className="text-sm text-gray-600 font-bold">Immigration Goal</label>
    <select id="immigration_goal"
      className="indent-2 py-2 text-gray-700 border border-gray-500 rounded">
      <option value="">-- Select your goal --</option>
      <option value="express_entry">Express Entry (Skilled Worker)</option>
      <option value="study_permit">Study Permit</option>
      <option value="work_permit">Work Permit</option>
      <option value="family_sponsorship">Family Sponsorship</option>
      <option value="visitor_visa">Visitor Visa</option>
      <option value="permanent_residence">Permanent Residence</option>
      <option value="citizenship">Citizenship</option>
      <option value="business_investor">Business / Investor Visa</option>
      <option value="other">Other</option>
    </select>
  </div>

  {/* Submit button full width */}
  <input type="submit" value="Send Message"
    className="bg-primary text-white rounded col-span-1 md:col-span-2 py-5 text-lg cursor-pointer" />
</form>
       
            {/* Contact information */}
            <div className="">
              <h2 className="text-lg">Chat with us</h2>
                <p className="text-md text-gray-700 ">We’re just a click away — reach out or follow us on our social channels.</p>
               <div className="flex gap-1 mt-5 justify-start      text-sm">
              <a href="https://facebook.com/sharkimmigrationca" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="  size-4 text-gray-800   " />
              </a>
                <a href="https://instagram.com/sharkimmigrationca" >
                <FaInstagram className="size-4 text-gray-800   " />
              </a>
                <a href="https://tiktok.com/@sharkimmigrationca" >
                <SiTiktok className=" size-4 text-gray-800   " />
              </a>
                <a href="https://youtube.com/@sharkimmigration.ca" >
                <FaYoutube className="size-4 text-gray-800   " />
              </a>
               <a href="https://x.com/sharkimmca" >
                <FaXTwitter className="size-4 text-gray-800   " />
              </a>
            </div>

            <h2 className="text-lg mt-10">Call Us</h2>
            <p className="text-md text-gray-700 ">Have questions? Call us today and speak directly with our team.</p>

            <div className="flex flex-col gap-2 mt-5">
              <a href="tel:+19054074275" className="flex items-center gap-2 text-gray-800 hover:underline">
                <Phone className="size-5" />
                <span>(905) 407-4275</span>
              </a>

              <a href="tel:+19055819093" className="flex items-center gap-2 text-gray-800 hover:underline">
                <Phone className="size-5" />
                <span>(905) 581-9093</span>
              </a>
            </div>
             <h2 className="text-lg mt-10">Visit Us</h2>
            <p className="text-md text-gray-700 ">Visit us in person and start your journey with confidence</p>

              <a
                href="https://maps.app.goo.gl/L9JTYEZ2PkckP3xg6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 mt-5 hover:underline"
              >
                <MapPin className="size-5" />
                <span>211 Watline Avenue, Mississauga</span>
              </a>

            </div>
          </div> 

        <div className='flex justify-center my-20 text-center items-center'>
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