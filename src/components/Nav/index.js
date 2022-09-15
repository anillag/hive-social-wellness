import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <section class="top-nav">
          <div>Logo</div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>
              <Link to="/TheHive">The Hive</Link>
            </li>
            <li>
              <Link to="/TheBuzz">The Buzz</Link>
            </li>
            <li>
              <Link to="/TheBusyBee">The Busy Bee</Link>
            </li>
            <li>
              <Link to="/TheColony">The Colony</Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
