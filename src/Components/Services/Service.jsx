import React from 'react'
import { motion } from 'framer-motion'
import { MoveRight, BookOpenText  } from 'lucide-react'
import { Link } from 'react-router-dom'

const Service = ({name, brief, id, Icon}) => {
  return (
    <Link to={`/services/${id}`}  className='cursor-pointer rounded-md hover:-translate-y-3 bg-gray-100 group hover:bg-[#022b5f]  hover:text-white hover:shadow-xl duration-500'>
       
        <div className='mt-5 p-5 flex flex-col text-primary gap-5 hover:text-white duration-500'  >
        {/* <BookOpenText className='text-primary group-hover:text-white duration-500 size-10 stroke-1'/> */}
        <Icon className="text-[#e70013] group-hover:text-white duration-500 size-10 stroke-1" />

        <h2 className='font-medium text-lg group-hover:text-white '>{name}</h2>
        <p className='text-md group-hover:text-white'>{brief}</p>
        <Link to={`/services/${id}`}  className='text-[#e70013] group-hover:text-white  font-bold text-md  flex gap-3 mt-5 items-center' >Read More <MoveRight className="size-5 stroke-3 text-primaryBrand group-hover:text-white "/>  </Link>
        </div>


    </Link>
  )
}

export default Service