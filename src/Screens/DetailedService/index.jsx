
import SocialNav from "../../Components/SocialNav"
import Navbar from "../../Components/Navbar"
import { useParams, Link } from "react-router-dom"
import {services} from "../../data/services.js"
import { ChevronRight } from 'lucide-react';

import Footer from "../../Components/Footer"
import ScrollTop from "../../Utils/ScrollTop.js";


const DetailedService = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id);

    if (!service) return <h2>Service not found</h2>;

    // console.log(service)
  return (
    <>
        <ScrollTop/>
        <SocialNav/>
        <Navbar/>
     
         <div className=" ">
            <div className=" relative h-92 bg-black opacity-80  w-full flex justify-center items-center ">
              <img src={"/images/serviceBanner.avif"} className="absolute top-0 left-0 h-full w-full opacity-60 blur-2xs -z-10 object-cover "/>
                <div className="flex flex-col items-center">
                 <h1 className="text-white text-shadow-lg/50 text-3xl md:text-5xl text-center max-w-5xl capitalize font-bold">{service.name? service.name:"N/A"}</h1>
                 <div className="mt-5 flex flex-col md:flex-row gap-2 items-center text-sm md:text-lg">
                    <Link to="/" className="text-shadow-lg/30 text-white font-medium hover:underline  decoration-3 underline-offset-6 duration-300 transition-all decoration-[#e70013] ">Home</Link>
                    <ChevronRight className="max-md:rotate-90 size-5 text-secondary stroke-3"/>
                    <Link to="/services" className="text-white text-shadow-lg/30 font-medium  ">Services</Link>
                    <ChevronRight className=" max-md:rotate-90  text-secondary size-5 stroke-3"/>
                    <span className="text-white font-medium hover:underline  text-shadow-lg/30">{service.name}</span>
                 </div>
                </div>

            </div>
         </div>
         <div  className="w-5/6 my-10 mx-auto">

   {service.sections?.map((section, index) => {
       if (section.type === "imageSection") {
           return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-center">
              <div>
                <h2 className="text-3xl font-medium mb-4">{section.heading}</h2>
                {section.content.map((item, i) => {
                    
                  if (item.type === "paragraph") {
                      return <p key={i} className="mb-3 text-gray-800 text-justify">{item.text}</p>;
                  }
                  if (item.type === "list") {
                    return (
                        <ul key={i} className="list-disc list-inside text-gray-800 text-justify mb-3">
                        {item.items.map((listItem, liIndex) => (
                          <li key={liIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );
                }
                  return null;
                })}
              </div>
              <div>
                <img src={section.image} alt={section.heading} className="rounded-lg shadow-lg" />
              </div>
            </div>
          );
        }
        
        if (section.type === "singleColumn") {
            return (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-justify">{section.heading}</h2>
              
              {section.content.map((item, i) => {
                if (item.type === "heading") {
                      return <h2 key={i} className="mb-3 font-medium text-gray-800 text-justify">{item.text}</h2>;
                  }
                  if (item.type === "paragraph") {
                  return <p key={i} className="mb-3 text-gray-800 text-justify">{item.text}</p>;
                }
                if (item.type === "list") {
                  return (
                    <ul key={i} className="list-disc list-inside mb-3 text-gray-800 text-justify">
                      {item.items.map((listItem, liIndex) => (
                        <li key={liIndex}>{listItem}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          );
        }
        
        return null;
    })}
    </div>

   
  <Footer />
    </>
  )

}

export default DetailedService