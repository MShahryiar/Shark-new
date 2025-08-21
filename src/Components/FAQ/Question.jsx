import React, {useEffect, useState} from 'react'
import { Plus } from 'lucide-react';

const Question = ({question, answer, index, isOpen, toggleQuestion}) => {

 
  return (
    <div className=' rounded-md p-2 border-2  border-primary '>
        <div className='flex justify-between cursor-pointer' onClick={()=>toggleQuestion(index)}>
        <h2 className={`${isOpen && "underline  font-medium  "}`}>{question}</h2>
        </div>
        {isOpen && (

        <div>
            <h3 className='text-sm text-gray-700 px-2 my-2'>{answer}</h3>
        </div>
        )}
        </div>
  )
}

export default Question