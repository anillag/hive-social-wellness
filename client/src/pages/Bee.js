import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import FriendList from "../components/FriendList";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import Auth from "../utils/auth";

const Bee = (props) => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    variables: { username: username },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    navigate(`/bee/${Auth.getProfile().data.username}`);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h4>You need to be logged in!</h4>;
  }

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
    <div>
      <div>
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {username ? `${user.username}'s` : "your"} profile.
        </h2>
        <div className="w-full justify-center">
          {username && (
            <button
              className="mt-7 py-3 text-lg font-bold text-[#f0c965] border-4 rounded-2xl border-[#f0c965] px-6 my-2 flex items-center hover:bg-[#f0c965] hover:text-[#3e3e40]"
              onClick={handleClick}
            >
              Add Friend
            </button>
          )}
        </div>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Bee;
