import { StaticQuery, graphql } from "gatsby"
import React from "react"
import MyLink from "./MyLink"
import './css/text.css'

const Social = () => (
   <StaticQuery 
      query={graphql`
         query SocialLinkQuery {
            site {
               siteMetadata {
                  socialLinks {
                     name
                     link
                  }
               }
            }
         }
      `}
      render={data => (
         <div>
            <p className="text-regular">
               Let's be friends!
            </p>
            <ul className="liststyle">
               {data.site.siteMetadata.socialLinks.map(link => (
                  <li 
                     key={link.name}
                     className="listitem">
                     <MyLink 
                        name={link.name}
                        link={link.link}
                     />
                  </li>
               ))}
            </ul>
         </div>
      )}
   />
)

export default Social;