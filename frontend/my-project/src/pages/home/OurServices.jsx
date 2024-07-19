import React from "react";

const serviceLists = [
    {id:1, title: "Construction Works", des:
    "Building foundations, shaping spaces, crafting structures, defining modern landscapes.", img: "./bannerhome2.jpg"},
    {id:2, title: "Interior Works", des: 
    "Designing ambiances, transforming spaces, enhancing aesthetics, crafting inviting interior environments.", img: "./homedesign12.jpg"},
    {id:3, title: "Duplex Flats", des: 
    "Duplex flats: Multilevel living, dual floors, spacious and versatile abodes.", img: "./homedesign10.jpg"},
    {id:4, title: "Residential Works", des: 
    "Residential works: Creating homes, shaping living spaces, fulfilling dreams with architecture.", img: "./homedesign9.jpg"},
]

const OurServices = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100%">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our  Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable designing experiences and
              offer exceptional services, blending with warm
              hospitality.
            </p>

            <button className="bg-blue-600 font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-blue-800 cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            {/* <h5 className="pt-3 font-semibold"> {service.title}</h5> */}
                            <h5 className="pt-3 font-semibold"> {service.title}</h5>
                            <p className="text-[#414e99]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;