import React ,{useState}from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import TrackVisibility from "react-on-screen";
import "react-multi-carousel/lib/styles.css"; //importing it form google after istaling multi carousel
import Circle from "./Circle" 
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility >
              {({isVisible})=> 

              <div className={isVisible? " animate__animated animate__bounce" : ""} >
                <h2 className="skills-heading">SKILLS</h2>
                </div>
             
            }

              </TrackVisibility>
              <div className="skill_about">
              <TrackVisibility>
              {({isVisible})=>  
              <h5 className={isVisible? " animate__animated animate__zoomInDown" : ""}>
              These Are The Skills That I Have Accquired In The Mean Time Of Building My Projects And During My Learnings.
             </h5>}
              </TrackVisibility>
              </div>
              {/* creating the slide show carousel */}
                 
              <TrackVisibility >
              {({isVisible}) => isVisible &&       
         <Carousel  responsive = {responsive} infinite={true} className="skill-slider" >
        
        
              <div className="item">
              <Circle percentage={65} countSpeed={26}/>
              <h5>React js</h5>
              </div>
              
                
              <div className="item">
                 <Circle percentage={70} countSpeed={23}/>
                 <h5>Java</h5>
                 </div>
             
         
                <div className="item">
                <Circle percentage={40} countSpeed={40}/>
                <h5>Node.Js</h5>
               </div> 
              
        
              <div className=  "item" >
              <Circle percentage={60} countSpeed={30}/>
              <h5>Web Development</h5>
                </div>
           
                  
         
               <div className="item">
               <Circle percentage={80} countSpeed={20}/>
               <h5>MySql</h5>
                </div>
              
            <div className="item">
                 <Circle percentage={68} countSpeed={23}/>
                 <h5>Data Strutures</h5>
                 </div>
               
              </Carousel>   }
            
            </TrackVisibility >
            
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
    </section>
  );
};

export default Skills;
