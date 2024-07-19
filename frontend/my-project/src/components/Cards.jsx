/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaHeart} from "react-icons/fa"

const Cards = ({item}) => {
    const [isHeartFillted,setIsHeartFillted] = useState(false);
    const handleHeartClick =()=>{
        setIsHeartFillted(!isHeartFillted)
    }
  return (
    <div className='section-container'>
        <div className="card w-80  shadow-xl relative bg-blue-900 mt-5 mb-8 ">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-blue-600 ${isHeartFillted?"text-rose-500":"text-white"}`}
            onClick={handleHeartClick}>
<FaHeart className="h-5 w-5 cursor-pointer"/>
            </div>
            <Link to={`/menu/${item.id}`}>
  <figure className='mt-5'><img src={item.image} alt="image" 
  className='hover:scale-110 transition-all duration-200 md:h-72'
  /></figure>
            
            </Link>
  <div className="card-body">
    <h2 className="card-title text-yellow-100">{item.name}</h2>
    <p className='text-yellow-200'>{item.recipe}</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className="font-semibold items-center text-white"><span className="text-sm text-rose-600">❤️</span>{item.rating}</h5>
     <Link to="/contact"> <button className="btn bg-blue-800 text-white">Contact Now</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards