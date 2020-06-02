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
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Skills">Skills</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Experience">Experience</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Work">Work</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
