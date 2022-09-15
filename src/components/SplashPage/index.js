import React from 'react';
import {NavLink} from 'react-router-dom';

const SplashPage = () => {

  return (
    <div name='splash' className='w-full h-screen bg-[#171718]'>
        {/* WELCOME splash */}
      <div className="flex flex-col justify-center items-center w-full h-full"> 
      <p className='text-3xl  text-[#e1e0d6]' >Honey, this app was created for you.</p>
      <h1 className='text-5xl  text-[#f0e265]'> HIVE SOCIAL WELLNESS </h1>
      <p className='text-3xl  text-[#e1e0d6]'> Run and tell your friends </p>

        {/* BUTTON */}
      <div>
      <button className="mt-7 py-3 text-2xl text-[#f0e265] border-4 border-[#f0e265] px-6 my-2 flex items-center hover:bg-[#f0e265] hover:text-[#171718]"> 
        <NavLink to="/joinpage"> JOIN </NavLink> 
      </button>
      </div>
      <div>
      <button className='text- center text-2x text-[#afaa8f] hover:text-[#f0e265]'> 
        Continue to buzz 
      </button>

      
      </div>
      </div>
      
    </div>


  )
}

export default SplashPage