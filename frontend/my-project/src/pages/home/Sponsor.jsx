import React from 'react';
import Slider from 'react-slick';

const Sponsor = () => {
  // Sample sponsor data
  const sponsors = [
    { name: 'Finolex', image: '../../../public/fi.png' },
    { name: 'UltraTech', image: '../../../public/ul.png' },
    { name: 'Kajaria', image: '../../../public/ka.jpg' },
    { name: 'Supreme', image: '../../../public/su.png' },
    { name: 'TATA', image: '../../../public/ta.jpeg' },
    // Add more sponsors
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    <div className="bg-blue-950 p-4 rounded-lg shadow-md mb-5 section-container">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Our Trusted Products</h2>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="mx-2">
            <img src={sponsor.image} alt={sponsor.name} className="h-32 w-52" />
            <p className=" mt-2 text-white font-light">{sponsor.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsor;
