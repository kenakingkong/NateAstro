import React from "react"
import { Link } from "gatsby"
import './css/header.css';

const Header = ({ menuLinks }) => (
  <header>
    <nav>
      <ul className="navlist">
        {menuLinks.map(link => (
          <li
            key={link.name}
            className="navitem"
          >
            <Link 
              className="navlink" 
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header