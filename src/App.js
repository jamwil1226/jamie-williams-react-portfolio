import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

return (
  <Router>
    <div>
      <Nav/>
      <Routes>
        <Route path="/intro" element={<Intro/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>

    <Footer/>
  </Router>
);
}

export default App;