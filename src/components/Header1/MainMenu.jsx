import React from "react";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainMenu({ hanldeOffset }) {
  return (
    <div className="main-menu-area">
      <div className="row align-center items-center">
        {/* Menu Section */}
        <div className="col-12 col-lg-10">
          <div className="main-menu">
            <ul className="flex items-center space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/team">team</Link>
                  </li>
                  <li>
                    <Link to="/faq">faq</Link>
                  </li>
                  <li>
                    <Link to="/projects">projects</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Icons Section */}
        <div className="col-12 col-lg-2 flex items-center justify-end icon-wrapper">
          <button
            type="button"
            onClick={hanldeOffset}
            className="side-menu-toggle"
          >
            <FaTh size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
