import { isVisible } from '@testing-library/user-event/dist/utils';
import React  , {useState , useEffect} from 'react'
import {  Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
const Circle = ({percentage , countSpeed}) => {


 const [counter , setCounter ] = useState(0);
 
 useEffect(() => {
    const intervalId = setInterval(() => {
        if(counter === percentage){
            clearInterval(intervalId);
        }
        else{
            setCounter((prevCounter) => prevCounter +1)
        }
    },countSpeed);
    return () =>{
        clearInterval(intervalId);
    }
 },[counter]);

 const componentToTrack = () =>{

 }

//  const fillingArea = Math.round(472 - 472 *(percentage/100));
const[fillingArea , setFillingArea] = useState(0);

useEffect(() => {
    const calculatedFillingArea = Math.round(472 - 472 *(percentage/100));
    setFillingArea(calculatedFillingArea);
},[fillingArea]);



const style = {
    '--filling-time': `${fillingArea}`,
  };
  return (

<Container className= "Circle">


 

    <div className="outer">
    <div className="inner">
     
       <span id='number'>
        <h5> {counter}%</h5>
       </span>
    </div>
    </div>
    <div className="svgElement">
    <TrackVisibility>
        {({isVisible}) => isVisible &&    <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#29e8ff" />
               <stop offset="100%" stop-color="#b700ff" />
            </linearGradient>
         </defs>
       
         <circle cx="80" cy="80" r="70" stroke-linecap="round" style={style} />
 </svg> }
         </TrackVisibility>
 
 </div>
 {/* #01f1de #7605e7 */}
 

 </Container>
  )
}

export default Circle