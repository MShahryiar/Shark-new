import React from 'react';
import { MoveRight, MapPinned, Phone, Clock, Mail } from 'lucide-react';
import SocialIcons from "../SocialIcons"
import Logo from "/images/Logo.png"

import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className="bg-gray-50  p-5 md:p-10 ">
      <div className=" mx-auto w-5/6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10  mx-auto text-gray-200">
        
        <div className=" flex flex-col   md:items-end   md:text-left gap-4">
          <div className='flex flex-col gap-4 items-center md:items-start'>

          <img src={Logo} className="w-40 -mt-2"  alt="Shark Immigration logo" />
          <p className='text-sm font-light text-gray-500 text-center md:text-left'>Shark Immigration Solutions — Dedicated to making your Canadian dream a reality with expert guidance, personalized support, and a smooth immigration process from start to finish.</p>
            <SocialIcons size={3}/>
          </div>
        </div>
       
       <div className="flex flex-col  md:items-start items-center ">
          <h2 className=" text-xl pb-4 text-secondary font-medium">Immigration Services</h2>
          <ul className="flex flex-col gap-2 text-primary">
           
            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
              <Link to={"/services/deportation-from-canada"}>Deporation From Canada</Link>
              </li>
                      <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               <Link to={"/services/humanitarian-application"}>
               Humanitarian Application
               </Link>
              </li>               <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
                <Link to={"/services/immigration-appeals"}>
               Immigration Appeals
               </Link>
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
   <Link to={"/services/pre-removal-risk-assessment"}>
               Pre-Removal Risk Assessment
               </Link>

              
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
                <Link to={"/services/admissibility-hearing"}>
                Admissibility Hearing
               </Link>
              </li>
          </ul>
        </div>
        {/* Immigration Services */}
        <div className="flex flex-col  md:items-start items-center ">
          <h2 className=" text-xl pb-4 text-secondary font-medium">Immigration</h2>
          <ul className="flex flex-col gap-2 text-primary">
           
            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               <Link to={"https://calendly.com/sharkimmigrationca/free-consultation"}
                target='_blank'
               >
               Free Consultation
               </Link>
              </li>
                      <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
                <Link to={"/services"}>
                Immigration Services
               </Link>
              </li>               <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               <Link to={"/Contact"}>
                Contact Us
               </Link>
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               <Link to={"https://search.google.com/local/reviews?placeid=ChIJHZI6REEf1YkREcle1NebptU"} target='_blank'>
                Testimonials
               </Link>
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               <Link to={"/about"}>About Us</Link>
              </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:items-start items-center  md:text-left max-md:mt-10">
          <h2 className=" pb-4 text-xl  text-secondary font-medium   ">Get in touch</h2>
          <ul className="flex flex-col gap-4 text-primary">
            <li className="flex flex-row text-left  justify-center md:justify-start items-center gap-3 group font-light text-sm ">
              <MapPinned className="mt-1 size-5 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              
                <span className='hover:underline'>Mississauga | Winnipeg | Calgary</span>
              
            </li>

            <li className="flex items-center flex-row  justify-center md:justify-start gap-3 group font-light text-sm ">
              <Mail className='mt-1 size-5 group-hover:text-red-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all'/> <span className="text-sm hover:underline">info@shark-immigration.ca</span>
            </li>

            <li className="flex flex-row justify-center md:justify-start items-center gap-3 group font-light text-sm ">
              <Phone className="mt-1 size-5 group-hover:text-red-500  group-hover:translate-x-1 transition-all" />
              <div className="flex flex-col  hover:underline">
                <span>+1 (905) 407-4275</span>
                <span>+1 (905) 581-9093</span>
              </div>
            </li>

          </ul>
        </div>
        

      </div>
    </div>

    
  
  );
};

export default Footer;
