import React from "react"
import { Link } from "gatsby"
import MyLink from './mylink'
import {IconMedium, IconTwitter, IconEnvelope} from './icons' 
import './css/header.css';

const icons = {
  "Medium": IconMedium,
  "Twitter": IconTwitter,
  "Email": IconEnvelope
}

const Header = ({ path, menuLinks, socialLinks }) => (
  <header>
    <nav>
      {/** page links */}
      <ul className="navleft">
        {menuLinks.map(link => (
          <li
            key={link.name}
            className="navitem"
          >
            <Link 
              className={`navlink 
              ${path === link.link && "activelink"}`} 
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/** social links */}
      <ul className="navright">
        {socialLinks.map(link => (
           <li
              key={link.name}
              className="navitem"
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