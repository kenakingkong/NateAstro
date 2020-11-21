import React from "react"
import { Link } from "gatsby"
import MyLink from './mylink'
import {IconMedium, IconTwitter, IconEnvelope} from './icons' 
import '../scss/header.scss';

const icons = {
  "Medium": IconMedium,
  "Twitter": IconTwitter,
  "Email": IconEnvelope
}

const Header = ({ path, menuLinks, socialLinks }) => (
  <header>
    <nav className="nav">
      
      {/** page links */}
      <ul className="nav-left">
        {menuLinks.map(link => (
          <li
            key={link.name}
            className="nav-item"
          >
            <Link 
              className={`nav-link 
              ${path === link.link && "activelink"}`} 
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/** social links */}
      <ul className="nav-right">
        {socialLinks.map(link => (
           <li
              key={link.name}
              className="nav-item"
            >
                <MyLink 
                  link={link.link} 
                  child={icons[link.name]} 
                />
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header