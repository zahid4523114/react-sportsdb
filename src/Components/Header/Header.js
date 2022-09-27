import React from "react";
import "./Header.css";
import logo from "../../logo32.png";

const Header = () => {
  return (
    <nav className="bg-black container-fluid  p-4 d-flex flex-lg-row flex-md-column justify-content-between align-items-center">
      <div>
        <img
          className="w-50 d-block mx-lg-0 mx-md-auto mb-md-3 "
          src={logo}
          alt=""
        />
      </div>
      <div>
        <ul className="d-flex flex-row  list-unstyled">
          <li className="me-5">
            <a
              className="text-decoration-none text-white fs-5 link-primary"
              href="./"
            >
              Home
            </a>
          </li>
          <li className="me-5">
            <a
              className="text-decoration-none text-white fs-5 link-primary"
              href="./"
            >
              Sports
            </a>
          </li>
          <li className="me-5">
            <a
              className="text-decoration-none text-white fs-5 link-primary"
              href="./"
            >
              About
            </a>
          </li>
          <li className="me-5">
            <a
              className="text-decoration-none text-white fs-5 link-primary"
              href="./"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
