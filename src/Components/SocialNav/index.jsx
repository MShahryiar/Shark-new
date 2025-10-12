
import {MapPin,Mail,  Phone} from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const SocialNav = () => {
  return (
    <div className='bg-primary hidden md:flex items-center px-10 justify-between'>
        {/* information */}
       <div className="flex gap-2 py-3 items-center text-sm text-white divide-x-1">
  {/* Address */}
  <a
    href="https://maps.app.goo.gl/L9JTYEZ2PkckP3xg6"
    target="_blank"
    rel="noopener noreferrer"
    className="list-none flex gap-1 px-2 items-center hover:underline"
  >
    <MapPin className="h-5 w-5 text-secondary" />
    <span className="text-sm">Mississauga | Winnipeg | Calgary</span>
  </a>

  {/* Email */}
  <a
    href="mailto:info@shark-immigration.ca"
    className="list-none flex gap-1 px-2 items-center hover:underline"
  >
    <Mail className="h-5 w-5 text-secondary" />
    <span className="text-sm">info@shark-immigration.ca</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+19054074275"
    className="list-none flex gap-1 px-2 items-center hover:underline"
  >
    <Phone className="h-5 w-5 text-secondary" />
    <span className="whitespace-nowrap text-sm">(905) 407-4275</span>
  </a>
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
  <a href="https://x.com/sharkimmca" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="hover:text-[#e70013] duration-300 " />
  </a>
  
</div>
    </div>
  )
}

export default SocialNav