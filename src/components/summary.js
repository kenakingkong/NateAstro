import React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../scss/text.scss'

const Summary = () => (
   <StaticQuery 
      query={graphql`
         query SummaryQuery {
            site {
               siteMetadata {
                  summary
               }
            }
         }
      `}
      render={data => (
         <p className="text-purple text-regular">
            {data.site.siteMetadata.summary}
         </p>
      )}
   />
)
export default Summary