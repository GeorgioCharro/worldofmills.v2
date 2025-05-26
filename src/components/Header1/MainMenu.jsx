import React from "react";
import { FaTh } from "react-icons/fa";
import Link from "next/link";

function MainMenu({ hanldeOffset }) {
  return (
    <div className="main-menu-area">
      <div className="row align-center items-center">
        {/* Menu Section */}
        <div className="col-12 col-lg-10">
          <div className="main-menu">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a>Pages</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/team" legacyBehavior>
                      <a>team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" legacyBehavior>
                      <a>faq</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" legacyBehavior>
                      <a>projects</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a>Contact</a>
                </Link>
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
