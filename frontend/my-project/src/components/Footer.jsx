import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 py-10 px-4 text-base-content bg-slate-500">
        <aside>
        <img src="1701821819782-163599436962598883_1.gif" className="w-24 h-24"></img>
          <p className="my-3 md:w-40  text-white">
          Krishnaraj Engineering and Enterprises. All Rights Reserved Metaveos Technologies Pvt. Ltd.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black ">Useful links</header>
          <Link to='/about' className="link link-hover text-white">About us</Link>
        <Link to='/contact' className="link link-hover text-white">Contact</Link>
        <Link to='/private' className="link link-hover text-white">Projects</Link>
        <Link to='/service' className="link link-hover text-white">Services</Link>
        </nav>
        <nav>
          <header className="footer-title text-black">Main Menu</header>
          <Link to='/' className="link link-hover text-white">Home</Link>
        <Link to='/standard' className="link link-hover text-white">Pricing</Link>
        <Link to='/contact' className="link link-hover text-white">Contact</Link>
        <Link to='/login' className="link link-hover text-white">Dashboard</Link>
        </nav>
        <nav>
          <header className="footer-title text-black">Contact Us</header>
          <a className="link link-hover  text-white">Metaveos@email.com</a>
          <a className="link link-hover  text-white">+91-9438689012</a>

        <div className="flex flex-row gap-5">
        <Link to="https://www.facebook.com/Krishnarajengg">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current bg-blue-500"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          </Link>
          <Link to="https://www.youtube.com/@keeconstructiongroup6824">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current bg-rose-500"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          </Link>
        </div>
        </nav>
      </footer>
        <hr />
      <footer className="footer items-center xl:px-24 px-4 py-4 mt-2 bg-slate-600">
        <aside className="items-center grid-flow-col text-cyan-50">
         <Link to="https://metaveostechnologies.com/" target="_blank" rel="noopener noreferrer"> <p className="hover:text-blue-500"> © Metaveos Technologies.com 2023 - All right reserved</p></Link>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div>
  <h3><FontAwesomeIcon icon={faClock}  className="bg-yellow-300 text-rose-400 w-8 h-8"/> <p className="text-white text-lg">MON-SAT 9:30AM-7:00PM</p> </h3>
 
</div>
<div className="flex flex-col justify-center items-center align-middle">
  <h3><FontAwesomeIcon icon={faMobileAlt}  className="bg-blue-300 text-blue-800 w-8 h-8 " />
  <p className="text-white text-lg">+91-9438689012</p></h3>

</div>
{/* <div>
  <h3><FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 bg-cyan-200 text-slate-800" />
  
  <span>
  <p className="text-white text-lg">krishnaraj.e.engg@gmail.com</p>
  </span>
  </h3>
  
</div> */}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;