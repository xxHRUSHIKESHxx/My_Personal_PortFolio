import React from "react";
import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  // here we will create an image which will hold our title descrition and image for the project
  const projects = [
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg1,
      url : "./blank.html"
    },
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg2,
      url : "./blank.html"
    },
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg3,
      url : "./blank.html"
    },
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg1,
      url : "./blank.html"
    },
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg2,
      url : "./blank.html"
    },
    {
      title: "bussiness start up",
      description: "Design and  Development",
      imgUrl: proImg3,
      url : "./blank.html"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
        {({isVisible})=>
            <div className={ isVisible ?"animate__animated animate__bounce" : ""}> 
            <h2>PROJECTS</h2>
            </div>

        }
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                 <p>
                  Here are some of my projects which I have worked on . As a beginner I have not done many of them but soon this section will be full of awesome stuffs.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                 I Have Not Completed Enough Projects To Reach This Level Yet...
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                Working On The Things...
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
     
    </section>
  );
};

export default Projects;
