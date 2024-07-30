import { useState } from 'react';
import { LuX, LuAlignJustify, LuGlobe2 } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export function Header() {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const [isIconOpen, setIsIconOpen] = useState(false)
  const navigate = useNavigate()

  function openNavBar() {
    setIsNavBarOpen(prevState => !prevState)
    setIsIconOpen(prevState => !prevState)
  }

  function navHomePage() {
    navigate("/")
  }
  function navResourcesPage() {
    navigate("/resources")
  }
  function navProductsPage() {
    navigate("/products")
  }
  function navAboutPage() {
    navigate("/about")
  }

  return (
    <header className="bg-white w-screen fixed">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-2">

        <div>
          <LuGlobe2 className="text-5xl text-[#0c4a6e] hover:text-[#0ea5e9]"/> 
        </div>

        <div className="flex items-center place-content-center px-5">
          <ul className="hidden sm:flex flex-row items-center gap-8">

            <li>
              <button className="hover:text-[#0c4a6e]"  onClick={navHomePage}>Home</button>
            </li>

            <li>
              <button className="hover:text-[#0c4a6e]" onClick={navResourcesPage}>Resources</button>
            </li>

            <li>
              <button className="hover:text-[#0c4a6e]"  onClick={navProductsPage}>Products</button>
            </li>

            <li>
              <button className="hover:text-[#0c4a6e]"  onClick={navAboutPage}>About Us</button>
            </li>
          </ul>

        </div>

        <div className="flex items-center">
          <button className="bg-[#0ea5e9] mr-3 w-24 text-sm text-white px-5 py-1 rounded-full hover:bg-[#0c4a6e]">Sign in</button>
          <button id='navBarButton' onClick={openNavBar} className='text-[#0c4a6e] flex sm:hidden'>{isIconOpen ? <LuX/> : <LuAlignJustify />}</button>
        </div>

        <CSSTransition
          in={isNavBarOpen}
          timeout={300}
          classNames="slide-down"
          unmountOnExit
        >
          {/* {isNavBarOpen && ( */}
            <div className="sm:hidden bg-white h-56 absolute top-16 left-0 right-0 w-full flex flex-col items-center border-t-2 border-[#0c4a6e]">
              <ul className="sm:hidden flex flex-col items-center p-4 gap-8">

                <li>
                  <button className="hover:text-[#0c4a6e]"  onClick={navHomePage}>Home</button>
                </li>

                <li>
                  <button className="hover:text-[#0c4a6e]" onClick={navResourcesPage}>Resources</button>
                </li>

                <li>
                  <button className="hover:text-[#0c4a6e]"  onClick={navProductsPage}>Products</button>
                </li>

                <li>
                  <button className="hover:text-[#0c4a6e]"  onClick={navAboutPage}>About Us</button>
                </li>
          
              </ul>

            </div>
            </CSSTransition>
            {/* )
          } */}
      </nav>
    </header>
  )
}