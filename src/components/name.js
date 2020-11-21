import React from "react"
import '../scss/text.scss'

const Name = ({name}) => ( 
   <div className="text-vertical">
      <p className="text-blue text-vertical-bottom">{name}</p>
      <p className="text-purple text-vertical-top">{name}</p>
   </div>
)

export default Name;