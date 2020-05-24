/***************/
/***  ASIDE  ***/
/***************/
import React, {Component} from "react";
import "./aside.css";
import portimg from "../../assets/portimg.jpg";


class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            showHam: false,
        };
    }
    
    ToggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu,
                       showHam: !this.state.showHam});
    }
    
    render(){
        const menuVis = this.state.showMenu ? "sidebar":"sidebar active";
        const btnVis = this.state.showHam ? "navbar-btn sidebarCollapse":"navbar-btn sidebarCollapse active";

        return(
            <>
           <div className="wrapper">
                <nav className={menuVis}>
                    <div className="sidebar-header">
                        <img className="author-img"  src={portimg} alt="Portfolio image"/>
                        <h1 className=""><a href="index.html">Tinus Strydom</a></h1>
                        <span className=""><a href="#">Aspiring Software Engineer</a> in Cape Town, South Africa</span>
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div id="content">
                    <button type="button" className={btnVis} onClick={this.ToggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default Aside;
    
