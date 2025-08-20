import React, {useState} from 'react'
import { Plus } from 'lucide-react';
import Question from './Question';


const FAQ = ({title, faqs}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div>

    <div className={`${isOpen ? "rounded-t-md":"rounded-md"} bg-primary h-18  items-center px-8 flex justify-between text-lg text-white md:text-xl`}
        onClick={()=>setIsOpen(!isOpen)}
        >
       <h2>{title}</h2>
    <Plus className='text-white size-5'/>
    </div>
    {isOpen &&(
        <div className='border -mt-5 flex flex-col gap-2  border-primary rounded-md p-5 pt-10'>
            {faqs.map((faq)=>(
                <Question question={faq.question} answer={faq.answer}/>
            ))}
        </div>
    )}
    </div>
    </>
  )
}

export default FAQ