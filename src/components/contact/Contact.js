import React, { useState } from 'react';
import "./contact.css";
import Phone from "../../images/icons8-cell-phone-50.png";
import Email from "../../images/icons8-email-open-50.png";

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
  
    // emailjs.sendForm(
    //     'service_n4wrvg4', 
    //     'template_q5hsnli', 
    //     formRef.current, 
    //     'user_AIkwrL1KHx5F4EnmP2mTO'
    //     )
    //   .then((result) => {
    //       console.log(result.text);
    //       setDone(true)
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    // ;}

    return (

        <div className="c-wrapper">   
        
            <div className="container-fluid" id="contact">
                <h1>CONTACT ME</h1>
                <div className="row">
                <div className="col-md-6">
                        <div className ="c-info">
                            <div className="c-info-item">
                                <strong>LET'S DISCUSS YOUR PROJECT!</strong>
                            </div>
                        <div className="c-info">
                                <div className="c-info-item">
                                    <img 
                                        src={Phone}
                                        alt=""
                                        className="c-icon"
                                    />
                                    (386) 589-0126
                                </div>
                                <div className="c-info-item">
                                    <img className="c-icon" src={Email} alt="" />
                                    jamie@jamiewilliams.tech
                                </div>
                      </div> 
                    </div>                    
                </div>
                <div className="col-md-6">
                  <div className="c-desc">
                  I would love an opportunity to answer any questions you have and tell you how I can help make your visions a reality for your business.
                  </div>
                        <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                            <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                        </form>
                    </div>
                    
              </div>
            </div>
        </div>
    );
  }
  
  export default ContactForm;
  