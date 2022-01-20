import React from "react";
import "./nav.css";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                    <a className="navbar-brand" href="/intro">Jamie Williams Portfolio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link" href='#about'>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resume">Resume</a>
                            </li> */}
                            {/* <li>
            <Link to="/intro">Intro</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
                        </ul>
                    </div>
            </nav>
        </header>
    )
}

export default Nav

