/**************/
/***  HOME  ***/
/**************/
import React, {Component} from 'react';
import Laptop1 from '../../assets/laptop1.jpg';
import Laptop2 from '../../assets/laptop2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <Carousel interval={5000} keyboard={false} pauseOnHover={true}>
                        <Carousel.Item style={{'height':"100vh" }}  >
                            <img style={{'height':"100vh"}} className="d-block w-100" src={Laptop1}  />
                            <Carousel.Caption>
                                <h1> Hello, My name is Tinus Strydom</h1>
                                <h3>I am an aspiring Software Engineer</h3>
                                <p>Welcome to my Portfolio which shows samples of my work!</p>
                                <button><a href="#">DOWNLOAD CV</a></button>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{'height':"600px"}}>
                            <img style={{'height':"600px"}} className="d-block w-100" src={Laptop2}    />
                            <Carousel.Caption>
                                <h1>View On Linkedin</h1>
                                <p>For more info of me</p>
                                <button><a href="#"><FaLinkedin/> Linkedin</a></button>
                                <h1>View Git Hub repositories</h1>
                                <p>For more info of my work</p>
                                <button><a href="#"><FaGithubSquare/> Github</a></button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Home;
