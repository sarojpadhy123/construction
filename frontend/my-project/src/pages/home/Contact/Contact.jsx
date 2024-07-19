/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
    console.log(formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className= "bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% py-12 .section-container mt-16 p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl mx-auto text-gray-500">
            Feel free to reach out to us for any inquiries or assistance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Fill Information</h3>
    
  

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-blue-600 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-blue-600 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-500 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-blue-600 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-blue-500 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-blue-600 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-blue-500 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-blue-600 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
               {/* Office Address, Mobile Number, Email, Website */}
  <div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-xl font-semibold text-blue-800 mb-4">Contact Information</h3>
    
  <div className="bg-blue-100 border border-blue-300 rounded-lg shadow-md p-6 mt-7">
      <h3 className="text-xl font-semibold text-rose-600 mb-4">Office Address</h3>
      <p className="text-blue-700 mb-2">
        <strong>Plot no - 1984/3400/684,</strong>
        <br />
        <strong>2nd Floor, Kesura-751002,</strong>
        <br />
        <strong>Puri-bypass, Bhubaneswar</strong>
      </p>
    </div>
    {/* mobile */}
    <div className='bg-blue-100 border border-blue-300 rounded-lg shadow-md p-6 mt-7'>
    <h3 className="text-xl font-semibold text-rose-600 mb-4">Mobile Information</h3>
    <p className="text-blue-700 mb-2">
        <strong>Mobile no - +91-9438689012,</strong>
        </p>
    </div>

    {/* Email */}
 
    <div className="email-info md:w-1/2 lg:w-full sm:w-1/3 xs:w-1/4 xl:w-full bg-blue-100 border border-blue-300 rounded-lg shadow-md mt-5 pl-2">
  <div className="text-lg font-semibold text-rose-600">Email Info:</div>
  <div className="text-blue-500 mb-2">krishnaraj.e.engg@gmail.com</div>
  <div className="text-lg font-semibold text-rose-600">Website:</div>
  <div className="text-blue-500">www.keeconstruction.in</div>
</div>



  </div>
  
        </div>

        <div className="bg-blue-100 rounded-lg shadow-md p-6 mt-16 text-center">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-700">Our Office Address</h2>
{/* <button className="btn bg-blue-700 text-white mt-7">Connect Now</button> */}
<location>
<p className="mt-4 max-w-2xl text-xl mx-auto text-gray-500">
            Visit us at our Bhubaneswar location:
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

export default Contact;
