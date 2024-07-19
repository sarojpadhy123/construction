import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from 'autoprefixer';
import Cards from '../../components/Cards';

const SimpleNextArrow =(props)=>{
    // eslint-disable-next-line react/prop-types
    const {className,style,onClick} = props;
    return (
        <div className={className} style={{...style,display:"none",background:"red"}}
        onClick={onClick}
        >
            Next
            </div>
    );
};
const SimplePrevArrow =(props)=>{
    // eslint-disable-next-line react/prop-types
    const {className,style,onClick} = props;
    return (
        <div className={className} style={{...style,display:"none",background:"green"}}
        onClick={onClick}
        >
            Prev
            </div>
    );
}

const Specialisation = () => {
    const [products, setProducts] = useState([]);
    const slider = React.useRef(null);
    useEffect(()=>{
 fetch("/menu.json").then(res=>res.json()).then(data=>{
    // console.log(data);
    const specials = data.filter((item)=>item.category ==="popular")
    // console.log(specials);
    setProducts(specials);
 })
    },[])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1

            }
          }
        ],
        nextArrow:<SimpleNextArrow/>,
        prevArrow:<SimplePrevArrow/>
      };
    
  return (
    <div className='section-container  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100%'>
        <div className='text-left'>
            <p className='subtitle'>Special Works</p>
            <h2 className='title md:w-80'>Our Standout Works</h2>
        </div>
        <div>
            <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
            <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
        </div>
        {/* slider */}
        <Slider ref={slider}{...settings} className='overflow-hidden mt-10 space-x-5' >
          {
            products.map((item,i)=>(
                <Cards key={i} item={item}/>
            ))
          }
      
        </Slider>
    </div>
  )
}

export default Specialisation