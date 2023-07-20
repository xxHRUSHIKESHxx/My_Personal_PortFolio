import React from 'react';
import {useState , useEffect , useRef } from "react";
import { Navbar, Container , Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  const [activeLink ,setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef();
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
  window.open("https://docs.google.com/document/d/e/2PACX-1vT_v89ESu97hC2pHU2bY27O_h-7tXyNOpdLIon8WkiRXS6Qm0MHUKD_JjXbXxCMl2wwCuhpGncn9WhX/pub" , "_blank")

}

const handleClick = () => {
  setIsActive(!isActive);
};
const handleClick2 = () => {
  // Revert handleClick by updating the state
  buttonRef.current.click()
};
const MobileClick = (activeLink) => {
  onUpdateActiveLink(activeLink);
  handleClick2();
}

return(
    <Navbar  expand="lg" className = {isActive ?"ToggleNavBar" : ""}>
    <Container >
      <Navbar.Brand href="#home" >
        <div  >
        <img src={logo} alt="logo"/>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  >

        <span className="navbar-toggler-icon" onClick={() => handleClick()} ref={buttonRef} ></span>
       
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto align-items-center">
          <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' :'navbar-link'}  onClick ={() => MobileClick()}>
            <span className='navtext'>HOME</span>
          </Nav.Link>
          <Nav.Link href="#skills" className ={activeLink === 'skills' ? 'active navbar-link' :'navbar-link'} onClick ={() => MobileClick()}> <span className='navtext'>SKILLS</span></Nav.Link>
          <Nav.Link href="#project"  className ={activeLink === 'project' ? 'active navbar-link' :'navbar-link'} onClick ={() => MobileClick()}> <span className='navtext'>PROJECTS</span></Nav.Link>
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
