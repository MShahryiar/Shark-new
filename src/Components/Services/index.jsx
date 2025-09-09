import React from 'react'
import { motion,stagger } from 'framer-motion'
import Service from './Service'
import Service_2 from './Service_2'
import { LibraryBig, Plane, Briefcase,UsersRound  } from 'lucide-react'
import {Link} from "react-router-dom"
import { services } from '../../data/services.js'

const Services = () => {
  return (
    <div className='min-h-screen bg-gray-50 pb-20'>
      <div className='w-5/6 mx-auto py-20'>
        <div className='flex justify-center text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>Services we offer</h2>
            <h1 className='text-primary text-xl md:text-3xl max-w-3xl text-center text-center font-medium capitalize mb-5'>Comprehensive Canadian Immigration Services Tailored to Your Journey for a Smooth and Successful Move to Canada.</h1>
          </div>
            {/* <motion.button 
              whileHover={{y:-5, }}
            className='bg-red-500 px-10 py-5 whitespace-nowrap font-bold cursor-pointer hover:shadow-lg text-white'>See All Services</motion.button> */}


        </div>
        <motion.div 
        
        className='grid grid-cols-1 md:grid-cols-3 gap-5'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        
        >
          {services.map((service)=>(
            <Service name={service.name} key={service.id} id={service.id} brief={service.brief} Icon={service.Icon} />
          ))}
         
        

         
        </motion.div>
      </div>

    </div>
    // <div className=' h-fit lg:h-[350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 p-5'>
    //   {/* <Service_2/>
    //   <Service_2/> 
    //   <Service_2/> 
    //   <Service_2/>   */}
    //   {services.map((service)=>(
    //     <Service_2 id={service.id} title={service.title} description={service.description} Icon={service.icon}/>
    //   ))}
    // </div>
  )
}

export default Services