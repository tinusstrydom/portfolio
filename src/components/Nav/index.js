/********************/
/***  NAVIGATION  ***/
/********************/
import React from 'react';
import './nav.css';

function Nav() {
    return(
        <nav>
            <h2>Tinus Strydom</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default Nav;