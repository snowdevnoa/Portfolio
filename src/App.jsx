import './App.css';
import Navbar from './Nav.jsx';
import Intro from './Intro.jsx';
import Bio from './Bio.jsx';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
