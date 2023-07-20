import React from "react";
import { useState } from "react";
// we need to store somte text that will be given by our user to us
// import contactImg from "../assets/img/contact-img.svg";

import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from '../assets/img/contact-img.svg'
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  // this state will store all details
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // this one for submit button when the user click the send button the api call happens
  const [buttonText, setButtonText] = useState("send");
  // this one for when the user clicks the send button if the api call happens or not if it catches any error or not
  const [status, setStatus] = useState({});

  //  it leaves teh rest of the details intact and only update the indicated catagory
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  //   since we are sending this to our api so this an asynchronus method
  const handleSubmit = async (e) => {
    //we dont want the page to reload when user send the mail so prevent default
    e.preventDefault();
    setButtonText("Sending..."); //setting button text to ending to show the user some events occured
    //  making an api call to get the respone from what we have set up
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setButtonText("Send"); //again setting button text to send

    setFormDetails(formInitialDetails); //setting from details to initial state
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
      setTimeout(() => {
        setStatus({ success: false, message: "" });
      }, 3000);
   }
    else {
      setStatus({
        success: false,
        message: "Somthing went wrong ,please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
         <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
         <Col className="contact_container">
          
          <div className="contact_form">
          <TrackVisibility>
         
         {({isVisible})=>
           <div className={ isVisible ?"animate__animated animate__rubberBand" : ""}> 
            
          <h2 className="contactHeading">Get In Touch</h2>
          </div>
          }
          
          </TrackVisibility>
          <TrackVisibility>
         
         {({isVisible})=>
           <div className={ isVisible ?"animate__animated animate__zoomIn" : ""}> 
            <h5>Please Drop A Message If You Like To Recruit Me Or Talk About Some Random Stuffs Related To Development </h5>
            </div>
          }
          
          </TrackVisibility>
            <form onSubmit={handleSubmit}>

              <Row>
                
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />

                  {/* here on ONCHange prop we are delclaring the onformupdate fxn in which the e defines the ongoing event and onFormUpdae takes the first name and get teh targeted value and update it */}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>

                <button type="submit" >
                  {" "}
                  <span>{buttonText}</span>
                </button>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {" "}
                      {status.message}{" "}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          
   
          </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
