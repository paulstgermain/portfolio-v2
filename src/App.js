import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
