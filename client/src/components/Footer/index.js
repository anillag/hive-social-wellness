import React from 'react'
import {AiOutlineLink, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-[#171718] '> 
        <div className='text-center py-6'> 
        <button className='text-5xl px-6 text-[#f0c965]'> 
        <a href='/'>  <AiOutlineLink /> </a></button>

        <button className='text-5xl px-6 text-[#f0c965]'> 
        <a href='/'>  <AiOutlineGithub /> </a></button>

        <button className='text-5xl px-6 text-[#f0c965]'> 
        <a href='/'>  <AiOutlineMail /> </a></button>

        <button className='text-5xl px-6 text-[#f0c965]'> 
        <a href='/'>  <RiMoneyDollarCircleFill /> </a></button>
        </div>
    </div>
  )
}

export default Footer