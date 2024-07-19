import { Button } from 'flowbite-react'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut}=useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();

    const from = location.state?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
            alert("Logout Successful");
            navigate(from,{replace:true});
        }).catch((err) => {
console.log(err.message);
        })
    }
  return (
    <div className='h-screen bg-teal-700 flex items-center justify-center'>
        <p className='text-white font-bold gap-2'> Click Here to </p>
      <Button className='bg-rose-700' onClick={handleLogout}>Logout</Button>
          </div>
  )
}

export default Logout
