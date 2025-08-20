import React, {useState} from 'react'
import { Plus } from 'lucide-react';

const Question = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' rounded-md p-2 border border-primary'>
        <div className='flex justify-between' onClick={()=>setIsOpen(!isOpen)}>
        <h2>{question}</h2>
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