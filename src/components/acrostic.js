import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './css/text.css'

const Acrostic = () => (
   <StaticQuery 
      query={graphql`
         query Acrostic {
            site {
               siteMetadata {
                  acrostic
               }
            }
         }
      `}
      render={data => (
            <ul className="liststyle">
               {data.site.siteMetadata.acrostic.map(line => {
                  let first = line.charAt(0)
                  let rest = line.substring(1)
                  return (
                     <li key={line}
                        className="listitem">
                        <span className="text-largest">{first}</span>
                        <span className="text-larger">{rest}</span>
                     </li>
                  )
               })}
            </ul>
      )}
   />
)
export default Acrostic