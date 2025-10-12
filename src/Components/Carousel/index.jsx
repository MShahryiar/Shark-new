// import React, { useState, useEffect } from 'react'
// import { ChevronRight, ChevronLeft, ChevronsLeftRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';


// import SliderData from "./sliderData.js"

// export const Carousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const totalSlides = SliderData.length
//     const [isAnimating, setIsAnimating] = useState(false)
    

//     const nextSlide = ()=>{
//         setCurrentSlide((current)=>(current+1)%totalSlides)
//     }
//     const prevSlide = ()=>{
//             setCurrentSlide((current)=> (current-1+totalSlides)%totalSlides)
//     }

//     // useEffect(()=>{
//     //     setIsAnimating(true)

//     //     const reset = setTimeout(()=>{
//     //         setIsAnimating(false)
//     //     },300)

//     //     return ()=>clearTimeout(reset)
//     // },[currentSlide])
// // https://preview.themeforest.net/item/visarzo-immigration-and-visa-consulting-wordpress-theme/full_screen_preview/28208710
//   //    useEffect(()=>{
//   //   const interval = setInterval(()=>{
//   //       setCurrentSlide((current)=> (current+1) % SliderData.length)
      
//   //   },5000  )

//   //   return ()=>clearInterval(interval)
//   // },[currentSlide])

//   useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentSlide((current) => (current + 1) % totalSlides);
//   }, 5000);

//   return () => clearInterval(interval);
// }, []); 
//   return (
//     <div className='h-screen lg:h-[700px] bg-black gap-5 overflow-hidden items-center flex flex-col justify-center px-22 md:px-36 relative'>
//         <AnimatePresence >

//             {/* <motion.img 
//             key={SliderData[currentSlide].image}
//           src={SliderData[currentSlide].image}
//           initial={{  scale: 1.0 }}
//           animate={{  scale: 1.15 }}
//           exit={{  scale: 1.0 }}
//           transition={{ duration: 1.5 }}
//           className="h-full object-cover w-full absolute top-0 left-0 z-0 opacity-30"
//             // src={SliderData[currentSlide].image} className={`h-full  object-cover w-full absolute top-0 left-0 duration-500 transition-all opacity ${isAnimating?"":"opacity-100 "}`}
//             /> */}


//             <motion.img
//   key={SliderData[currentSlide].image}
//   src={SliderData[currentSlide].image}
//   initial={{ scale: 1.05, opacity: 0 }}
//   animate={{ scale: 1.15, opacity: 1 }}
//   exit={{ scale: 1.05, opacity: 0 }}
//   transition={{ duration: 1.2, ease: "easeInOut" }}
//   className="h-full object-cover w-full absolute top-0 left-0 z-0 opacity-30"
// />
//           </AnimatePresence>
      
//         {/* <h1 className={`uppercase bg-white rounded-md text-[#022b5f] text-md  font-bold text-4xl w-fit p-2 z-10 duration-300 opacity-0 -translate-x-10 ${isAnimating ? "":"translate-x-0 opacity-100"}`}>{SliderData[currentSlide].headline}</h1> */}
//         {/* <AnimatePresence> */}
//          <motion.h1
//         key={SliderData[currentSlide].headline}
//         initial={{ y: -100 }}
//         animate={{  y: 0 }}
//         transition={{  duration: 0.3 }}
//         className="uppercase   text-white text-center font-bold w-fit max-w-2xl p-2 z-10 mt-16 text-3xl md:text-5xl "
//       >
//         {SliderData[currentSlide].headline}
//       </motion.h1>
//       {/* </AnimatePresence> */}
//             {/* <h2 className={` rounded-md text-md text-[#e70013] w-fit p-2 z-10 duration-500 opacity-0 -translate-x-10 ${isAnimating ? " ":"translate-x-0 opacity-100"}`}>{SliderData[currentSlide].subtext}</h2> */}
//  <motion.h2
//         key={SliderData[currentSlide].subtext}
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay:0.2 ,duration:0.3 }}
//         className="rounded-md text-white w-fit text-2xl md:text-xl p-2 z-10"
//       >
//         {SliderData[currentSlide].subtext}
//       </motion.h2>
//       {/* <AnimatePresence> */}
//       <motion.button 
//        key={SliderData[currentSlide].buttonText}
       
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{delay:0.5, duration: 0.1,  }}  
//       className='text-white w-fit px-5 py-2 rounded-md cursor-pointer z-10 text-center
//       hover:bg-[#e70013] duration-500 bg-primary      '>{SliderData[currentSlide].buttonText}</motion.button>
 
//              {/* </AnimatePresence> */}


//            <button className='absolute top-1/2  left-5 group p-2 rounded-full cursor-pointer  duration-500 border-white hover:border-transparent border-2 hover:bg-red-500 hover:text-white  ' onClick={()=>prevSlide()}>
//                 <ChevronLeft  className='text-white h-8 w-8   group-hover:text-white'/>
//             </button>
//             <button className='absolute top-1/2  right-5 group p-2 rounded-full cursor-pointer  duration-500 border-white hover:border-transparent border-2 hover:bg-red-500 hover:text-white  ' onClick={()=>nextSlide()}>
//                 <ChevronRight  className='text-white h-8 w-8   group-hover:text-white'/>
//             </button>
//     </div>
//   )
// }
// export default Carousel


import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


import SliderData from "./sliderData.js";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const navigate = useNavigate()
     const headingVariant = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const subheadingVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

const buttonVariant = {
  hidden: { opacity: 0, y: 20, visibility: "hidden" },
  show: {
    opacity: 1,
    y: 0,
    visibility: "visible",
    transition: {
      duration: 0.3 ,
      ease: "easeOut",
      delay: 1, // plays after heading & subheading
    },
  },
};
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SliderData.length;

  // Auto-play (stable, no reset on every change)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="h-screen lg:h-[700px] gap-5 bg-black overflow-hidden items-center flex flex-col justify-center relative">
      {/* Background image crossfade */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <AnimatePresence>
          <motion.img
            key={SliderData[currentSlide].image}
            src={SliderData[currentSlide].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1.15 }}
            // exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt={SliderData[currentSlide].image+"slide image"}
          />
        </AnimatePresence>
      </div>

      {/* Headline */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={SliderData[currentSlide].headline}
          // initial={{ y: -40, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // // exit={{ y: -40, opacity: 0 }}
          // transition={{ duration: 0.5 }}
         variants={headingVariant}
        initial="hidden"
        animate="show"
          className="uppercase text-white text-center font-bold  max-w-sm md:max-w-3xl p-2 z-10 mt-16 text-3xl md:text-5xl"
        >
          {SliderData[currentSlide].headline}
        </motion.h1>
      </AnimatePresence>

      {/* Subtext */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={SliderData[currentSlide].subtext}
          // initial={{ opacity: 0, x: -20 }}
          // animate={{ opacity: 1, x: 0 }}
          // // exit={{ opacity: 0, y: -20 }}
          // transition={{ duration: 0.4}}
           variants={subheadingVariant}
        initial="hidden"
        animate="show"
          className="text-white text-lg max-md:max-w-2xs text-center md:text-xl p-2 z-10"
        >
          {SliderData[currentSlide].subtext}
        </motion.h2>
      </AnimatePresence>

      {/* Button */}
    <AnimatePresence mode="wait">
  <motion.button
  onClick={()=>{
    const link = SliderData[currentSlide].buttonLink;
  if (link.startsWith("http")) {
    window.open(link, "_blank");  
  } else {
    navigate(link); 
  }
  }}
    key={SliderData[currentSlide].buttonText}
    // initial={{ y:20 }}
    // animate={{ opacity: 1, y:0 }}
    // exit={{ opacity: 0, y: -20 }}
  //   transition={{
  //   y: { duration: 0.6, ease: "easeOut" },
  //   opacity: { duration: 0.4, delay: 0.3 } // only fades in at the end
  // }}
   variants={buttonVariant}
        initial="hidden"
        animate="show"
    className="text-white text-sm md:text-lg opacity-0 w-fit md:px-10 md:py-5 py-2 px-5 font-medium uppercase rounded-md cursor-pointer z-10 text-center
    hover:bg-[#e70013] duration-500 bg-primary"
  >
    {SliderData[currentSlide].buttonText}
  </motion.button>
</AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute hidden md:block top-1/2 left-5 p-2 z-100 rounded-full cursor-pointer border-2 border-white hover:bg-red-500 hover:border-transparent duration-500"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white h-8 w-8" />
      </button>
      <button
        className="absolute top-1/2 hidden md:block right-5 p-2 z-100 rounded-full cursor-pointer border-2 border-white hover:bg-red-500 hover:border-transparent duration-500"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white h-8 w-8" />
      </button>
    </div>
  );
};

export default Carousel;
