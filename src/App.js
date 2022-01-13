import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <>
        <Nav></Nav>
        <Intro></Intro>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </>
    </div>
  )
};

export default App;