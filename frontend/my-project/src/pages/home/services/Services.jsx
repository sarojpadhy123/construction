import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Faq from '../../Faq';

const Services = () => {
    const location = { lat: 20.2961, lng: 85.8245 }; // Bhubaneswar coordinates
  return (
    <div className='.section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% py-12  '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-700">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl mx-auto text-gray-500">
            Explore our range of construction and interior design services tailored to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Construction Works</h3>
            <p className="text-gray-600 text-sm mb-5">
            Beginning with old times, construction technique has evolved a lot. And we at KE&E, follow all the modern technique and technologies by maintaining the cost and quality of the constuction. You can trust us with your building, be it interior or exterior. We have highly experienced and trained resource to achieve the goal of your buildings.
            </p>
            <img src="./fav.jpg"></img>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Residential Interior Works</h3>
            <p className="text-gray-600 text-sm mb-5">
            Interior design is an integral part of architecture, focused on creating interior spaces that make the building both functional and aesthetically appealing. Still. we have different kinds of buildings, so it makes sense that we have different kinds of buildings, so it makes sense that we have different kinds of interior designs. One of the biggest arenas for designers is residential design, or the interiors of spaces in which people live. This can include houses, apartments, condos, and anywhere else where people reside.
            </p>
            <img src="./homedesign.jpg"></img>

          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Duplex And Flat Sale</h3>
            <p className="text-gray-600 text-sm mb-5">
            A duplex comprises two separate residential units built inside the same building/ structure. They have private elevators and staircases.By owning a duplex, you will get the taste of being a homeowner. On the other hand, flats come in various designs, where some come with many rooms while others have a completely open layout.
            </p>
            <img src='./bannerhome2.jpg'></img>
          </div>


        
        </div>
        <Faq/>
        <div className="bg-blue-100 rounded-lg shadow-md p-6 mt-16 ">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-700">Do u have more question ?</h2>
{/* <button className="btn bg-blue-700 text-white mt-7">Connect Now</button> */}
<location>
<p className="mt-4 max-w-2xl text-xl text-gray-500 font-medium">
            Visit us at our Location:
          </p>
          <p className="mt-8 font-semibold text-md text-indigo-600">Plot no - 1984/3400/684
        2nd Floor, Kesura -751002
        Puri-bypass , Bhubaneswar</p>
        <p className="mt-8 font-semibold text-md text-rose-500">
        Call Now : +91-9438689012
        </p>
          <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14971.90129323512!2d85.85771369460336!3d20.259858149260467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a779f7a36661%3A0x315aa8c0e0ca6587!2sKE%26E%20-%20Construction%20and%20Real%20estate%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1701900690797!5m2!1sen!2sin"
          
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
            className='w-full h-96'
        ></iframe>
        </div>
</location>
</div>
      </div>
    </div>
  );
};

export default Services;
