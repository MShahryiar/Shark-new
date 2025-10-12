import React, {useState, useEffect} from 'react'
import { Plus,Minus } from 'lucide-react';
import Question from './Question';

import {motion, AnimatePresence} from "framer-motion"

const FAQ = ({title, index, faqs, isOpen, onToggle}) => {
  const [openQuestion, setOpenQuestion] = useState(0)

  const toggleQuestion = (qIndex)=>{
    setOpenQuestion(openQuestion === qIndex ? null:qIndex)
  }

   useEffect(()=>{
      if(!isOpen){
        setOpenQuestion(null)
      }
  },[isOpen])
   
  return (
    <>
    <div>

    <div className={`${isOpen ? "rounded-t-md":"rounded-md"} cursor-pointer bg-primary h-14  items-center px-8 flex justify-between text-lg text-white md:text-xl`}
        onClick={()=> onToggle(index)

        }
        >
       <h2>{title}</h2>
    
  <AnimatePresence mode="wait" initial={false}>
    {isOpen ? (
      <motion.div
        key="minus"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Minus className="text-white size-5" />
      </motion.div>
    ) : (
      <motion.div
        key="plus"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Plus className="text-white size-5" />
      </motion.div>
    )}
  </AnimatePresence>
    </div>

    <AnimatePresence>
    {isOpen  &&(

        <motion.div 
         key="faq-content"
          initial={{ opacity: 0,}}
      animate={{ opacity:1}}
      // exit={{ opacity: 0, height: 0 }}
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className='border -mt-5 flex flex-col gap-2  border-primary rounded-md p-5 pt-10'>
            {faqs.map((faq,i)=>(
              <Question question={faq.question} answer={faq.answer} index={i} isOpen={openQuestion === i} toggleQuestion={toggleQuestion}/>
            ))}
        </motion.div>
    )}
    </AnimatePresence>
    </div>
    </>
  )
}

export default FAQ