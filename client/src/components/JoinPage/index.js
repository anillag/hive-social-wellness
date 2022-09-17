import React, {useState} from "react";
import BeeButt from "../assets/beebutt.jpg";
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';


export default function JoinPage() {
  // SIGN UP 
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  // update state based on form input changes CREATEUSER/SIGNUP
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
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

  return (
    
    <div className="w-full h-screen flex bg-[#171718] ">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[580px] sm:max-w-[1000px] shadow-lg shadow-[#484848] bg-[#f5f5f5]">
        <div className="w-full h-[580px] hidden md:block">
          <img className="w-full h-full" src={BeeButt} alt="/" />
        </div>

        <div className="p-5 flex flex-col justify-around">
          <div className="p-5 flex flex-col justify-around">
            <form onSubmit={handleFormSubmit} className="flex flex-col">

              <p> JOIN THE POLLEN-NATION</p>
              <h2 className="text-2xl font-bold text-center mb-4"> SIGN-UP </h2>
        
              <div>
                
                <input
                  className="border p-2 m-2 w-full"
                  name="username"
                  type="username"
                  placeholder="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="border p-2 m-2 w-full"
                  type="email"
                  placeholder="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="border p-2 m-2 w-full"
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                
              </div>

              <button type="submit" className="mt-3 mb-4 py-1 text-lg font-bold text-center text-[#171718] border-4 rounded-3xl border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]">
                SIGN-UP
              </button>

              <p> YOU KNOW HOW WE BEE </p>
              <h2 className="text-2xl font-bold text-center mb-4"> SIGN IN</h2>
              <div>
                <input
                  className="border p-2 m-2 w-full"
                  type="text"
                  placeholder="username"
                />
                <input
                  className="border p-2 m-2 w-full"
                  type="password"
                  placeholder="password"
                />
              </div>
              <button className="mt-3 py-1 text-lg font-bold text-[#171718] border-4 rounded-3xl border-[#171718] px-6 my-2 flex items-center hover:bg-[#171718] hover:text-[#f0c965]">
              SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
