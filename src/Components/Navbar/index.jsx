import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AnimatePresence, motion} from "framer-motion"
import {MapPin,Mail, Clock} from "lucide-react"
import { X } from 'lucide-react';
import { AlignJustify, FastForward } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
const [showFixedNavbar, setShowFixedNavbar] = useState(false);
const [showSideNavbar, setShowSideNavbar] = useState(false);

useEffect(() => {
  if (showSideNavbar) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [showSideNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (  
    <>
    <div  className={`transition-opacity border-b-1 border-gray-200 shadow-sm bg-transparent duration-500  ${
          showFixedNavbar ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } py-4 px-6  text-white`}>
      <div className='  w-5/6 flex justify-between  items-center mx-auto'>
          <img src="/images/Logo.png"   className='h-20 cursor-pointer w-auto object-cover' alt='logo'
            onClick={()=>navigate("/")}
          />
          <ul className='gap-5 font-semibold hidden md:flex'>
             <Link className="group inline-block relative cursor-pointer" to={"/about"}>
                <span className="text-black  group-hover:text-red-500">About</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link className="group inline-block relative cursor-pointer" to={"/Services"}>
                <span className="text-black group-hover:text-red-500">Services</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link className="group inline-block relative cursor-pointer" to={"/Contact"}>
                <span className="text-black group-hover:text-red-500">Contact</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </ul>
          <AlignJustify className='h-6 w-6 cursor-pointer  text-black block md:hidden'
             onClick={()=>setShowSideNavbar(!showSideNavbar)}
          />


      </div>
    </div>

    {/* animated one */}
    <div 
      className={`fixed top-0  left-0 w-full z-20 transition-transform duration-500 ${
          showFixedNavbar ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow-md`}
    >
      <div className='  w-5/6 flex justify-between items-center p-2 mx-auto'>
          <img src="/images/Logo.png" className='h-20  w-auto object-cover cursor-pointer'
            onClick={()=>navigate("/")}
          />
          <ul className='gap-5 font-semibold hidden md:flex'>
             <Link className="text-xl group inline-block relative cursor-pointer" to={"/about"}>
                <span className="text-black  group-hover:text-red-500">About</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
<Link className="text-xl group inline-block relative cursor-pointer" to={"/Services"}>
                <span className="text-black group-hover:text-red-500">Services</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link className="text-xl group inline-block relative cursor-pointer" to={"/Contact"}>
                <span className="text-black group-hover:text-red-500">Contact</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </ul>
          <AlignJustify className='h-6 w-6 cursor-pointer  block md:hidden' onClick={()=>setShowSideNavbar(!showSideNavbar)}/>


      </div>
    </div>

    {/* sidebar */}

    <AnimatePresence mode='wait'>
        {showSideNavbar && (
          <>

          <motion.div 
          className='fixed top-0 right-0  h-screen opacity-50   bg-black  z-40 md:hidden block'
          initial={{  right:"-100%", width:0 }}
          animate={{  right:0, width:"100%" }}
          exit={{  right:"-100%", width:0, transition:{duration:1} }}
          transition={{ duration: 0.5 }}
          onClick={()=>setShowSideNavbar(false)}
          ></motion.div>
       <motion.div 
       className='fixed top-0 right-0 w-[300px] h-screen bg-white text-blue-950 z-50 md:hidden block'
       initial={{  right:"-100%" }}
       animate={{  right:0 }}
       exit={{  right:"-100%", transition: { duration:0.5 }}}
       transition={{ delay:0.5, duration: 0.5 }}
       >
          <div className='h-fit relative'>
            <img src={"/images/Logo.png"}  className='cursor-pointer h-44 px-5 object-cover' alt="image2" 
                onClick={()=>navigate("/")}
            />
          <motion.div
  whileHover={{
    rotate: 90,
    scale: 1.1,
    opacity: 0.8,
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className='absolute top-5 right-5 cursor-pointer'
  onClick={()=>setShowSideNavbar(false)}
>
  <X className="w-6 h-6 text-black" />
</motion.div>
          </div>
            <nav className='flex flex-col text-xs'>
              <li className='px-3 py-2 font-medium  uppercase list-none inset-0 border-t-1 border-b-1 border-gray-500  hover:bg-blue-950 hover:text-white text-red-500   cursor-pointer duration-300'
                onClick={()=>navigate("/")}
              >Home</li>
              <li className='px-3 py-2 font-medium  uppercase list-none inset-0  border-b-gray-500 border-b-1 cursor-pointer duration-300   hover:bg-blue-950 hover:text-white text-red-500'>About</li>
              <li className='px-3 py-2 font-medium  uppercase list-none inset-0 border-b-gray-500 border-b-1   cursor-pointer duration-300   hover:bg-blue-950 hover:text-white text-red-500'>Contact</li>
              <li className='px-3 py-2 font-medium  uppercase list-none inset-0  border-b-gray-500 border-b-1 cursor-pointer duration-300   hover:bg-blue-950 hover:text-white text-red-500'>Testimonials</li>
              <li className='px-3 py-2 font-medium  border-b-gray-500 border-b-1 uppercase list-none inset-0   cursor-pointer duration-300   hover:bg-blue-950 hover:text-white text-red-500'>Services</li>
            </nav>

            <div>
                      <div className='flex flex-col  p-3 gap-2 mt-2'>
           <a
  href="https://maps.app.goo.gl/L9JTYEZ2PkckP3xg6"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-2 items-center text-xs group hover:text-red-500"
>
  <MapPin className="h-4 w-4" />
  <span>211 Watline Avenue Mississauga, ON</span>
</a>

<a
  href="mailto:info@shark-immigration.ca"
  className="flex gap-2 items-center text-xs group hover:text-red-500"
>
  <Mail className="h-4 w-4" />
  <span>info@shark-immigration.ca</span>
</a>
             <div className=' flex gap-2 items-center text-xs group hover:text-red-500'>
                <Clock  className="h-4 w-4 group"/>
                <li className='text-xs list-none '>Mon-Fri 0900-18:00</li>
            </div>
             
        </div>
                    <div className="flex mt-5 w-4/6 mx-auto justify-between text-xl text-red-500">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-950 transition-colors duration-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-blue-950 transition-colors duration-500" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="hover:text-blue-950 transition-colors duration-500" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-blue-950 transition-colors duration-500" />
              </a>
              <a href="https://x.com/sharkimmca" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:text-blue-950 transition-colors duration-500" />
              </a>
            </div>
            </div>
            
        </motion.div>    
         
          </>
        )}    
        </AnimatePresence>
    </>
  )
}

export default Navbar