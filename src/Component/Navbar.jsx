import PropTypes from "prop-types";

import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

       


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.link}
              </a>
            </li>
            
          </ul>
          
          
          <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
             {props.mode} mode on
          </label>
        </div>


        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "weite here your title",
  link: "write your link about",
  home: "write your home",
};

Navbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  link: PropTypes.string.isRequired,
  home: PropTypes.string,
};
