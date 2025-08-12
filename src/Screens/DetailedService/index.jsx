
import SocialNav from "../../Components/SocialNav"
import Navbar from "../../Components/Navbar"
import { useParams, Link } from "react-router-dom"
import {services} from "../../data/services.js"
import { ChevronRight } from 'lucide-react';

import Footer from "../../Components/Footer"


const DetailedService = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id);

    if (!service) return <h2>Service not found</h2>;

    console.log(service)
  return (
    <>
        <SocialNav/>
        <Navbar/>
     
         <div className="pt-28 ">
            <div className=" relative h-92  w-full flex justify-center items-center ">
              <img src={"/images/serviceBanner2.jpg"} className="absolute top-0 left-0 h-full w-full opacity-60 blur-xs -z-10 object-cover"/>
                <div className="flex flex-col items-center">
                 <h1 className="text-white text-shadow-lg/50 text-3xl md:text-5xl text-center max-w-5xl capitalize font-bold">{service.name? service.name:"N/A"}</h1>
                 <div className="mt-5 flex gap-2 items-center text-sm md:text-lg">
                    <Link to="/" className="text-shadow-lg/30 text-white font-medium hover:underline  decoration-3 underline-offset-6 duration-300 transition-all decoration-[#e70013] ">Home</Link>
                    <ChevronRight className=" size-5 text-secondary stroke-3"/>
                    <Link to="/services" className="text-white text-shadow-lg/30 font-medium  ">Services</Link>
                    <ChevronRight className="text-secondary size-5 stroke-3"/>
                    <span className="text-white font-medium  text-shadow-lg/30">{service.name}</span>
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

         
{/* 
         <div className="md:w-4/6 mx-auto ">
             <div className="h-fit min-h-92 flex justify-between">

                 <div className="flex-2 bg-red-200">
                     <h2>Heading 1</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam animi modi at suscipit corporis tempore? Cumque quidem unde commodi fuga sint nisi voluptatem magnam voluptates. Quia, velit? Voluptate repudiandae unde debitis mollitia velit est adipisci dolorem! Dignissimos eos consequuntur laudantium laborum ratione excepturi facilis. Nesciunt unde perferendis aperiam, sapiente suscipit quas iusto inventore optio eveniet blanditiis vero aliquid. Quos, molestiae? Molestiae repellat dolor eum deleniti beatae est eius doloremque excepturi iure nostrum rerum consequuntur iusto facere eos sit impedit alias accusamus sequi, sapiente dolore corrupti at fugiat error consequatur! Vel saepe cumque porro, inventore, quo nisi optio laboriosam dolorem tenetur, iure quam dolorum. Ad officiis fugit, quas at quos placeat dolorem dolor sunt. Fugiat ipsam ea qui atque cumque explicabo, porro pariatur itaque nulla doloremque illo, provident, delectus neque? Quisquam maxime assumenda est sunt nobis, recusandae vero repellendus, laudantium repudiandae velit cum eius! Sit accusantium provident aut accusamus deleniti?</p>
                 </div>
                 <div className="flex-1 bg-green-200">df</div>
             </div>

             <div>
                 <h2>Heading 2</h2>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus rem voluptatibus neque deserunt magnam molestiae, dicta saepe modi iste, eos facilis error sit cupiditate pariatur repudiandae voluptatum ex? Inventore, possimus corrupti fugit molestias natus aperiam fugiat aliquam. Reiciendis corrupti excepturi porro minima, asperiores sed praesentium perspiciatis fuga ratione dicta!</p>
             </div>
             <div>
                 <h2>Heading 3</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, fuga?</p>
             </div>
         </div>
      */}
  <Footer />
    </>
  )

}

export default DetailedService