import React from "react"
import './css/link.css'

const MyLink = ({ link, child }) => (
   <a className="link"
      target="_blank"
      href={link}
      >
      {child}
   </a>
)

export default MyLink;