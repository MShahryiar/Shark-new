import React, { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, ChevronsLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import SliderData from "./sliderData.js"

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = SliderData.length
    const [isAnimating, setIsAnimating] = useState(false)
    

    const nextSlide = ()=>{
        setCurrentSlide((current)=>(current+1)%totalSlides)
    }
    const prevSlide = ()=>{
            setCurrentSlide((current)=> (current-1+totalSlides)%totalSlides)
    }

    // useEffect(()=>{
    //     setIsAnimating(true)

    //     const reset = setTimeout(()=>{
    //         setIsAnimating(false)
    //     },300)

    //     return ()=>clearTimeout(reset)
    // },[currentSlide])
// https://preview.themeforest.net/item/visarzo-immigration-and-visa-consulting-wordpress-theme/full_screen_preview/28208710
     useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentSlide((current)=> (current+1) % SliderData.length)
      
    },5000  )

    return ()=>clearInterval(interval)
  },[currentSlide])
  return (
    <div className='h-screen lg:h-[700px] bg-black gap-5 overflow-hidden flex flex-col justify-center px-22 md:px-36 relative'>
        <AnimatePresence mode="wait">

            <motion.img 
            key={SliderData[currentSlide].image}
          src={SliderData[currentSlide].image}
          initial={{  scale: 1.0 }}
          animate={{  scale: 1.15 }}
          exit={{  scale: 1.0 }}
          transition={{ duration: 1.5 }}
          className="h-full object-cover w-full absolute top-0 left-0 z-0 opacity-30"
            // src={SliderData[currentSlide].image} className={`h-full  object-cover w-full absolute top-0 left-0 duration-500 transition-all opacity ${isAnimating?"":"opacity-100 "}`}
            />
          </AnimatePresence>
      
        {/* <h1 className={`uppercase bg-white rounded-md text-[#022b5f] text-md  font-bold text-4xl w-fit p-2 z-10 duration-300 opacity-0 -translate-x-10 ${isAnimating ? "":"translate-x-0 opacity-100"}`}>{SliderData[currentSlide].headline}</h1> */}
        {/* <AnimatePresence> */}
         <motion.h1
        key={SliderData[currentSlide].headline}
        initial={{ y: -100 }}
        animate={{  y: 0 }}
        transition={{  duration: 0.3 }}
        className="uppercase  text-white font-bold w-fit max-w-2xl p-2 z-10 mt-16 text-3xl md:text-5xl "
      >
        {SliderData[currentSlide].headline}
      </motion.h1>
      {/* </AnimatePresence> */}
            {/* <h2 className={` rounded-md text-md text-[#e70013] w-fit p-2 z-10 duration-500 opacity-0 -translate-x-10 ${isAnimating ? " ":"translate-x-0 opacity-100"}`}>{SliderData[currentSlide].subtext}</h2> */}
 <motion.h2
        key={SliderData[currentSlide].subtext}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.2 ,duration:0.3 }}
        className="rounded-md text-white w-fit text-2xl md:text-xl p-2 z-10"
      >
        {SliderData[currentSlide].subtext}
      </motion.h2>
      {/* <AnimatePresence> */}
      <motion.button 
       key={SliderData[currentSlide].buttonText}
       
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay:0.5, duration: 0.1,  }}  
      className='text-white w-fit px-5 py-2 rounded-md cursor-pointer z-10 
      hover:bg-[#e70013] duration-500 bg-primary      '>{SliderData[currentSlide].buttonText}</motion.button>
 
             {/* </AnimatePresence> */}


           <button className='absolute top-1/2  left-5 group p-2 rounded-full cursor-pointer  duration-500 border-white hover:border-transparent border-2 hover:bg-red-500 hover:text-white  ' onClick={()=>prevSlide()}>
                <ChevronLeft  className='text-white h-8 w-8   group-hover:text-white'/>
            </button>
            <button className='absolute top-1/2  right-5 group p-2 rounded-full cursor-pointer  duration-500 border-white hover:border-transparent border-2 hover:bg-red-500 hover:text-white  ' onClick={()=>nextSlide()}>
                <ChevronRight  className='text-white h-8 w-8   group-hover:text-white'/>
            </button>
    </div>
  )
}
export default Carousel