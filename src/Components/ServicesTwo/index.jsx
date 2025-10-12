import React from 'react'
import { MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const ServicesTwo = () => {
  const navigate = useNavigate()
  return (
    <div className='h-fit md:h-[500px] grid grid-cols-1 md:grid-cols-3'>
        <div className='grid-cols-1 p-20 md:p-10 bg-secondary opacity-80   flex flex-col justify-center items-center'>
            <div className=''>

            <h2 className='text-3xl text-white font-bold'>Our Services </h2>
            <p className='max-w-xl md:max-w-2xs text-gray-50 text-lg font-medium   my-10'>We provide expert guidance and personalized solutions to help you work, study, invest, or settle in Canada with confidence and ease.</p>
            <button className='border-2 border-white  px-5 py-3 text-white hover:text-blue-900 hover:bg-white duration-500 rounded-md cursor-pointer' onClick={()=>navigate("/contact")}>Inquire Now</button>
            </div>
        </div>
        <div className='col-span-2 p-20 md:p-10    flex flex-col justify-center items-center relative'>
            <div className='absolute h-full w-full bg-primary top-0 left-0 -z-10 opacity-80'></div>
            <img src="./images/ServiceBg.jpg" className='absolute h-full w-full opacity-40 top-0 left-0 object-cover -z-20' alt="" />
            <div>

             <h2 className='text-3xl max-w-md text-white font-bold'>Canadian <span className='text-red-500 italic'>Immigration</span> & Visa Services </h2>
             <hr className='w-32 my-5 border-1 border-white' />
            <p className='max-w-2xl text-gray-50 text-lg font-medium my-10 '> From Express Entry to study, work, and visitor visas, we guide you through every step toward achieving your Canadian dream.</p>
            <button className='flex gap-5 items-center cursor-pointer font-bold text-sm text-white group' onClick={()=>navigate("/services ")}>Read More <MoveRight className='text-white size-4 group-hover:translate-x-2  group-hover:text-red-500 duration-500'/> </button>
            </div>
        </div>

    </div>
  )
}

export default ServicesTwo