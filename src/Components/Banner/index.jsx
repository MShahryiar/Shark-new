import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:mt-20 p-10 px-5 md:px-20 justify-around  h-fit md:h-screen '>
        <div className='flex-1 grid grid-rows-1 max-md:mb-10 md:grid-rows-4'>
            <div className='max-w-lg      mx-auto max-md:mt-30 row-start-1 md:row-start-2'>
            <h1 className='text-2xl md:text-6xl  font-semibold    capitalize'>Turning Your Canadian Dream into Reality with Expert Guidance.</h1>
            <p className='font-extralight text-gray-700 my-5'>Navigating Canadian Immigration Made Easy – Your Trusted Partner for Education, Career Growth, or a New Life in Canada.</p>
            <div className='flex gap-3'>
                <button className='bg-primary text-white px-5 py-3   rounded-md hover:-translate-y-2 cursor-pointer duration-300  '>Book A Consultation</button>
                <button className='border-2 border-primary  px-5 py-3 cursor-pointer rounded-md  hover:bg-[#022b5f] hover:-translate-y-2 text-[#022b5f] hover:text-white duration-300'>Explore Visa Options</button>
            </div>
            </div>
        </div>
        <div className='flex-1 flex items-center  justify-center'>
            <img src={"./images/about.jpg"} alt='Banner image ' className='rounded-md md:h-5/6 object-cover'/>
        </div>
    </div>
  )
}

export default Banner