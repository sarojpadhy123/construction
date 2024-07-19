import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const Photos = () => {
  const photos = [
    'bannerhome2.jpg',
    'IMG-20221216-WA0094.jpg',
    'fav.jpg',
    'home banner.jpg',
    'homedesign.jpg',
    'homedesign10.jpg',
    'homedesign3.jpg',
    'homedesign7.jpg',
    'homedesign8.jpg',
    'homedesign9.jpg',
    'homedesign10.jpg',
    'homedesign12.jpg',
    
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#17253b] from-0% to-[#1b3969] to-100% py-12 .section-container mt-16 p-12 ">
      <div className="">
        <h1 className="text-3xl font-bold mb-6 mt-6 ml-6 mr-6 text-white">Take A Look Our Work </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              <img
                src={photo}
                alt={`photo-${index}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg transition duration-300 transform group-hover:scale-105 cursor-pointer"
                onClick={() => openModal(photo)}
              />
            </div>
          ))}
        </div>
        {selectedPhoto && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
            <button className="absolute top-4 right-4 text-white text-xl mt-24" onClick={closeModal}>
              Close
            </button>
            <img src={selectedPhoto} alt="selected-photo" className="w-80 h-80" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
