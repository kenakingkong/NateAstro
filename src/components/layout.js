import { StaticQuery, graphql } from "gatsby"
import React  from "react"
import {Helmet} from 'react-helmet'
import Header from './header'
import Footer from './footer'
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
                     email
                     siteURL
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
               />
               <main>
                  {/* Tablet/Desktop */}
                  <Media greaterThan="xs">
                     <div className="container">
                     <BoxImage />
                     <div className="fluid">
                        {children}
                     </div>
                     <Name name={data.site.siteMetadata.name}/>
                     </div>
                  </Media>
                  {/* Mobile */}
                  <Media at="xs">
                     {isHome && <BoxImage />}
                     <div className="fluid">
                        {children}
                     </div>
                     {isHome && <Name name={data.site.siteMetadata.name} />}
                  </Media>
               </main>
               <Footer 
                  email={data.site.siteMetadata.email}
               />
            </React.Fragment>
         )}
      />
   )
}

export default Layout;