import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Nav.jsx';
import Intro from './Intro.jsx';
import Bio from './Bio.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        } else {
          entry.target.classList.remove('animate-show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.animate-hide');

    hiddenElements.forEach((el) => observer.observe(el));
  }, []); // empty array as second argument to run only once on mount

  return (
    <div className="App" id="home">
      <Navbar />
      <Intro />
      <Bio />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
