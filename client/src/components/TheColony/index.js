// import React from "react";

// const TheColony = () => {
//   return <div>TheColony content goes here</div>;
// };

// export default TheColony;

import React from "react";
import { Link } from "react-router-dom";

const TheColony = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return (
      <p className="bg-dark text-light p-3">{username}, bee-friend someone!</p>
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

export default TheColony;
