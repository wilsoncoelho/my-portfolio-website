import React from "react";
import logo from "../wclogo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

      <a className="navbar-brand" href="www.wilsoncoelho.com">
       <img className="logo" src={logo}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <FontAwesomeIcon style={{color:'#fff'}} icon={faBars}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Me
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#">
              Experience <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Portfolio <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Blog <span className="sr-only">(current)</span>
            </a>
          </li>          
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Contact <span className="sr-only">(current)</span>
            </a>
          </li>
          
        </ul>
      </div>
          </div>
    </nav>
  );
};

export default Navbar;
