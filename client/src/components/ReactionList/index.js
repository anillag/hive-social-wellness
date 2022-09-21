import React from "react";
import { Link } from "react-router-dom";

const ReactionList = ({ reactions }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        {reactions &&
          reactions.map((reaction) => (
            <p
              className="card mb-3 buzzP rounded-3xl max-w-lg grid-container"
              key={reaction._id}
            >
              {reaction.reactionBody} //{" "}
              <Link
                to={`/bee/${reaction.username}`}
                style={{ fontWeight: 700 }}
              >
                {reaction.username} on {reaction.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReactionList;
