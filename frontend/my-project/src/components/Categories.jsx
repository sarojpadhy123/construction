import React from 'react'

const categoryItems =[
    {
        id:1,
        title: 'Commercial Building',
        description: '(We provide Best Planning For Commercial Buildings)',
        image: '../../public/homedesign10.jpg'
    },
    {
        id:2,
        title: 'Architectural Planning',
        description: '(We provide Best Planning Architecture In Bhubneswar)',
        image: '../../public/homedesign10.jpg'
    },
    {
        id:3,
        title: 'Residential Homes ',
        description: '(Explore Our Best Residential Designs In Bhubneswar)',
        image: '../../public/homedesign10.jpg'
    },
    
    // {
    //     id:4,
    //     title: 'Interior Designing',
    //     description: '(Explore Our Best Interior Designs In Bhubneswar)',
    //     image: '../../public/homedesign10.jpg'
    // },
   
]

const Categories = () => {
  return (
    <div className=' py-16 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#9dbbe6] to-100%'>
<div className='text-center'>
<p className='subtitle'>Our Categories</p>
<h2 className='title'>Popular Categories</h2>
</div>
{/* Category Cards */}
<div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-10'>
    {
        categoryItems.map((item,i) =>(
            <div key={i} className='shadow-lg rounded-md bg-blue-100 py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all'>
<div className='flex w-full mx-auto items-center justify-center'>
    <img src={item.image} alt={item.title} className='bg-blue-300 p-5 rounded-full w-28 h-28'></img>
</div>
<div className='mt-5 space-y-1'>
    <h5 className='text-center font-semibold font-serif text-xl'>{item.title}</h5>
    <p className='text-center font-medium text-sm'>{item.description}</p>
</div>
            </div>
        ))
    }
</div>
    </div>
  )
}

export default Categories