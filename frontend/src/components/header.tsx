import { LuX, LuAlignJustify, LuGlobe2 } from "react-icons/lu";

export function Header() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] sm:h-24 h-32 mx-auto py-2">
        <div>
          <LuGlobe2 className="text-6xl text-[#0c4a6e] hover:text-[#0ea5e9]"/> 
          {/* <ion-icon className="text-6xl text-[#0c4a6e] hover:text-[#0ea5e9]" name="flower-outline"></ion-icon> */}
        </div>
        <div className="navLinks sm:static absolute bg-white sm:min-h-fit min-h-[40vh] left-0 top-[12%] w-full flex items-center place-content-center px-5">
          <ul className="flex sm:flex-row flex-col items-center sm:gap-[4vw] gap-8">
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
          <LuX/><LuAlignJustify />
          {/* <ion-icon onclick="hideMenu(this)" className="text-3x1 cursor-pointer sm:hidden" name="menu"></ion-icon> */}
        </div>
      </nav>
    </header>
  )
}