import React from "react"
import './css/link.css'

const MyLink = ({ link, name }) => (
   <a 
   className="link"
   target="_blank"
   href={link}
   >
      {name}
   </a>
)

export default MyLink;