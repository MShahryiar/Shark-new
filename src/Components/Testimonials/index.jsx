import { Quote } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
const Testimonials = () => {
  const navigate = useNavigate()
  return (
    <div >
      <div className='flex  lg:flex-row flex-col h-fit md:h-screen gap-10 p-20 w-full px-14 md:px-0  md:w-5/6 mx-auto'>

        <div className='flex-1 flex justify-center items-center md:items-start flex-col '>
          <div className='max-md:text-center flex flex-col max-md:items-center gap-1 '>

           <h2 className='font-medium text-secondary text-md mb-3 uppercase'>Testimonials</h2>
           <h2 className='text-primary text-3xl text-center md:text-left font-bold capitalize mb-5'>Happy Clients, New Beginnings</h2>
           <p className='text-gray-600 text-md font-extralight'>Real experiences from clients who made Canada their home with Shark Immigration Solutions"</p>
           <Link className='max-w-fit hover:-translate-y-2 duration-500 cursor-pointer mt-5 px-5 py-2 bg-primary rounded-md text-white'
           to="https://search.google.com/local/reviews?placeid=ChIJHZI6REEf1YkREcle1NebptU"
           target='_blank'
           >Read all our reviews</Link>
          </div>
        </div>  
        <div className='flex-1 place-items-center grid grid-cols-1 md:grid-cols-2 gap-10  ' >
          <div className='  gap-5  flex flex-col items-center text-secondary  h-fit  bg-gray-50 p-4 shadow-xl   '>
            <Quote className='size-7 '/>
            <p className='font-extralight text-gray-500 text-md'>When it comes to immigration, no one would offer you the best analysis According to your case. I am telling you with my personal experience. I Have been to several consultants, but shark immigration team is way ahead. Especially Mr Daniyal, the great man with an amazing mind.</p>
            <h2 className='text-primary   text-md mt-5'>— Ali Hadir<br /></h2>
          </div>
             <div className='  gap-5  flex flex-col items-center text-secondary  h-fit  bg-gray-50 p-4 shadow-xl   '>
            <Quote className='size-7 '/>
            <p className='font-extralight text-gray-500 text-md'> Went to Daniyal for my cousins case. It was all a little complicated at first, but he helped us very thoroughly and made it easy every step of the way. We have got it sorted out now and received their status.
Thank you Daniyal and Team.</p>
            <h2 className='text-primary   text-md mt-5'>— Manjot Sandhu<br /></h2>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Testimonials