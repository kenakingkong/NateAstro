import { StaticQuery, graphql } from "gatsby"
import React from "react"
import {Helmet} from 'react-helmet'
import Header from './header'
import Footer from './footer'
import BoxImage from "../components/boximage"
import Name from "../components/name"

import './css/layout.css'

const Layout = ({children}) => {
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
                  <div className="fluid">
                     <BoxImage />
                     {children}
                  </div>
                  <Name name={data.site.siteMetadata.name}/>
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