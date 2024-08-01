import { LuAlignJustify, LuGlobe2, LuX } from "react-icons/lu";
import { NavLinksService } from '../services/navLinkService';
import { NavBarLinks } from './navbarLinks';
import { Button } from './button';

interface navBarProps {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavOpen: boolean
}

export function NavBar({setIsNavOpen, isNavOpen} : navBarProps) {

  function openNavBar() {
    setIsNavOpen(prevState => !prevState);
  }


  return (
    <header className="bg-white w-screen h-16">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-2">

        <div>
          <LuGlobe2 className="text-5xl text-[#0c4a6e] hover:text-[#0ea5e9]"/> 
        </div>

        <div className="flex items-center place-content-center px-5">
          <ul className="hidden sm:flex flex-row items-center gap-8">
            {NavLinksService.map((link) => (
              <NavBarLinks key={link.to} {...link} />
            ))}
          </ul>

        </div>

        <div className="flex items-center">
          <Button label='Sign in' className='text-sm'/>
          <button id='navBarButton' onClick={() =>openNavBar()} className='text-[#0c4a6e] ml-3  flex sm:hidden'>{isNavOpen ? <LuX/> : <LuAlignJustify />}</button>
        </div>
         <div className={`transition-[max-height] duration-300 ease-in-out ${isNavOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} sm:hidden overflow-hidden bg-white h-fit border absolute top-16 left-0 right-0 w-full flex flex-col items-center z-10`}>
            <ul className="sm:hidden flex flex-col items-center p-4 gap-8">
              {NavLinksService.map((link) => (
                <NavBarLinks key={link.to} {...link} />
              ))}
            </ul>
        </div>
      </nav>
    </header>
  )
}