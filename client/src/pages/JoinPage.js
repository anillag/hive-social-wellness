import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
//import BeeButt from "../assets/beebutt.jpg";
import BeeYellow from "../assets/beeyellow.jpg";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";

export default function JoinPage() {
  // SIGN UP
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [singupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate() 

  //Log-in & Error
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  // update state based on form input changes CREATEUSER/SIGNUP
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;

    setSignupForm({
      ...singupForm,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // MADE USER SIGN IN
  const handleFormSubmit2 = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...singupForm },
      });

      Auth.login(data.login.token);
      if (data.login.token){
        navigate("/the-hive")
      }
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setSignupForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen flex bg-[#171718] ">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto w-full h-[680px] sm:max-w-[1000px] shadow-2xl shadow-[#585757] bg-[#f5f5f5]">
        <div className="w-full h-[680px] hidden md:block">
          <img className="w-full h-full" src={BeeYellow} alt="/" />
        </div>

        <div className="p-5 flex flex-col justify-around">
          <div className="p-5 flex flex-col justify-around">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <p className="text-center  text-[#7e7e7e] ">
                {" "}
                JOIN THE POLLEN-NATION
              </p>
              <h2 className="text-2xl font-bold text-center mb-4"> SIGN-UP </h2>

              <div>
                <input
                  className="form-input border p-2 m-2 w-full"
                  name="username"
                  type="text"
                  placeholder="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input border p-2 m-2 w-full"
                  placeholder="Your email"
                  name="email"
                  type="text"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input border p-2 m-2 w-full"
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="mt-3 mb-4 py-1 text-lg font-bold text-center text-[#171718] border-4 rounded-3xl border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]"
              >
                SIGN-UP
              </button>
            </form>

            <form onSubmit={handleFormSubmit2} className="flex flex-col">
              <p className="text-center text-[#7e7e7e]">
                {" "}
                YOU KNOW HOW WE BEE{" "}
              </p>

              <h2 className="text-2xl font-bold text-center mb-4"> SIGN IN</h2>
              <div>
                <input
                  className="form-input border p-2 m-2 w-full"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={singupForm.email}
                  onChange={handleChange2}
                />
                <input
                  className="form-input border p-2 m-2 w-full"
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  value={singupForm.password}
                  onChange={handleChange2}
                />
              </div>
              <button
                type="submit"
                className="mt-3 py-1 text-lg font-bold text-[#171718] border-4 rounded-3xl border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
