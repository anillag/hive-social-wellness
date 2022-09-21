import React from "react";
import { Link } from "react-router-dom";

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
      <div className="flex items-center">
        {friends.map((friend) => (
          <button
            className="mt-7 py-3 text-lg font-bold text-[#f0c965] border-4 rounded-2xl border-[#f0c965] px-6 my-2 flex items-center hover:bg-[#f0c965] hover:text-[#3e3e40]"
            key={friend._id}
          >
            <Link to={`/bee/${friend.username}`}>{friend.username}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
