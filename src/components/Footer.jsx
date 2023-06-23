import React from 'react'
import {Container ,Row ,Col} from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
const Footer = () => {
  return (
    <footer className="footer">
         <Container>
            <Row className="align-item-center">
                {/* <MailchimpForm/> */}
                <Col sm={6} className='footerLOGO'>
                 <img  src={logo} alt="logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end" > 
                  <div className="social-icon">
                  <a href="https://www.linkedin.com/in/hrushikesh-behera-a6bb3321a"><img src={navIcon1} alt="linkedIn" /></a>
                  <a href="https://github.com/xxHRUSHIKESHxx"><img src={navIcon2} alt="github" /></a>
                 <a href="https://www.instagram.com/hrushikesh_behera_/"><img src={navIcon3} alt="instagram" /></a> 
                  </div>
                  <p>CopyRight 2023.All Rights Reserved</p>
                </Col>
            </Row>
         </Container>
    </footer>
  )
}

export default Footer