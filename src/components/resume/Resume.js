import React from 'react';
import myResume from "../../images/resume.png";
import "../../images/resume.pdf"
import './resume.css';


const Resume = () => {

    return (
        
        <div className='container-fluid' id="resume">
            <h1>MY RESUME</h1>
            <div className="row">
                <div className="col-sm-">
                    <a href="./resume.pdf" download="jamie-williams-resume" className="download-button">Download PDF</a>
                </div>
                <div className="col-sm">
                    <img src={myResume} />
                </div>
            </div>
        </div>
    );
}

export default Resume
