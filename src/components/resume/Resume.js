import React from 'react';
import myResume from "../../images/resume.png";
import './resume.css';
import Pdf from "../../public/resume.pdf";

// Resume with PDF download
const Resume = () => {

    return (
        
        <div className="container-fluid" id="resume">
            <h1>MY RESUME</h1>
            <div className="row">
                <div className="col" id="proficiencies">
                    <h2>List of Proficiencies</h2>
                    <ul>
                        GitHub
                    </ul>
                    <ul>
                        HTML
                    </ul>
                    <ul>
                        CSS
                    </ul>
                    <ul>
                        JavaScript
                    </ul>
                    <ul>
                        Bootstrap
                    </ul>
                    <ul>
                        Server-Side APIs
                    </ul>
                    <ul>
                        Node.js
                    </ul>
                    <ul>
                        Express.js
                    </ul>
                    <ul>
                        SQL
                    </ul>
                    <ul>
                        NoSQL
                    </ul>
                    <ul>
                        React
                    </ul>
                    <ul>
                        MERN
                    </ul>
                </div>
                
                <div className="col">
                <a href={Pdf} download="jamie-williams-resume" className="download-button">Download PDF</a>
                    <img src={myResume} alt="resume" />
                </div>
            </div>
        </div>
    );
}

export default Resume
