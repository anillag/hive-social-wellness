import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { ADD_FRIEND } from "../../utils/mutations";
import Auth from "../../utils/auth";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return (
      <p className="bg-dark text-light p-3">
        {`${username}`}, bee-friend someone!
      </p>
    );
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"}
      </h5>
      {friends.map((friend) => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/bee/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
