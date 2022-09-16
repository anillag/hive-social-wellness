import React from 'react';
import {NavLink} from 'react-router-dom';
import {BiHive} from 'react-icons/bi'

const SplashPage = () => {

  return (
    <div name='splash' className='w-full h-screen bg-[#171718]'>
        {/* WELCOME splash */}
      <div className="flex flex-col justify-center items-center w-full h-full"> 
      <button className='text-9xl px-6 py-4 text-[#f0c965]'> 
        <a href='/'>  <BiHive /> </a></button>
      <p className='text-3xl  text-[#e1e0d6]' >Honey, this app was created for you.</p>
      <h1 className='text-5xl  text-[#f0c965]'> HIVE SOCIAL WELLNESS </h1>
      <p className='text-3xl  text-[#e1e0d6]'> Run and tell your friends </p>

        {/* BUTTON */}
      <div>
      <button className="mt-7 py-3 text-2xl text-[#f0c965] border-4 rounded-2xl border-[#f0c965] px-6 my-2 flex items-center hover:bg-[#f0c965] hover:text-[#171718]"> 
        <NavLink to="/joinpage"> JOIN </NavLink> 
      </button>
      </div>
      </div>
      
    </div>


  )
}

export default SplashPage