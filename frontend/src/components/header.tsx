import { useState } from 'react';
import { LuX, LuAlignJustify, LuGlobe2 } from "react-icons/lu";

export function Header() {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const [isIconOpen, setIsIconOpen] = useState(false)

  function openNavBar() {
    setIsNavBarOpen(prevState => !prevState)
    setIsIconOpen(prevState => !prevState)
  }

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-2">

        <div>
          <LuGlobe2 className="text-5xl text-[#0c4a6e] hover:text-[#0ea5e9]"/> 
        </div>

        <div className="static bg-white w-full flex items-center place-content-center px-5">
          <ul className="hidden sm:flex flex-row items-center gap-8">

            <li>
              <a className="hover:text-[#0c4a6e]" href="#">Home</a>
            </li>

            <li>
              <a className="hover:text-[#0c4a6e]" href="#">Resources</a>
            </li>

            <li>
              <a className="hover:text-[#0c4a6e]" href="#">Products</a>
            </li>

            <li>
              <a className="hover:text-[#0c4a6e]" href="#">About Us</a>
            </li>
          </ul>

        </div>

        <div className="flex items-center">
          <button className="bg-[#0ea5e9] mr-3 w-24 text-sm text-white px-5 py-1 rounded-full hover:bg-[#0c4a6e]">Sign in</button>
          <button id='navBarButton' onClick={openNavBar} className='text-[#0c4a6e] flex sm:hidden'>{isIconOpen ? <LuX/> : <LuAlignJustify />}</button>
        </div>
          {isNavBarOpen && (
            <div className="sm:hidden bg-white h-56 absolute top-16 left-0 right-0 w-full flex flex-col items-center border-t-2 border-[#0c4a6e]">
              <ul className="sm:hidden flex flex-col items-center p-4 gap-8">

                <li>
                  <a className="hover:text-[#0c4a6e]" href="#">Home</a>
                </li>

                <li>
                  <a className="hover:text-[#0c4a6e]" href="#">Resources</a>
                </li>

                <li>
                  <a className="hover:text-[#0c4a6e]" href="#">Products</a>
                </li>

                <li>
                  <a className="hover:text-[#0c4a6e]" href="#">About Us</a>
                </li>
              </ul>

            </div>
          )}
        
      </nav>
    </header>
  )
}