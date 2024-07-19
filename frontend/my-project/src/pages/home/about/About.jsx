import React from 'react';
import Team from '../../../components/Team';

const About = () => {
  return (
    <div className= 'bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% py-12 .section-container '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-sm leading-6 text-indigo-600 font-semibold tracking-wide uppercase mt-8">About Us</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl sm:leading-10">
            Crafting Spaces, Building Dreams
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            We are dedicated to creating functional and inspiring environments that reflect your vision.
            Our passion lies in transforming spaces into extraordinary living experiences.
          </p>
        </div>
        {/* make two div on left i have image and another is <h2>Building Everything Best That You Needed!</h2>  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
        {/* Left side with the image */}
        <div className="w-full md:w-1/2">
          <img src='./fav.jpg' alt="Image One" className="rounded-lg w-full h-auto" />
        </div>

        {/* Right side with the header */}
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
            Building Everything Best That You Needed!
          </h2>
       
       <p className='mt-4 max-w-2xl text-sm leading-7 text-gray-800 lg:mx-auto'>At KE&E we believe a successful construction & interior design solution is creative, environmentally progressive and creates a lasting impact unique to the client mission. Working with all... We blend intensive research, planning and design to create environments that meet strategic business objectives and support people while they work, learn, live and heal. We are a team of Interior Designers, Civil Engineers, Project Managers, Supervisors. 3D Artists, Architects, Skilled Labour & Unskilled Labour ably supported by our Marketing Consultants and support staff. We work as a team to achieve our goal of transforming spaces. The basic process includes conceptual development, space planning, site inspections, programming and research, communicating with the stakehold- ers of a project, construction management, and execution of the design. We are proud that we operate in a complete corporate set up that enables us to effectively focus and ensure quality, competitive price points, time schedules and dedicated customer service.</p>
       <div className="mt-8">
            <h4 className="text-xl font-bold text-blue-700">Our Offerings:</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Project Quality Work
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free Plan As Per VASTU & 3D Elevation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                25 Years Structural Guarantee
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                2years Workmanship Warranty
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free Pest Control
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Bathroom WaterProofing Solution
              </li>
              {/* Add similar styled list items for other offerings */}
            </ul>
          </div>
        
        </div>
      </div>
      </div>
      <Team/>
    </div>
  );
};

export default About;
