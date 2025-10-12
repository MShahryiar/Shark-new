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
import SocialIcons from '../SocialIcons';
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
  const handleEsc = (e) => {
    if (e.key === 'Escape') setShowSideNavbar(false);
  };
  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (  
    <>
    <div  className={`transition-opacity bg-green-200 border-b-1 border-gray-200 shadow-sm bg-transparent duration-500  ${
          showFixedNavbar ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } py-4 px-6  text-white`}>
      <div className='  w-5/6 flex justify-between items-center mx-auto'>
          <img src="/images/Logo.avif"   className='h-20 cursor-pointer w-auto object-cover' alt='logo'
            onClick={()=>navigate("/")}
          />
          <nav className='gap-5 font-semibold hidden md:flex items-center'>
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
            <Link 
            to={"https://calendly.com/sharkimmigrationca/free-consultation"} 
            target='_blank'
            className='bg-primary px-5 py-2 rounded-full text-white hover:-translate-y-1 duration-300'
            >         
              Free Consultation
            </Link>

          </nav>
          <button
            aria-label="Open menu" 
            className="md:hidden block"
            onClick={()=>setShowSideNavbar(!showSideNavbar)}
          >

          <AlignJustify className='h-6 w-6 cursor-pointer  text-black '
             
             />
            </button>


      </div>
    </div>

    {/* animated one */}
    <div 
      className={`fixed top-0  left-0 w-full  z-20 transition-transform duration-500 ${
          showFixedNavbar ? 'translate-y-0' : '-translate-y-full'
        }  `}
    >
      <div className=' bg-white rounded-full px-10 mt-5 shadow-2xl w-5/6 flex justify-between items-center p-2 mx-auto'>
          <img src="/images/Logo.avif" className='h-16  w-auto object-cover cursor-pointer'
            onClick={()=>navigate("/")}
          />
          <nav className='gap-5 font-semibold hidden md:flex items-center'>
             <Link className="text-md group inline-block relative cursor-pointer" to={"/about"}>
                <span className="text-black  group-hover:text-red-500">About</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
<Link className="text-md group inline-block relative cursor-pointer" to={"/Services"}>
                <span className="text-black group-hover:text-red-500">Services</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link className="text-md group inline-block relative cursor-pointer" to={"/Contact"}>
                <span className="text-black group-hover:text-red-500">Contact</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
            to={"https://calendly.com/sharkimmigrationca/free-consultation"} 
            target='_blank'
            className='bg-primary px-5 py-2 rounded-full text-white hover:-translate-y-1 duration-300'
            >         
              Free Consultation
            </Link>
          </nav>
          <button
          className='block md:hidden'
          onClick={()=>setShowSideNavbar(!showSideNavbar)}
          >
          <AlignJustify className='h-6 w-6 cursor-pointer  ' />
          </button>


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
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
       className='fixed top-0 right-0 w-[300px] h-screen bg-white text-blue-950 z-50 md:hidden block'
       initial={{  right:"-100%" }}
       animate={{  right:0 }}
       exit={{  right:"-100%", transition: { duration:0.5 }}}
       transition={{ delay:0.5, duration: 0.5 }}
       >
          <div className='h-fit relative'>
            <img src={"/images/Logo.avif"}  className='cursor-pointer h-44 px-5 object-cover' alt="image2" 
                onClick={()=>navigate("/")}
            />
          <motion.button
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
</motion.button>
          </div>
            <nav className='flex flex-col text-xs'>
             <Link className='px-3 py-2 font-semibold  uppercase list-none inset-0 border-t-1 border-b-1 border-gray-500  hover:bg-blue-950 hover:text-white   cursor-pointer duration-300'
                to={"/"}
              >Home</Link>
             <Link className='px-3 py-2 font-semibold  uppercase list-none inset-0  border-b-gray-500 border-b-1 cursor-pointer duration-300   hover:bg-blue-950 hover:text-white '
                to={"/about"}
              >About</Link>
             <Link className='px-3 py-2 font-semibold  uppercase list-none inset-0 border-b-gray-500 border-b-1   cursor-pointer duration-300   hover:bg-blue-950 hover:text-white '
                to={"/contact"}
              
              >Contact</Link>
              <Link className='px-3 py-2 font-semibold  uppercase list-none inset-0 border-b-gray-500 border-b-1   cursor-pointer duration-300   hover:bg-blue-950 hover:text-white '
                to={"https://calendly.com/sharkimmigrationca/free-consultation"}
                target='_blank'
              >Free Consultation</Link>
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
  <span>Mississauga | Winnipeg | Calgary</span>
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
                    <div className="flex mt-5 mx-5 justify-start text-xl text-red-500">
                    <SocialIcons/>
          
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