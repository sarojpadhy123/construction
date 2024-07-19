import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const [isSticky,setSticky] =useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    // const {user}=useContext(AuthContext);

    const handleDropdownClick = (dropdown) => {
      setOpenDropdown((prevState) => (prevState === dropdown ? null : dropdown));
    };




    useEffect(()=>{
const handleScroll =()=>{
    const offset =window.scrollY;
    if (offset>0) {
        setSticky(true);
    } else {
        setSticky(false);
        
    }
};
window.addEventListener('scroll', handleScroll);
return ()=>{
    window.addEventListener('scroll', handleScroll);
}
    },[])
    const navItems=(
      <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About Us</Link></li>
      <li><Link to='/service'>Services</Link></li>
      <li tabIndex={0}>
        <details
          open={openDropdown === 'projects'}
          onClick={() => handleDropdownClick('projects')}
        >
          <summary>Projects</summary>
          <ul className="p-2">
            <li><Link to='/realestate'>Real Estate</Link></li>
            <li><Link to='/govt'>Government</Link></li>
            <li><Link to='/private'>Private</Link></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details
          open={openDropdown === 'pricing'}
          onClick={() => handleDropdownClick('pricing')}
        >
          <summary>Pricing</summary>
          <ul className="p-2">
            <li className='bg-blue-200 m-2'><Link to='/standard'>Standard Finishing</Link></li>
            <li className='bg-blue-200 m-2'><Link to='/advance'>Advance Finishing</Link></li>
            <li className='bg-blue-200 m-2'><Link to='/premium'>Premium Finishing</Link></li>
            <li className='bg-rose-200 m-2'><Link to='/standardflooring'>Standard Flooring</Link></li>
            <li className='bg-rose-200 m-2'><Link to='/advancedflooring'>Advanced Flooring</Link></li>
            <li className='bg-rose-200 m-2'><Link to='/premiumflooring'>Premium Flooring</Link></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details
        open={openDropdown==='gallery'}
        onClick={()=>handleDropdownClick('gallery')}
        >
          <summary>Gallery</summary>
          <ul className="p-2">
            <li><Link to='/photo'>Photos</Link></li>
            <li><Link to='/video'>Videos</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to='/contact'>Contact Us</Link></li>
      {/* <li><Link to='/admin/dashboard'>dashboard</Link></li> */}
    </>
    
    );
  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
<div className={`navbar xl:px-8 ${isSticky?"shadow-md bg-blue-100 transition-all duration-300 ease-in-out":""}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" to='/'>KE&E<span className="text-blue-700">Construction</span></Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navItems}
    </ul>
  </div>
  {/* <div className='text-rose-700'>
  {

    user? user.email :""
  }
  </div> */}
<div className="navbar-end">
  <a
    href="https://api.whatsapp.com/send?phone=9438689012" 
    className="btn bg-blue-700 text-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Now
  </a>
</div>
</div>
    </header>
  )
}

export default Navbar