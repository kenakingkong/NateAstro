import React from "react"
import '../scss/link.scss'

const MyLink = ({ link, child }) => (
   <a 
      className="link"
      target="_blank"
      rel="noreferrer"
      href={link}
   >
      {child}
   </a>
)

export default MyLink;