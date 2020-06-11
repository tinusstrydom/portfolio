/***************/
/***  ABOUT  ***/
/***************/
import React from 'react';
import './about.css';

function About() {
    return(
        <div className='container-fluid about-section'>
            <div className="container">
                    <h6>ABOUT ME</h6>
                    <h1>WHO AM I?</h1>
                    <p><h5>Hi, I'm Tinus Strydom,</h5> I am an aspiring software engineer currently based in Cape Town. 
                        After being asked to build a company website and doing the self-taught method of expanding my
                        knowledge in web development the software engineering bug final(ly) bit(excuse the pun).
                    </p>
                    <p>I love developing and programming, any random thing from websites through to software. 
                        Anything that can make life simpler or streamline a process. Fun for me to scratch my head over problems 
                        and getting it to work at the end, nothing beats the job satisfaction.
                    </p>
                    <p>In 2016 we moved to Cape Town to be closer to the ocean and time for a new adventure. 
                        I love the sea, sand, and sun, anything outdoors hiking, jogging, picnicking. 
                        Still dreaming of doing kite surfing or surfing.
                    </p> 
            </div>
        </div>
    )
}

export default About;
