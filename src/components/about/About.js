import "./about.css";
import AboutMe from "../../images/jamie-about-me-resized.png";


const About = () => {
    return (
        <div className="container-fluid">
            <div className="a" id="about">
                <div className="row">
                    <div className="col-md-6">                    
                        <div className="a-left">
                            <div className="a-card bg"></div>
                            <div className="a-card">
                            <img src={AboutMe} alt="" className="a-img" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                        <div className="a-right">
                            <h1 className="a-title">About Me</h1>
                            <div className="a-sub">
                                "We're here to put a dent in the universe. Otherwise why else even be here?" - Steve Jobs
                            </div>
                            <div className="a-desc">
                             - In 2014, I started a non-profit organization to donate teddy bears to children in the hospital and needed a website. 
                                I decided to learn how to build a website on my own and discovered then my passion for web development. Several years later, 
                                I built a website to house a travel blog for my cross-country travels. The following year, I created a website to turn my then physical 
                                therapy career into a way of helping the elderly stay safe at home and reduce their fall risk. 
                                <br></br>
                             - I am hardworking, reliable, and pride myself on my organizational and communicational skills. I am very goal-oriented and excel in working with a team to achieve a successful outcome while meeting deadlines.
                             <br></br>
                             - I would love an opportunity to tell you more about myself and answer any questions that you may have. I am actively looking for a web development position and would appreciate the opportunity to connect with you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

