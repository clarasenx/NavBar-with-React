import { Link } from 'react-router-dom'

interface NavBarLinksProps {
  to: string;
  label: string;
}

export const NavBarLinks = ({to, label} : NavBarLinksProps) => {
  return (
    <>
      <li>
        <Link to={to} className="button-link">
          <button className="hover:text-[#0c4a6e]">
            {label}
          </button>
        </Link>
      </li>
    </>
  )
}