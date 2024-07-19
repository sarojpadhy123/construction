import React from 'react'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100%'>

    
        <div className='py-24 flex flex-col md:flex-row-reverse sm:flex-row-reverse justify-between items-center gap-8'>
            
            
            {/* images */}

        <div className='md:w-1/2'>
        <img src='./fav.jpg' alt='' className="w-full md:w-96 sm:w-96 h-96 object-cover rounded-2xl shadow-sm bg-green" />

<div className='flex flex-row md:flex-row items-center justify-around mt-2 gap-1'>
<div className='flex bg-slate-200 py-2 px-3 rounded-2xl items-center gap-1 shadow-md w-44 justify-center'>
    <div>
        <img src='./bannerhome2.jpg' alt='' className='rounded-2xl h-fit'/>
        <div className='space-y-1'>
            <h5 className='font-medium mb-1 items-center'>Duplex</h5>
            <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500"  readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly checked/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500"  readOnly/>
</div>
<p className="text-rose-600 font-semibold font-poppins">Best Rated</p>
        </div>
    </div>

</div>
<div className='flex bg-slate-200 py-2 px-3 rounded-2xl items-center gap-1 shadow-md w-44 justify-center'>
    <div>
        <img src='./fav.jpg' alt='' className='rounded-2xl h-fit'/>
        <div className='space-y-1'>
            <h5 className='font-medium mb-1 items-center'>Duplex</h5>
            <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly checked/>
  <input type="radio" name="rating-4" className="mask mask-star-2  bg-yellow-500" readOnly />
</div>
<p className="text-rose-600 font-semibold font-poppins">Dream Home</p>
        </div>
    </div>

</div>
</div>
</div>
{/* left div */}
<div className='md:w-1/2 space-y-7 px-4'>
    <h2 className='md:text-4xl text-3xl font-bold md:leading-snug leading-snug p-2'>We assist our clients in achieving their 
    <span className='text-orange-300 p-2'>Dream Home🏡</span>

    </h2>
    <p className='text-xl text-secondary text-semibold'>We offer product design, engineering and manufacturing management services for inspiring new businesses and residential homes.</p>
<Link to ="/contact"><button className='btn bg-blue-600 px-8 py-3 font-semibold text-white rounded-full' >Contact Now</button></Link>
</div>


        </div>
    </div>
  )
}

export default Banner