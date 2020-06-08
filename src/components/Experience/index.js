/********************/
/***  EXPERIENCE  ***/
/********************/
import React from 'react';
import './experience.css';

function Experience() {
    return(
        <div className="container-fluid experience-section">
            <div className="container">
                <h6>EXPERIENCE</h6>
                <h1>WORK EXPERIENCE</h1>

                    <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center bottom">
                            <div className="circle">5</div>
                        </div>
                        <div className="col-6">
                            <h4>Loans-Inc/Mr CashLoans</h4>
                            <h6>Manager & Owner</h6>
                            <p>2014-Present</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end how-it-works">
                        <div className="col-6 text-right">
                            <h4>Picoti Financial Solutions</h4>
                            <h6>Manager & Owner</h6>
                            <p>2003-2014</p>
                        </div>
                        <div className="col-2 text-center full">
                            <div className="circle">4</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center fulls">
                            <div className="circle">3</div>
                        </div>
                        <div className="col-6">
                            <h4>Rembrandt Sarova Hotel</h4>
                            <h6>Night Auditor</h6>
                            <p>2002-2003</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end how-it-works">
                        <div className="col-6 text-right">
                            <h4>Thistle Piccadilly Hotel</h4>
                            <h6>Night Auditor</h6>
                            <p>2001-2002</p>
                        </div>
                        <div className="col-2 text-center full">
                            <div className="circle">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr/>
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center top">
                            <div className="circle">1</div>
                        </div>
                        <div className="col-6">
                            <h4>Mr Cash</h4>
                            <h6>Consultant</h6>
                            <p>1997-2000</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Experience;
