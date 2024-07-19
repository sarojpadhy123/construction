import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/all-videos')
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects containing imageurl and videourl
        setVideos(data);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const openVideo = (videourl) => {
    window.open(videourl, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-[#17253b] from-0% to-[#1b3969] to-100% py-12 section-container mt-16 p-12">
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-6 ml-6 mr-6 text-white text-center">Watch Our Work Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openVideo(video.videourl)}
            >
              <img
                src={video.imageurl}
                alt={`video-${index}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg transition duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-rose-700 text-7xl" />
              </div>
              <p className="text-white mt-5 text-center font-semibold">{video.videotitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
