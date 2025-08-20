import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center flex flex-col gap-5">
          <h1 className="text-xl md:text-3xl font-semibold " >404 – Page Not Found</h1>
          <div className="px-10 md:px-0 ">

          <p className="text-gray-800 text-lg  md:text-xl font-light">We can’t seem to find the page you were looking for.</p>
          <p className="text-gray-800 text-lg md:text-xl font-light">Don’t worry — just like with your immigration journey, we’ll help you get back on track.</p>
          </div>
          <div className="flex md:flex-row flex-col  items-center gap-2 justify-center"> 
            <motion.button 
              whileHover={{y:-5}}
              transition={{duration:0.3}}
            className="rounded-sm bg-primary text-white px-5 py-2 cursor-pointer" 
              onClick={()=>navigate("/")}
            >Return to Home</motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage