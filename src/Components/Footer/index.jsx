import React from 'react';
import { MoveRight, MapPinned, Phone, Clock, Mail } from 'lucide-react';
import SocialIcons from "../SocialIcons"
import Logo from "../../../public/images/Logo.png"


const Footer = () => {
  return (
    <div className="bg-gray-50  p-5 md:p-10 ">
      <div className=" mx-auto w-5/6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10  mx-auto text-gray-200">
        
        <div className=" flex flex-col   md:items-end   md:text-left gap-4">
          <div className='flex flex-col gap-4 items-center md:items-start'>

          <img src={Logo} className="w-40 -mt-2"  alt="Shark logo" />
          <p className='text-sm font-light text-gray-500 text-center md:text-left'>Shark Immigration Solutions — Dedicated to making your Canadian dream a reality with expert guidance, personalized support, and a smooth immigration process from start to finish.</p>
            <SocialIcons size={3}/>
          </div>
        </div>
       
       <div className="flex flex-col  md:items-start items-center ">
          <h2 className=" text-xl pb-4 text-secondary font-medium">Immigration Services</h2>
          <ul className="flex flex-col gap-2 text-primary">
           
            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>
                      <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>               <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>
          </ul>
        </div>
        {/* Immigration Services */}
        <div className="flex flex-col  md:items-start items-center ">
          <h2 className=" text-xl pb-4 text-secondary font-medium">Immigration</h2>
          <ul className="flex flex-col gap-2 text-primary">
           
            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>
                      <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>               <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>            <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
              <MoveRight className='font-bold size-5  group-hover:text-red-500 duration-300 group-hover:translate-x-1 transition-all'/>
               Services
              </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:items-start items-center  md:text-left max-md:mt-10">
          <h2 className=" pb-4 text-xl  text-secondary font-medium   ">Get in touch</h2>
          <ul className="flex flex-col gap-4 text-primary">
            <li className="flex flex-row text-left  justify-center md:justify-start items-center gap-3 group font-light text-sm ">
              <MapPinned className="mt-1 size-5 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              <div className="flex flex-col text-sm p hover:underline">
                <span className=''>#1. 211 Watline Avenue, Mississauga</span>
                <span>#2. 47 Burning Glass RD, Winnipeg</span>
              </div>
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
      {/* <div className='h-10 text-primary mt-10 text-center'>
        <h2 className='text-xs'>Copyright @2023 <span className='text-secondary font-medium'>Shark Immigration Solutions</span></h2>
      </div> */}
    </div>
//   <div className="bg-gray-50 text-gray-950 p-20 ">
//       <div className=" flex justify-between items-center gap-10 max-w-7xl mx-auto text-gray-200">
//         <div className='flex justify-between flex-2'>

        
//         {/* Logo & Motto */}
//         <div className="flex flex-col  items-center md:items-start text-center md:text-left gap-4">
//           <div className='flex flex-col items-center gap-5'>

//           <img src="./images/Logo.png" className="w-44 " alt="Shark logo" />
//                <div className="flex gap-5      text-sm">
//   <a href="https://facebook.com"  className="border-1 hover:border-transparent group hover:bg-red-500 hover:text-white text-gray-500 border-gray-600 rounded-full p-1"target="_blank" rel="noopener noreferrer">
//     <FaFacebookF className="   transition-colors duration-300 " />
//   </a>
//     <a href="https://facebook.com"  className="border-1 hover:border-transparent group hover:bg-red-500 hover:text-white text-gray-500 border-gray-600 rounded-full p-1"target="_blank" rel="noopener noreferrer">
//     <FaInstagram className="   transition-colors duration-300 " />
//   </a>
//     <a href="https://facebook.com"  className="border-1 hover:border-transparent group hover:bg-red-500 hover:text-white text-gray-500 border-gray-600 rounded-full p-1"target="_blank" rel="noopener noreferrer">
//     <SiTiktok className="   transition-colors duration-300 " />
//   </a>
//     <a href="https://facebook.com"  className="border-1 hover:border-transparent group hover:bg-red-500 hover:text-white text-gray-500 border-gray-600 rounded-full p-1"target="_blank" rel="noopener noreferrer">
//     <FaYoutube className="   transition-colors duration-300 " />
//   </a>
// </div>
//           <p className="text-2xl text-blue-800  md:max-w-[150px] text-center">CAN DO, WILL DO, HAPPY TO.</p>
//           </div>
//         </div>

//         {/* Immigration Services */}
//         <div className="flex flex-col  items-start text-center md:text-left">
//           <h2 className="font-semibold text-xl pb-4 text-red-500">Site Map</h2>
//           <ul className="flex flex-col gap-2 text-blue-500">
//             <li className="text-sm group flex items-center gap-2   transition-all  hover:underline ">
//   <MoveRight className="transition-all group-hover:translate-x-1 group-hover:text-red-400" />
//   Services
// </li>
//             <li className="text-sm flex items-center gap-2 group  hover:underline transition-all ">
//               {/* <MoveRight  className='group-hover:translate-x-1 transition-all'/> */}
//                Services
//               </li>
//            <li className="text-sm flex items-center gap-2 group   hover:underline transition-all ">
//               <MoveRight  className='group-hover:translate-x-1 transition-all'/> Services
//               </li>
//                <li className="text-sm flex items-center gap-2 group   hover:underline transition-all ">
//               <MoveRight  className='group-hover:translate-x-1 transition-all'/> Services
//               </li>
//                <li className="text-sm flex items-center gap-2 group   hover:underline transition-all ">
//               <MoveRight  className='group-hover:translate-x-1 transition-all'/> Services
//               </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col items-start text-center md:text-left">
//           <h2 className="font-bold pb-4 text-xl  text-red-500">Get in touch</h2>
//           <ul className="flex flex-col gap-4">
//             <li className="flex items-start gap-3 group font-light text-sm ">
//               <MapPinned className="mt-1 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
//               <div className="flex flex-col  hover:underline">
//                 <span className=''>211 Watline Avenue, Mississauga, ON L4Z 1P3</span>
//                 <span>47 Burning Glass RD, Winnipeg, MB R3X 0CA</span>
//               </div>
//             </li>

//             <li className="flex items-start gap-3 group font-light text-sm text-blue-400">
//               <Phone className="mt-1 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
//               <div className="flex flex-col  hover:underline">
//                 <span>+1 (905) 407-4275</span>
//                 <span>+1 (905) 581-9093</span>
//               </div>
//             </li>

//             <li className="flex items-start gap-3 group font-light text-sm text-blue-400">
//               <Mail className='mt-1 group-hover:text-red-500 group-hover:translate-x-1 transition-all'/> <span className="text-sm hover:underline">info@shark-immigration.ca</span>
//             </li>

//             <li className="flex items-start gap-3 group font-light text-sm text-blue-400">
//               <Clock className='mt-1 group-hover:text-red-500 group-hover:translate-x-1 transition-all'/> <span className="text-sm hover:underline">9:00 AM – 5:00 PM</span>
//             </li>
//           </ul>
//         </div>

//       </div>
//       <div className='flex-1'>
//         Follow Us
//       </div>
//       </div>
//     </div>
  
  );
};

export default Footer;
