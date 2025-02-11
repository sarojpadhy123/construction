/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100%">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="./bannerhome2.jpg" alt="image" className="w-full  object-cover object-center rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “I had the pleasure of taking the services and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
           
           {/* avater */}

           <div className="flex items-center gap-4 flex-wrap">
           <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="../../../public/IMG_20230528_174351.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                <img src="../../../public/IMG_20230528_174351.jpg" />
                  
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                <img src="../../../public/IMG_20230528_174351.jpg" />
                
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/> <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;