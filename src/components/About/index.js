/***************/
/***  ABOUT  ***/
/***************/
import React, {useState} from 'react';
import './about.css';

function About() {
    return(
        <div className='container-fluid about-section'>
            <div className="container">
                    <h6>ABOUT ME</h6>
                    <h1>WHO AM I?</h1>
                    <p><span>Hi I'm Tinus Strydom</span>, the thought of persuing a career in tech was a long lost dream after entering the financial service sector.
                    But that long lost dream wasn't lost was just hidden away ,after being ask to build a company website and doing the self taught method of expanding my
                    knowledge in web development the software engineering bug final(ly) bit(excuse the pun).Believe it or not it ignited the long lost passion for
                    programming</p>
                    <br/>
                    <p>In 2016 we moved to Cape Town to be closer to the ocean and time for new adventure. I love the sea and outdoors, jogging, hiking.
                    Still dreaming of kite surfing and surfing. </p>
            </div>
        </div>
    )
}

export default About;
