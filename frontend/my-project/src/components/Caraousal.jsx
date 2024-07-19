import React from 'react'
import { Carousel } from 'flowbite-react';


const Caraousal = () => {
    return (

        <div className='section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#9dbbe6] to-100% '>
  
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <div
      className="relative bg-cover bg-center text-indigo-900 py-20 "
      
    >
 
    </div>
          <Carousel >
            <img src="home banner.jpg" alt="..." />
            <img src="homedesign8.jpg" alt="..." />
            <img src="IMG_20230528_174351.jpg" alt="..." />
            <img src="homedesign12.jpg" alt="..." />
            <img src="homedesign11.jpg" alt="..." />
            <img src="homedesign10.jpg" alt="..." />
            <img src="homedesign9.jpg" alt="..." />
            <img src="homedesign8.jpg" alt="..." />
          
          </Carousel>
      
        </div>
        </div>
      
      );
}

export default Caraousal
