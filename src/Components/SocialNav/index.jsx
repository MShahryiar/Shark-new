
import {MapPin,Mail,  Phone} from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const SocialNav = () => {
  return (
    <div className='bg-primary hidden md:flex items-center px-10 justify-between'>
        {/* information */}
        <div className='flex gap-2   py-3 items-center  text-sm items-center text-white  divide-x-1'>
            <div className=' list-none flex gap-1 px-2'>
                <MapPin  className="h-5 w-5 text-secondary"/>
                <li className="text-sm">211 Watline Avenue, Mississauga</li>
            </div>
             <div className='list-none flex gap-1 px-2'>
                <Mail className="h-5 w-5 text-secondary "/>
                <li className="text-sm">info@shark-immigration.ca</li>
            </div>
             <div className='list-none flex gap-1 px-2'>
                <Phone className="h-5 w-5 text-secondary"/>
                <li className="whitespace-nowrap text-sm">(905) 407-4275</li>
            </div>
        </div>

        {/* social */}
        
          <div className="flex gap-3  text-sm text-white">
  <a href="https://facebook.com/sharkimmigrationca" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="hover:text-[#e70013] duration-300 " />
  </a>
  <a href="https://instagram.com/sharkimmigrationca" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-[#e70013] duration-300 " />
  </a>
  <a href="https://tiktok.com/@sharkimmigrationca" target="_blank" rel="noopener noreferrer">
    <SiTiktok className="hover:text-[#e70013] duration-300 " />
  </a>
  <a href="https://youtube.com/@sharkimmigrationca" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="hover:text-[#e70013] duration-300 " />
  </a>
</div>
    </div>
  )
}

export default SocialNav