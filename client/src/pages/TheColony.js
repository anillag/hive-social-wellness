import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import Auth from "../utils/auth";

import FriendList from "../components/FriendList";
import {BsPersonCircle} from 'react-icons/bs'

// import ThoughtList from "../components/ThoughtList";

const TheColony = (props) => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/bee:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return <h4>You need to be logged in!</h4>;
  // }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full h-screen flex bg-[#171718] ">

    <div className=" m-auto w-full h-[680px] sm:max-w-[1000px] shadow-2xl shadow-[#585757] bg-[#f5f5f5] rounded-3xl">
            <div className="py-10 flex justify-center">
            <div className="text-9xl text-[#f0c965]"> <BsPersonCircle /> </div>
           </div>
           <div> 
           <p className="text-4xl text-center text-[#f0c965]"> {`${user.username}`} </p> 
           </div>
    
            
            
    
          <div className="flex justify-center mt-10"> 
          
          <div className=" flex flex-col px-20"> 
            <h2 className="text-3xl pb-3 text-center text-[#5f5f5f]"> FRIENDS </h2>
            <p className="text-lg text-[#5f5f5f] text-center"> <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          /></p>
    
            <button className="mt-7 py-3 text-lg font-bold text-[#f0c965] border-4 rounded-2xl border-[#f0c965] px-6 my-2 flex items-center hover:bg-[#f0c965] hover:text-[#3e3e40]"> FIND FRIENDS </button>
          {userParam && (
              <button className="btn ml-auto text-3xl  text-[#e1e0d6]"  onClick={handleClick}>
                Add Friend
              </button>
            )}
          </div>
    
        
    
        </div>
        </div>
        </div>
  );
};

export default TheColony;
