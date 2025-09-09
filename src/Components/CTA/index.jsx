import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate()
  return (
    <div className='md:w-5/6 w-fit  my-20 mx-auto h-fit  '>
        <div className='p-10 bg-[#e63946] h-full mx-auto rounded-3xl flex lg:flex-row gap-5 flex-col   items-center justify-between '>
          <div className='flex flex-col gap-2 md:text-left text-center' >
            <h2 className='text-xl md:text-2xl whitespace-nowrap md:text-3xl  text-gray-50 font-semibold'>Thinking about moving to <span className='italic'>Canada</span>?</h2>
            <p className='whitespace-nowrap text-gray-50 text-lg md:text-xl'>The perfect destination to begin a new life...</p>
          </div>
          <button
            onClick={()=>navigate("/contact")}
          className='hover:-translate-y-2  duration-500 cursor-pointer border-2 rounded-md border-gray-200 px-5 py-3 text-gray-50'>Free Assessment</button>
        </div>
    </div>
  )
}

export default CTA