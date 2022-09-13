import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/TheBuzz">The Buzz</Link>
          </li>
          <li>
            <Link to="/TheBusyBee">The Busy Bee</Link>
          </li>
          <li>
            <Link to="/TheSwarm">The Swarm</Link>
          </li>
          <li>
            <Link to="/TheColony">The Colony</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
