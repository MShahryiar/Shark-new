import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = ({size}) => {
  return (
    <div className="flex gap-3 justify-start      text-sm">
     <a href="https://facebook.com/sharkimmigrationca"  className="border-1 p-1  group hover:bg-red-500 hover:text-white text-primary hover:border-white not:border-primary  rounded-full p-1"target="_blank" rel="noopener noreferrer">
       <FaFacebookF className={`  size-${size} group-hover:text-white transition-colors duration-300 `} />
     </a>
       <a href="https://instagram.com/sharkimmigrationca"  className="border-1 p-1 group hover:bg-red-500 hover:text-white text-primary hover:border-white not:border-primary  rounded-full p-1" target="_blank" rel="noopener noreferrer">
       <FaInstagram className={`size-${size}    group-hover:text-white transition-colors duration-300 `}/>
     </a>
       <a href="https://tiktok.com/@sharkimmigrationca"  className="border-1 p-1 group hover:bg-red-500 hover:text-white text-primary hover:border-white not:border-primary  rounded-full p-1"target="_blank" rel="noopener noreferrer">
       <SiTiktok className={` size-${size}   group-hover:text-white transition-colors duration-300 `}/>
     </a>
       <a href="https://youtube.com/@sharkimmigration.ca"  className="border-1 p-1 group hover:bg-red-500 hover:text-white text-primary hover:border-white not:border-primary  rounded-full p-1" target="_blank" rel="noopener noreferrer">
       <FaYoutube className={`size-${size}  group-hover:text-white transition-colors duration-300 `}/>
     </a>
      <a href="https://x.com/sharkimmca"  className="border-1 p-1 group hover:bg-red-500 hover:text-white text-primary hover:border-white not:border-primary  rounded-full p-1" target="_blank" rel="noopener noreferrer">
       <FaXTwitter className={`size-${size}  group-hover:text-white transition-colors duration-300 `}/>
     </a>
   </div>
  )
}

export default SocialIcons