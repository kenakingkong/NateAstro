import React from "react"
import './css/text.css'

const Name = ({name}) => {
   return ( 
      <div className="text-vertical">
         <p className="blue">{name}</p>
         <p className="purple">{name}</p>
      </div>
   )
}

export default Name;