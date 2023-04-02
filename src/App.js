import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <About />
    </BrowserRouter>
  );
}

export default App;