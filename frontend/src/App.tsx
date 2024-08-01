import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../src/pages/home';
import { NavBar } from './components/navBar';
import { Resources } from './pages/resources';
import { About } from './pages/about';
import { Products } from './pages/products';
import { Footer } from './components/footer';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Router>
      <div className="font-[Poppins] relative h-[100dvh]">
        {/** NAVBAR*/}
        <NavBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/> 
        {/** PAGES */}
        <Routes>
          <Route 
            path="/" 
            element={<Home isNavOpen={isNavOpen} />}
          />
          <Route 
            path="/resources" 
            element={<Resources isNavOpen={isNavOpen} />}
          />
          <Route 
            path="/products" 
            element={<Products isNavOpen={isNavOpen} />}
          />
          <Route 
            path="/about" 
            element={<About isNavOpen={isNavOpen} />}
          />
        </Routes>
        <Footer/>
      </div>
      </Router>
    </>
    
  );
}
