/****************/
/***  SKILLS  ***/
/****************/
import React, {Component} from 'react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import './skills.css';

class Skills extends Component{
    render(){
        return(
            <div className="container-fluid skills-section">
                <div className="container">
                    <h6>SKILLS</h6>
                    <h1>MY SPECIALITY</h1>
                    <div className="row">
                        <div className="skill col-md-3">
                            <img src={img1} alt="icon of abacus"/>
                            <h3>HTML</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "90%"}} >90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill col-md-3">
                            <img src={img2} alt=""/>
                            <h3>CSS</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "90%"}} >90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill col-sm-3 col-md-6">
                            <img src={img3} alt=""/>
                            <h3>JAVASCRIPT</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "70%"}} >80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="skill col-md-3">
                            <img src={img4} alt=""/>
                            <h3>PHP</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "80%"}} >80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill col-md-3">
                            <img src={img5} alt=""/>
                            <h3>MYSQL</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "75%"}} >75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill col-md-3">
                            <img src={img6} alt=""/>
                            <h3>JAVA</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "75%"}} >75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill col-md-3">
                            <img src={img7} alt=""/>
                            <h3>PYTHON</h3>
                            <div className="outer clearfix">
                                <div className="skill-progress">
                                    <div className="skill-progress-bar" style={{width: "75%"}} >75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
