import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </BrowserRouter>
  );
}

export default App;