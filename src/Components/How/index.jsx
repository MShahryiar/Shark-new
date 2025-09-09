import React from 'react'
import HowComponent from './HowComponent'
import HowData from "../../data/how.js"
const How = () => {
  return (
    <div className=''>

    <div className=' w-5/6 mx-auto py-20'>
            <div className='flex justify-center mt-10 text-center items-center'>
          <div>
            <h2 className='font-medium text-secondary max-md:text-sm text-md mb-3 uppercase'>Process</h2>
            <h1 className='text-primary text-xl md:text-2xl  max-w-3xl text-center text-center font-medium capitalize mb-5'>How We Work</h1>
          </div>

        </div>
          <div className='grid  grid-cols-1 md:grid-cols-3 gap-32 md:gap-20 my-20'>
                {HowData.map((data)=>(
                    <HowComponent key={data.id} id={data.id}  heading={data.heading} description={data.description}/>
                ))}
          </div>
           

    </div>
    </div>
  )
}

export default How