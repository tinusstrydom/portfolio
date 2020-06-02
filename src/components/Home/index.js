/**************/
/***  HOME  ***/
/**************/
import React, {Component} from 'react';
import Laptop1 from '../../assets/laptop1.jpg';
import Laptop2 from '../../assets/laptop2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" ></div>
                </div>
                <div className='container-fluid' >
                    <Carousel interval={5000} keyboard={false} pauseOnHover={true}>
                        <Carousel.Item style={{'height':"100vh"}}  >
                            <img style={{'height':"100vh"}} className="d-block w-100" src={Laptop1}  />
                            <Carousel.Caption>
                                <h1> Hello, My name is Tinus Strydom</h1>
                                <h3>I am an aspiring Software Engineer</h3>
                                <p>Welcome to my Portfolio which shows samples of my work!</p>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{'height':"600px"}}>
                            <img style={{'height':"600px"}} className="d-block w-100" src={Laptop2}    />
                            <Carousel.Caption>
                                <h3>Second Demo</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Home;
