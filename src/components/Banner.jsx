import React from "react";
import { useState ,useEffect  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import ChangeImg from "./ChangeImg";
import 'animate.css';//we have already installed animate.css module
// to track if the component is working or not we will use react-on-screen trackabilty that will just a wrapper component which will track if the animation is working inside or not and we will tract that with isVisible 
import TrackVisibility from "react-on-screen";
import Spehere from "./Spehere";




const Banner = () => {
    // this looop will be initiated from 0 and go to the word which we are currently dislaying
    const [ loopNum , setLoopNum ] = useState(0); //use State will be start from the first word
    const [ isDeleting , setIsDeleting ] = useState(false);//it will determine if our word will be typed or deleted and intially it will be flase because our word the 1st typed
    // here we are creating the a use effect hook for exchanging the words and these words or phrases will run one after another in loop
    const toRotate =[ "Web Developer" , "Web Designer" , "Front-End Developer"];
    const [text , setText ] = useState('') //it will go from one text to another like W -> E -> B like wise
    //now delta will decide how 1st one letter will type anfter another
    const[delta ,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; //it determines how much time will take for another letter to be typed

 // now in use Effect we will write a fucntion which will take care of typing or deleting a letter
 //every time the deletion will be faster than the wrting a letter its natural  
 useEffect(() => {
        let ticker =  setInterval(() => {
          tick();
        },delta)
        // delta will determine here how fast will things happen
        return () => {clearInterval(ticker)};

    },[text])
// here clearinterval runs after the ticker mark applied 
// the ues effect hook works after ever text is typed

   
//this fucntion will determine where the ticking will happen and what letter will be next to be typed
const tick =() => {
  let i = loopNum % toRotate.length;// i is the index currently we are peeking | % is used to claculate the modules means when the  toROtate elements will  finish it will restart again
  let fullText = toRotate[i];   // this for the cuurent full text i th element
  let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length + 1);
  // is the letter is deleting then our next text would be the substring of full text which to toROtate[i] and it will go from 0th index 1letter less than current no of letters other wise we will add one letter ti complete the text if it is not dleteing
  
  setText(updatedText);//now setting text to updated text 

  if(isDeleting){
    setDelta(prevDelta => prevDelta/2);//as delta decide how fast a letter will be wrtiien or dleted as deletion should be faster than wrtting so we are cutting it to half to make it look more natural
  }
  if(!isDeleting && updatedText === fullText){//if we are not deleting and our updated text come to an end of the element of toRotates one element the now our deletin will happen and after deletion is complete our new element of toROtate will start writing again
    setIsDeleting(true);
    setDelta(period);//after deletion is over setting time period to normal which is we declared 2000
  }
  else if( isDeleting && updatedText === '' ){//if we are deleting and our deletion is over as updated text reached to an end we set is deeting to false and update the our ticker to find the new element of our toRotate funciton 
   setIsDeleting(false);
   setLoopNum(loopNum +1);//setting it to the next loop or next element of the toROtate 
   setDelta(200);//setting delta manually t0 500;

  }
}


return (
    <section className="banner" id="home">
   
      <Container >
        {/* allign items center is a react boot strap class name which will automatically add the styling to your component */}
        <Row >
            {/* applying colum to have the lines in column styling and for samll devices react app will atumatically convert the stylign to column mode */}
    
    
       <Col xs={12} md={6} xl={7}>
          <div>
          <TrackVisibility>
          {({isVisible})=>
             <span className="tagline"> 
             <h3 className={ isVisible? " animate__animated animate__bounce" : ""}>Welcome to my Portfolio </h3>
             </span>

           }
          </TrackVisibility>
           <TrackVisibility>
            {({isVisible})=>
               <div className={ isVisible ?"animate__animated animate__zoomIn" : "" }> 
               {/* so in this div tab if the component is visible then we apply the animation otherwise dont apply any animated*/ }
             <h1>
              {`Hi I'm HRUSHIKESH,`} 
              
              <br/>

              <span className="wrap">{text}</span>
              </h1>
            <p>
             Just starting my carreer as a fornt-end developer.
             Some skills are acquired and some are on the process.using new skills and bringing my ideas in to life ...
             <br />
             {/* <h4 className="wrap">Thats My Nindo , My Ninja Way</h4>  */}
            </p>
            <button > <a href="#connect"> let's connect <ArrowRightCircle size={25}/>  </a>
             </button>
            </div>}
             </TrackVisibility>
             </div>
          </Col>
            <Col >
            <Spehere/>
           </Col>
        </Row>
      </Container>
      
    </section>

  );
 
};


export default Banner;
