import { Link } from 'react-router-dom'
import { NavLinkInterface } from '../interfaces/navLinkInterface'

interface NavBarLinksProps extends NavLinkInterface {
  
}

export const NavBarLinks = ({to, label} : NavBarLinksProps) => {
  return (
    <>
      <li>
        <Link to={to} className="button-link flex justify-center py-2">
          <button className="hover:text-[#0c4a6e]">
            {label}
          </button>
        </Link>
      </li>
    </>
  )
}