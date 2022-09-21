import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { CgBee } from "react-icons/cg";


// Contact Page
const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#171718]">
      <div className="py-20 ">
      <p className="text-6xl text-center text-[#f0c965]">CONTACT US!</p>
      </div>
      
      <div className="flex justify-center  w-full ">

      <div className="flex flex-col px-10">
      <div className="text-center"> 
       
        <h2 className="text-4xl text-center text-[#f0c965]"> JOE </h2>
        <h3 className="text-lg text-[#f5f5f5]"> Project Manager, Lead Developer, Overall Great Guy</h3>
        <button className=" text-center text-6xl px-6 text-[#f0c965]">
          <a href="https://github.com/anillag">
          <div> <AiOutlineGithub /> </div> 
          </a>
        </button>
      </div> 
      </div>

      <div className="flex flex-col px-10">
      <div className="text-center"> 
       
        <h2 className="text-4xl text-center text-[#f0c965]"> PHILIP </h2>
        <h3 className="text-lg text-[#f5f5f5]"> Artistic Director, Concept Curator, Co-Designer</h3>
        <button className="text-center  text-6xl px-6 text-[#f0c965]">
          <a href="https://github.com/GelP1987">
          <div> <AiOutlineGithub /> </div> 
          </a>
        </button>
      </div> 
      </div>

      <div className="flex flex-col px-10">
        <div className="text-center"> 
      
        <h2 className="text-4xl text-center text-[#f0c965]"> CHARLOTTE </h2>
        <h3 className="text-lg text-[#f5f5f5]"> Lead Stylist, Senior Developer, Co-Designer</h3>
        <button className="text-center  text-6xl px-6 text-[#f0c965]">
          <a href="https://github.com/charlottearichard">
          <div> <AiOutlineGithub /> </div> 
          
          </a>
        </button>
        </div>
      </div> 
      </div> 

    </div>
  );
};
export default Contact;