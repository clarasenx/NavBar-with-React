import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../src/pages/home';
import { NavBar } from './components/navBar';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

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
        </Routes>
      </div>
      </Router>
    </>
    
  );
}
