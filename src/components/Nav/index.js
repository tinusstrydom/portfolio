/********************/
/***  NAVIGATION  ***/
/********************/
import React, {Component} from 'react';
import './nav.css';
import Home from '../../components/Home';
import About from '../../components/About';
import portimg from '../../assets/portimg.jpg';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Route, Switch, Link} from 'react-router-dom';

class Nav extends Component {
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
        const menuVis = this.state.showMenu ? "d-flex wrapper":"d-flex wrapper toggled";
        const btnVis = this.state.showBtn ? "sidebarBtn":"sidebarBtn active";
        const year = new Date().getFullYear();
        return(
             <div class={menuVis}>
                <div class="sidebar-wrapper">
                    <img className="sidebar-author-img"  src={portimg} alt="Portfolio image"/>
                    <h1 className="sidebar-author-name">Tinus Strydom</h1>
                    <span class="sider-author-position"><a href="#">Sofware Engineer</a> in Cape Town</span>
                    <ul>
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/About">About</Link></li>
                        <li className="nav-item"><Link to="/">Skills</Link></li>
                        <li className="nav-item"><Link to="/About">Experience</Link></li>
                        <li className="nav-item"><Link to="/">Work</Link></li>
                        <li className="nav-item"><Link to="/About">Contact</Link></li>
                    </ul>
                    <div class="sidebar-footer">
              				  <ul>
              					    <li><a href="#"><{i class="fab fa-linkedin"}></i></a></li>
              					    <li><a href="#"><i class="icon-twitter2"></i></a></li>
              					    <li><a href="#"><i class="icon-instagram"></i></a></li>
              					    <li><a href="#"><i class="icon-linkedin2"></i></a></li>
              				  </ul>
                        <p><small>Copyright &copy; {year}</small></p>
              			</div>




                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg border-bottom fixed top bg-dark">
                        <button type="button" className={btnVis} onClick={this.toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About">About</Link>
                                </li>
                            </ul>
                        </div>
                     </nav>
                    <div className="main container-fluid">
                         <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/About" component={About}/>
                        </Switch>
                        <h1 className="mt-4">Simple Sidebar</h1>
                        <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
