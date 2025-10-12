import React, {useEffect} from 'react'
import {motion} from "framer-motion"
import { BadgeCheck, MoveRight } from 'lucide-react';
import {useNavigate, Link} from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
  const img = new Image();
  img.src = "/images/serviceBanner.avif";
}, []);
  return (
      <div className='min-h-screen justify-evenly mx-auto md:p-20  flex md:flex-row flex-colw '>

          <div className='w-full overflow-x-hidden  mx-auto p-10 flex-1 flex flex-col justify-center  items-center md:items-start'>
          <h2 className='font-medium text-secondary text-md mb-3 uppercase'>About the company</h2>
            <h2 className='text-primary text-3xl text-center md:text-left font-medium capitalize mb-5'>Your trusted experts in Canadian immigration consulting.</h2>
            <motion.p 
      initial={{opacity:0, x:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.3, delay:0.2 }} className='text-lg whitespace-pre-line font-extralight text-gray-600'>
              We specialize in guiding individuals and families through every step of their journey to Canada. Our deep understanding of immigration laws, policies, and programs allows us to provide accurate, reliable, and personalized advice for your unique situation. <br/> <br/>
    </motion.p>
    <motion.p 
      initial={{opacity:0, x:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.3, delay:0.2}}
    className='whitesmotion.pace-pre-line font-extralight text-gray-600 text-lg'>
      More than consultants, we are your partners in turning the dream of life in Canada into reality. Whether your goal is to study, work, reunite with loved ones, or settle permanently, we make the process clear, simple, and stress-free. <br/> <br/>
</motion.p>
<motion.p 
      initial={{opacity:0, x:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.3, delay:0.2}} className='whitespace-pre-line font-extralight text-gray-600 text-lg'>
Our mission is to open doors to Canada through trusted guidance, proven strategies, and unwavering support. We believe your potential should know no borders — and we’re here to help you achieve it.</motion.p>
            {/* <ul className='flex flex-col gap-2 my-5'>
              <li className='flex gap-2 items-center '><BadgeCheck className='size-7 text-secondary'/>Maximize your CRS score</li>
              <li className='flex gap-2 items-center '><BadgeCheck className='size-7 text-secondary'/>Explore Express Entry & PNPs</li>
              <li className='flex gap-2 items-center '><BadgeCheck className='size-7 whitespace-nowrap text-secondary'/>Guidance for Study, Work, PR</li>
            </ul>
            <h4>Canada is calling—are you ready to answer?</h4> */}
            {/* <Link to={"https://calendly.com/sharkimmigrationca/free-consultation"} target='_blank'> 
            <motion.button 
             initial={{opacity:0, x:-20}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:0.3}}
             className='group rounded-md flex gap-5 whitespace-nowrap my-10 
             cursor-pointer px-5 py-3 
             bg-primary text-white duration-500 
             hover:border-transparent hover:-translate-y-2'
             onClick={()=>("/contact")}
             > Book Your Free Consultation </motion.button>
             </Link> */}
             <motion.a
  href="https://calendly.com/sharkimmigrationca/free-consultation"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a free consultation with Shark Immigration on Calendly"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.3 }}
  className="group inline-flex gap-5 whitespace-nowrap my-10 
             cursor-pointer px-5 py-3 rounded-md
             bg-primary text-white duration-500 
             hover:border-transparent hover:-translate-y-2"
>
  Book Your Free Consultation
</motion.a>


            
          </div>
          <div className='flex-1 grid grid-cols-1 gap-2 p-10  md:gap-5'>
            <div className=' flex  max-md:h-fit '>
                <motion.img 
                     initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  loading='lazy'
                src="/images/serviceBanner.avif" className='w-full h-[400px] object-cover rounded-md'/>
            </div>
            {/* <div className=' flex max-md:h-fit'>
               <motion.img 
                 initial={{ scale: 0, opacity: 0, translateZ: -300 }}
      whileInView={{ scale: 1, opacity: 1, translateZ: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
               src="./images/ServiceBg.jpg" className='h-3/6 rounded-md object-cover md:self-end md:mb-20'/>
            </div> */}
          </div>
      </div>
  )
}

export default About