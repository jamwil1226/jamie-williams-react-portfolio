import "./project.css";
import React from "react";
import originalPortfolio from "../../images/original-portfolio.png";
import noteTaker from "../../images/note-taker.png";
import myPlate from "../../images/myplate-project.png";
import spaceExplorer from "../../images/space-explorer.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workdayScheduler from "../../images/workday-scheduler.png";


const Project = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container-fluid" id="portfolio">
                
                        <h1 className="text-uppercase text-center"> My Portfolio</h1>
                        {/* <h2 className="subtext-uppercase text-center"> Check out my latest projects!</h2> */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="image-box-wrapper"><p>My Plate Project</p>
                            <img className="portfolio-image" src={myPlate} alt="My Plate Project" />
                            <a href='https://vast-ridge-96690.herokuapp.com/'><button>View Website</button></a><a href='https://github.com/pfrueh1/myplate'><button>View GitHub</button></a>
                        </div>
                        <div className="image-box-wrapper"><p>Work Day Scheduler Project</p>
                            <img className="portfolio-image" src={workdayScheduler} alt="Work Day Scheduler Project" />
                            <a href='https://jamwil1226.github.io/work-day-scheduler/'><button>View Website</button></a><a href='https://github.com/jamwil1226/work-day-scheduler'><button>View GitHub</button></a>
                        </div>
                        <div className="image-box-wrapper"><p>Original Portfolio Project</p>
                            <img className="portfolio-image" src={originalPortfolio} alt="Original Portfolio Project" />
                            <a href='https://jamwil1226.github.io/Jamie-Williams-Portfolio/'><button>View Website</button></a><a href='https://github.com/jamwil1226/Jamie-Williams-Portfolio'><button>View GitHub</button></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-box-wrapper"><p>Space Explorer Project</p>
                            <img className="portfolio-image" src={spaceExplorer} alt="Space Explorer Project" />
                            <a href='https://jamwil1226.github.io/space-explorer/'><button>View Website</button></a><a href='https://github.com/jamwil1226/space-explorer'><button>View GitHub</button></a>
                        </div>
                        <div className="image-box-wrapper"><p>Weather Dashboard Project</p>
                            <img className="portfolio-image" src={weatherDashboard} alt="Weather Dashboard Project" />
                            <a href='https://jamwil1226.github.io/weather-dashboard/'><button>View Website</button></a><a href='https://github.com/jamwil1226/weather-dashboard'><button>View GitHub</button></a>
                        </div>
                        <div className="image-box-wrapper"><p>Note Taker Project</p>
                            <img className="portfolio-image" src={noteTaker} alt="Note Taker Project" />
                            <a href='https://frightening-wizard-96998.herokuapp.com/'><button>View Website</button></a><a href='https://github.com/jamwil1226/note-taker'><button>View GitHub</button></a>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Project
