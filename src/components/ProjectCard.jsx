import React from 'react';
import {Col } from 'react-bootstrap';

//we are creating the project card in which for small devices we have 6 parts of the colum and for miduim devices 4 parts
const ProjectCard = ({title , description , imgUrl  , url}) => {
  // const openProject = () => {
  //   window.open({url} , "_blank");
  // }
  return (
    <Col sm={6} md={4} >
       <div className="proj-imgbx" >
         <img src={imgUrl} />
         <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={url}> 
            <h3>
            Click Here
            </h3></a>
          
         </div>
       </div>
    </Col>
  )
}

export default ProjectCard;