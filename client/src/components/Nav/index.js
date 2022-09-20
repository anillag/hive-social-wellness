import React from "react";
import { Link } from "react-router-dom";
import { BiHive } from "react-icons/bi";
import Auth from "../../utils/auth";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <nav>
        <section className="top-nav">
          <div className="text-5xl px-6 py-3 text-[#f5f5f5]">
            <Link to="/join">
              <BiHive />
            </Link>
            <span>
              {Auth.loggedIn() ? (
                <>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/join">Join</Link>
                </>
              )}
            </span>
          </div>

          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link to="/the-hive">The Hive</Link>
            </li>
            <li>
              <Link to="/the-buzz">The Buzz</Link>
            </li>
            <li>
              <Link to="/the-busy-bee">The Busy Bee</Link>
            </li>
            <li>
              <Link to="/the-colony">The Colony</Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
