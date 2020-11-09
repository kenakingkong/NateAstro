import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './css/box.css'

const BoxImage = () => (
   <StaticQuery 
      query={graphql`
         query SuitTommyQuery {
            site(siteMetadata: {images: {elemMatch: {name: {eq: "Suit Tommy"}}}}) {
               siteMetadata {
                  images {
                     alt
                     name
                     url
                  }
               }
            }
         }       
      `}
      render={data => (
         <div className="box">
            <div className="box-outline">
               <img 
                  className="box-image"
                  alt={data.site.siteMetadata.images[0].alt} 
                  src={data.site.siteMetadata.images[0].url} 
               />
            </div>
         </div>
      )}
   />
)

export default BoxImage;