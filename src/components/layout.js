import { StaticQuery, graphql } from "gatsby"
import React  from "react"
import {Helmet} from 'react-helmet'
import Header from './header'
import FluidGrid from './fluidgrid'
import BoxImage from "../components/boximage"
import Name from "../components/name"
import { Media } from "../media"

import './css/layout.css'

const Layout = ({children}) => {
   const isHome = '/' === window.location.pathname;
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
            <React.Fragment>

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
                  menuLinks={data.site.siteMetadata.menuLinks} 
                  socialLinks={data.site.siteMetadata.socialLinks}
               />

               <main>
                  {/* Tablet/Desktop */}
                  <Media greaterThan="sm">
                     <div className="container">
                        <BoxImage />
                        <FluidGrid>
                           {children}
                        </FluidGrid>
                        <Name name={data.site.siteMetadata.name}/>
                     </div>
                  </Media>
                  {/* Mobile */}
                  <Media lessThan="md">
                     {isHome && <BoxImage />}
                     <FluidGrid>
                           {children}
                        </FluidGrid>
                     {isHome && <Name name={data.site.siteMetadata.name} />}
                  </Media>
               </main>

            </React.Fragment>
         )}
      />
   )
}

export default Layout;