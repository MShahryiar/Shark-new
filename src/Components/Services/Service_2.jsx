import React from 'react'
import { LibraryBig } from 'lucide-react';

const Service_2 = ({id, title, description, Icon}) => {
  return (
    <div key={id} className='bg-gray-100 flex flex-col gap-3 py-20 items-center justify-center  cursor-pointer group hover:bg-gray-800 duration-300'>
            <Icon className='size-10 text-secondary'/>
            <h2 className='text-gray-700 font-medium text-center text-xl group-hover:text-white duration-300'>{title}</h2>
            <p className='max-w-[250px] text-center font-light text-sm text-gray-400 duration-300'>{description}</p>
    </div>
  )
}

export default Service_2