import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './css/text.css'

const Summary = ({}) => (
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
            <p className="text-regular">
               {data.site.siteMetadata.summary}
            </p>
      )}
   />
)
export default Summary