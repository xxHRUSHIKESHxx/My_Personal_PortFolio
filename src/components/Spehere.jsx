import React ,{ useEffect }from 'react';
import TagCloud from 'TagCloud';


const Spehere = () => {
    useEffect(() => {
 
    
    const container = ".tagcloud";
    const texts =[
        "HTML",
        "CSS",
        "JAVA",
        "JS",
        "REACT",
        "DSA",
        "GIT HUB",
        "GIT",
        "ES6",
        "GIT",
        "MySql",
        "NodeJS"

    ];

    const options ={
        radius: 300,
        maxSpeed:"fast",
        initSpeed:"fast",
        keep:true
    };
    TagCloud(container , texts , options)
  
  } , [])
  return (
    <div className='Sphere_placing'>
    <div className="text_sphere">
        {/* span tag className must be tagcloud */}
        <span className="tagcloud"></span>
    </div>
  </div>
  )
}

export default Spehere