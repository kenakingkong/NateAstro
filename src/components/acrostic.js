import React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../scss/text.scss'

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
            <ul className="list-style">
               {data.site.siteMetadata.acrostic.map(line => {
                  let first = line.charAt(0)
                  let rest = line.substring(1)
                  return (
                     <li key={line}
                        className="list-item">
                        <span className="text-blue text-largest">{first}</span>
                        <span className="text-purple text-larger">{rest}</span>
                     </li>
                  )
               })}
            </ul>
      )}
   />
)
export default Acrostic