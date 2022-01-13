import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className='col'>
                        <div className="d-flex">
                            <a href='https://github.com/jamwil1226'>GitHub</a>
                        </div>                        
                    </div>
                    <div className='col'>
                        <div className="d-flex">
                            <a href='https://www.linkedin.com/in/jamiewilliams1226/'>LinkedIn</a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="d-flex">
                            <a href='https://stackoverflow.com/users/17893508/jamie-w'>StackOverflow</a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Footer
