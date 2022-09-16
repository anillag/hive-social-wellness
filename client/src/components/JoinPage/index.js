import React from "react";
import BeeButt from "../assets/beebutt.jpg";

export default function JoinPage() {
  return (
    <div className="w-full h-screen flex bg-[#171718]">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[580px] sm:max-w-[1000px] shadow-lg shadow-[#484848] bg-[#f5f5f5]">
        <div className="w-full h-[580px] hidden md:block">
          <img className="w-full h-full" src={BeeButt} alt="Bee Butt" />
        </div>

        <div className="p-5 flex flex-col justify-around">
          <form className="flex flex-col ">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#f0c965] ">
              {" "}
              WELCOME TO THE HIVE
            </h2>

            <h2 className="text-2xl font-bold text-center mb-4"> SIGN UP</h2>
            <div>
              <input
                className="border p-2 m-2"
                type="text"
                placeholder="username"
              />
              <input
                className="border p-2 m-2"
                type="password"
                placeholder="password"
              />
              <input
                className="border p-2 m-2"
                type="text"
                placeholder="email"
              />
            </div>

            <button className="mt-3 mb-4 py-1 text-lg font-bold text-[#171718] border-4 border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]">
              SIGN-UP
            </button>

            <h2 className="text-2xl font-bold text-center mb-4"> SIGN IN</h2>
            <div>
              <input
                className="border p-2 m-2"
                type="text"
                placeholder="username"
              />
              <input
                className="border p-2 m-2"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="mt-3 py-1 text-lg font-bold text-[#171718] border-4 border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]">
              SIGN-IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
