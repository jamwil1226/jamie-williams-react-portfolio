import "./intro.css";
import Me from "../../images/jamie-headshot.png";
import React from "react";

// Intro section with scrolling feature and image
const Intro = () => {
    return (
        <div className="container-fluid" id="intro">
            <div className="row">
                <div className="col-md-6">
                    <div className="h-left">
                        <div className="h-left-wrapper">
                            <h2 className="h-intro">&lt;Hello World!&gt; I'm</h2>
                            <h1 className="h-name">Jamie Williams</h1>
                            <div className="h-title">
                                <div className="h-title-wrapper">
                                    <div className="h-title-item">Web Developer</div>
                                    <div className="h-title-item">UI/UX Designer</div>
                                    <div className="h-title-item">Photographer</div>
                                    <div className="h-title-item">Writer</div>
                                    <div className="h-title-item">Content Creator</div>
                                </div>
                            </div>
                            <div className="h-desc">
                                <h3>Combining my love for design and technology with my passion for photograpy, writing, and content creating - you can count on me for all of your business needs!</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-right">
                        <div className="h-bg"></div>
                        <img src={Me} alt="" className="h-img" />
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Intro;
