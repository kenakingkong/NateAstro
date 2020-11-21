import { StaticQuery, graphql } from "gatsby"
import React  from "react"
import {Helmet} from 'react-helmet'
import Header from './header'
import FluidGrid from './fluidgrid'
import BoxImage from "../components/boximage"
import Name from "../components/name"
import { Media } from "../media"

import '../scss/layout.scss'

const Layout = ({path, children}) => {
   const isHome = '/' === path;
   return (
      <StaticQuery 
         query={graphql`
            query SiteMetaDataQuery {
               site {
                  siteMetadata {
                     title
                     description
                     keywords
                     name
                     menuLinks {
                        name
                        link
                     }
                     socialLinks {
                        name
                        link
                     }
                  }
               }
            }
         `}
         render={data => (
            <>
               <Helmet
                  title={data.site.siteMetadata.siteTitle}
                  meta={[
                     {
                        name: 'description', 
                        content: data.site.siteMetadata.description
                     },
                     {
                        name: 'keywords', 
                        content: data.site.siteMetadata.keywords
                     }
                  ]} 
               />
               
               <Header 
                  path={path}
                  menuLinks={data.site.siteMetadata.menuLinks} 
                  socialLinks={data.site.siteMetadata.socialLinks}
               />

               <main>
                  {/* Tablet/Desktop */}
                  <Media greaterThan="sm">
                     <div className="my-container">
                        <BoxImage />
                        <FluidGrid>{children}</FluidGrid>
                        <Name name={data.site.siteMetadata.name}/>
                     </div>
                  </Media>

                  {/* Mobile */}
                  <Media lessThan="md">
                     {isHome && <BoxImage />}
                     {!isHome && <FluidGrid>{children}</FluidGrid>}
                     {isHome && <Name name={data.site.siteMetadata.name} />}
                  </Media>
               </main>

            </>
         )}
      />
   )
}

export default Layout;