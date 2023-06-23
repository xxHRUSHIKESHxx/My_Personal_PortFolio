import React , {useEffect } from 'react';

import './App.css';
import Banner from './components/Banner';
import  NavBar  from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
