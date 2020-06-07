/********************/
/***  NAVIGATION  ***/
/********************/
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/js/src/collapse.js';
import React, {Component} from 'react';
import './nav.css';
import portimg from '../../assets/portimg.jpg';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NavLink  exact to="/" className="nav-link" activeClassName="home-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/About" className="nav-link" activeClassName="about-link">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/Skills" className="nav-link" activeClassName="skills-link">Skills</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/Experience" className="nav-link" activeClassName="experience-link">Experience</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/Work" className="nav-link" activeClassName="work-link">Work</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to="/Contact" className="nav-link" activeClassName="contact-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
