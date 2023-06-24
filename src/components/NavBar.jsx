import React from 'react';
import {useState , useEffect} from "react";
import { Navbar, Container , Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  const [activeLink ,setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll =()=>
{
    if(window.scrollY > 50){ //if scrolling happens then set scroll to true//
        setScrolled(true);
    }
    else{
        setScrolled(false); //other wise set scroll to flase//
    }

    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
}  },[])

const  onUpdateActiveLink =(value) => {
    setActiveLink(value);
}

const OpenMyCv = () =>{
  window.open("https://docs.google.com/document/d/1TWhuFHODULFE-JCGhAxXuMwPaK--n6wywfHA-485Fn4/edit#heading=h.5rf9wr4r3no2" , "_blank")
}
return(
    <Navbar  expand="lg" className = {scrolled ? "scrolled" : ""}>
    <Container >
      <Navbar.Brand href="#home" >
        <div sm = {6}>
        <img src={logo} alt="logo"/>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto align-items-center">
          <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' :'navbar-link'}  onClick ={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
          <Nav.Link href="#skills" className ={activeLink === 'skills' ? 'active navbar-link' :'navbar-link'} onClick ={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
          <Nav.Link href="#project"  className ={activeLink === 'project' ? 'active navbar-link' :'navbar-link'} onClick ={() => onUpdateActiveLink('project')}>PROJECTS</Nav.Link>
         </Nav>
         <span className="navbar-text">
               <div className="social-icon">
                <a href="https://www.linkedin.com/in/hrushikesh-behera-a6bb3321a"><img src={navIcon1} alt="linkedIn" /></a>
                <a href="https://github.com/xxHRUSHIKESHxx"><img src={navIcon2} alt="github" /></a>
                <a href="https://www.instagram.com/hrushikesh_behera_/"><img src={navIcon3} alt="instagram" /></a>
                </div>    
             <button className="vvd" onClick={()=> OpenMyCv()}>
                <span>My Resume</span>   
               
                </button>       
         </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
    
    
}
export default NavBar;
