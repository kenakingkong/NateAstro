import React from "react"
import MyLink from './mylink'
import './css/text.css'

const Footer = ({ email }) => (
  <footer>
    <p className="text-regular">
      you can reach me at
    </p>
    <MyLink 
      name={email}
      link={`mailto:${email}`}
    />
  </footer>
)

export default Footer