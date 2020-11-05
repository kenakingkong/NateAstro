import React from "react"
import "./css/fluidgrid.css"

const FluidGrid = ({ one, two, three }) => (
   <div className="grid">
      {one}
      {two}
      {three}
   </div>
)

export default FluidGrid;