import React from "react"
import "../scss/fluidgrid.scss"

const FluidGrid = ({children}) => (
   <div className="fluid-grid">
      {children}
   </div>
)

export default FluidGrid;