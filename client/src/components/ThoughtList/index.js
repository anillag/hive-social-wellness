import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../../utils/queries";

const ThoughtList = ({ title }) => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  if (!thoughts.length) {
    return <h3>No Buzzings Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div
            key={thought._id}
            className="card mb-3 buzzP rounded-3xl max-w-lg grid-container"
          >
            <div className="userNameDiv">
              {" "}
              <p className="card-header">
                <Link
                  to={`/bee/${thought.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-light"
                >
                  {thought.username}
                </Link>
                <br />
              </p>
            </div>
            <div className="dateDiv">{thought.createdAt}</div>
            <div className="card-body buzzDiv">
              <Link to={`/buzzings/${thought._id}`}>
                <p>{thought.thoughtText}</p>
              </Link>
            </div>
            <div className="reactionDiv">
              <Link to={`/buzzings/${thought._id}`}>
                <p className="mb-0">Reactions: {thought.reactionCount}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
