import { ShieldCheck, Scale,UserStar  } from 'lucide-react';
import {motion} from "framer-motion"
const data = [
  {
    id:1,
    title:"Experience",
    description:"The team at Shark Immigration Solutions are exceptionally skilled, understanding each client’s situation and helping them achieve their goals.",
    icon:ShieldCheck
  },
  {
    id:2,
    title:"Skilled Consultant",
    description:"The immigration consultants at Shark Immigration Solutions are experts in their field, offering innovative and comprehensive solutions to help clients achieve success.",
    icon:UserStar
  },
  {
    id:3,
    title:"Legal Process",
    description:"At Shark Immigration Solutions, we ensure that all necessary documents and paperwork are properly maintained, helping clients reach their destination legally.",
    icon:Scale
  }
]
const Expertise = () => {
  return (
    <div className='bg-gray-50'>
      <div className='w-5/6 mx-auto py-20'>
             <div className='max-md:text-center  flex flex-col items-center gap-1 '>

           <h2 className='font-medium text-secondary text-md mb-3 uppercase'>Our Expertise</h2>
           <h2 className='text-primary text-3xl text-center md:text-left font-medium capitalize mb-5'>Immigration Consultancy Firm Devoted To Our Clients</h2>
          </div>

          <div className='grid grid-cols-1 gap-10 place-items-center my-10 md:grid-cols-3'>

          {data.map((expertise)=>{
            const Icon = expertise.icon
            return(

<motion.div 
key={expertise.id}
  whileHover={{translateY:-20}}
  transition={{duration:0.3}}
className="p-[5px] rounded-lg bg-white group max-w-80 cursor-pointer ">
              <div className='bg-white h-78 text-center p-5 flex flex-col justify-around items-center '>

<motion.div
className='group-hover:scale-125 duration-300 '
>
              <Icon className='size-16 text-primary'/>
</motion.div>
              <h2 className='font-medium text-xl'>{expertise.title}</h2>
              <p className='text-gray-500'>{expertise.description}</p>
              </div>
            </motion.div>
)
})}
          </div>
      </div>
    </div>
  )
}

export default Expertise