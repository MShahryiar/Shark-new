import React from 'react'

const HowComponent = ({id, heading, description}) => {
  return (
    <div className=' relative '>
        <div className='flex gap-5  z-20 items-center'>
            <h3 className='absolute top-0 left-0  -mt-5 text-[150px] font-bold z-10 text-black/10'>{id}</h3>
            <h2 className='text-primary font-medium text-3xl'>{id}</h2>
            <h2 className='text-primary font-medium text-3xl '>{heading}</h2>
        </div>
        <p className='text-gray-700 mt-5 text-md'>{description}</p>
    </div>
  )
}

export default HowComponent