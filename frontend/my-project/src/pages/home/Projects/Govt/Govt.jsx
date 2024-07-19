import React from 'react'
import  { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from 'autoprefixer';
// import Cards from '../../../../components/Cards';
import ProjectCard from '../../../../components/ProjectCard';
import ProjectGovtCard from '../../../../components/ProjectGovtCard';
// import Cards from '';


// const BASE_URL= "http://localhost:8000"
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

const Govt = () => {
    const [products, setProducts] = useState([]);
    const slider = React.useRef(null);
    
    useEffect(()=>{
 fetch(`http://localhost:8000/all-govt-projects`).then(res=>res.json()).then((data)=>{setProducts(data);
    // console.log(data);
    // const specials = data.filter((item)=>item.category ==="ongoing")
    // console.log(specials);
    // setProducts(specials);



 }).catch((err) => {
  console.log('Error fetching data:',err);
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
    <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100% py-12 .section-container mt-16 p-12'>
          <div className='section-container my-20'>
        <div className='text-left'>
            <p className='subtitle'>Government Projects</p>
            <h2 className='title md:w-80'>ONGOING PROJECTS</h2>
        </div>
        <div>
            <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
            <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
        </div>
        {/* slider */}
        <Slider ref={slider}{...settings} className='overflow-hidden mt-10 space-x-5' >
          {
            products.map((item,i)=>(
                <ProjectGovtCard key={i} item={item}/>
            ))
          }
      
        </Slider>
    </div>
    {/* Upcoming Projects */}
    <div className='section-container my-20'>
        <div className='text-left'>
            <p className='subtitle'>Government Projects</p>
            <h2 className='title md:w-80'>UPCOMING PROJECTS</h2>
        </div>
        <div>
            <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
            <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
        </div>
        {/* slider */}
        <Slider ref={slider}{...settings} className='overflow-hidden mt-10 space-x-5' >
          {
            products.map((item,i)=>(
                <ProjectGovtCard key={i} item={item}/>
            ))
          }
      
        </Slider>
    </div>
    {/* Completed Projects */}
    <div className='section-container my-20'>
        <div className='text-left'>
            <p className='subtitle'>Government Projects</p>
            <h2 className='title md:w-80'>COMPLETED PROJECTS</h2>
        </div>
        <div>
            <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
            <button onClick={()=>slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
        </div>
        {/* slider */}
        <Slider ref={slider}{...settings} className='overflow-hidden mt-10 space-x-5' >
          {
            products.map((item,i)=>(
                <ProjectGovtCard key={i} item={item}/>
            ))
          }
      
        </Slider>
    </div>

    </div>
  )
}

export default Govt
