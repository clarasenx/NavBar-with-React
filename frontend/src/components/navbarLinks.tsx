import { Link } from 'react-router-dom'

export const NavBarLinks = () => {
  return (
    <>
      <li>
        <Link to="/" className="button-link">
          <button className="hover:text-[#0c4a6e]">
            Home
          </button>
        </Link>
      </li>
    </>
  )
}