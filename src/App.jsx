import './App.css';
import Navbar from './Nav.jsx';
import Intro from './Intro.jsx';
import Bio from './Bio.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App() {
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
