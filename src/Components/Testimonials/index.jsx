import React from 'react'

const Testimonials = () => {
  return (
    <div >
      <div className='flex  lg:flex-row flex-col h-fit md:h-screen gap-10 p-20 w-full px-14 md:px-0  md:w-5/6 mx-auto'>

        <div className='flex-1 flex justify-center items-center md:items-start flex-col '>
          <div className='max-md:text-center flex flex-col max-md:items-center gap-1 '>

           <h2 className='font-medium text-secondary text-md mb-3 uppercase'>Testimonials</h2>
           <h2 className='text-primary text-3xl text-center md:text-left font-bold capitalize mb-5'>Happy Clients, New Beginnings</h2>
           <p className='text-gray-600 text-md font-extralight'>Real experiences from clients who made Canada their home with Shark Immigration Solutions"</p>
           <button className='max-w-fit hover:-translate-y-2 duration-500 cursor-pointer mt-5 px-5 py-2 bg-primary rounded-md text-white'>Read all our reviews</button>
          </div>
        </div>  
        <div className='flex-1 place-items-center grid grid-cols-1 md:grid-cols-2 gap-10  ' >
          <div className='      h-fit  bg-gray-50 p-4 shadow-xl   '>
            <p className='font-extralight text-gray-500 text-sm'> I was overwhelmed by the Canadian immigration process, but Shark Immigration Solutions made everything so simple and stress-free. From my initial consultation to receiving my PR, their guidance was clear, professional, and truly caring. I felt supported every step of the way, and now I’m starting my new life in Toronto with confidence. I couldn’t have done it without them! </p>
            <h2 className='text-primary   text-md mt-5'>— Ayesha Khan<br /> <span className='text-sm'>Permanent Resident, Toronto</span></h2>
          </div>
               <div className='      h-fit  bg-gray-50 p-4 shadow-xl   '>
            <p className='font-extralight text-gray-500 text-sm'> I was overwhelmed by the Canadian immigration process, but Shark Immigration Solutions made everything so simple and stress-free. From my initial consultation to receiving my PR, their guidance was clear, professional, and truly caring. I felt supported every step of the way, and now I’m starting my new life in Toronto with confidence. I couldn’t have done it without them! </p>
            <h2 className='text-primary   text-md mt-5'>— Ayesha Khan<br /> <span className='text-sm'>Permanent Resident, Toronto</span></h2>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Testimonials