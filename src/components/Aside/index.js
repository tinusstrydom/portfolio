/***************/
/***  ASIDE  ***/
/***************/
import React, {Component} from 'react';
import './aside.css';
import Home from '../../components/Home';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Work from '../../components/Work';
import Contact from '../../components/Contact';
import portimg from '../../assets/portimg.jpg';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            showBtn: false,
        };
    }
    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu,
                      showBtn: !this.state.showBtn});
    }

    render(){
        const menuToggle = this.state.showMenu ? "sidebar toggled":"sidebar";
        const btnToggle = this.state.showBtn ? "sidebarBtn toggled": "sidebarBtn";
        const year = new Date().getFullYear();
        return(
            <div className="wrapper">
                <aside className={menuToggle}>
                    <div className="sidebar-header">
                        <img className="sidebar-author-img"  src={portimg} alt="Portfolio image"/>
                        <h1 className="sidebar-author-name">Tinus Strydom</h1>
                        <span className="sidebar-author-position"><a href="#">Sofware Engineer</a> in Cape Town</span>
                    </div>
                    <div className="sidebar-nav">
                        <ul>
                            <li><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
                            <li><NavLink exact to="/About" activeClassName="current">About</NavLink></li>
                            <li><NavLink exact to="/Skills" activeClassName="current">Skills</NavLink></li>
                            <li><NavLink exact to="/Experience" activeClassName="current">Experience</NavLink></li>
                            <li><NavLink exact to="/Work" activeClassName="current">Work</NavLink></li>
                            <li><NavLink exact to="/Contact" activeClassName="current">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="sidebar-footer">
                      	<ul>
                      		<li><a href="#"><FaLinkedin/></a></li>
                      		<li><a href="#"><FaGithubSquare/></a></li>
                      	</ul>
                        <p><small>Copyright &copy; {year}</small></p>
                    </div>
                </aside>
                <button type="button" className={btnToggle} onClick={this.toggleMenu} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        );
    }
}

export default Aside;
