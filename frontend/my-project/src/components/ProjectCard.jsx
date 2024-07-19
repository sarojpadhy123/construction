/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ProjectCard = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const MAX_LENGTH = 50;

  const getDescriptionPreview = () => {
    if (item.imagedesc.length <= MAX_LENGTH) {
      return item.imagedesc;
    }
    return showMore ? item.imagedesc : `${item.imagedesc.slice(0, MAX_LENGTH)}...`;
  };

  console.log("item.image:", item.image);
  console.log("item.image:", item.imagedesc);
console.log(item);
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-blue-600 ${
            isHeartFilled ? 'text-rose-500' : 'text-white'
          }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        <Link to={`/projects-private/${item._id}`}>
          <figure>
            <img
           
              
            src={item.imageUrl}
              alt="image"
              className="hover:scale-75 transition-all duration-200 md:h-72"
            />
          
          </figure>
        </Link>
        <div className="card-body">
          <p>
            {getDescriptionPreview()}
            {item.imagedesc.length > MAX_LENGTH && (
              <button
                onClick={toggleShowMore}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {showMore ? 'Show Less' : 'Read More'}
              </button>
            )}
          </p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold items-center">
              <span className="text-sm text-rose-600 ">❤️</span>
              {item.imagerating}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

