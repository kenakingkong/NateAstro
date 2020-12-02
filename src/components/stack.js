import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { CardWrapper, Card } from 'react-swipeable-cards';
import {IconMedium} from './icons' 
import '../scss/cards.scss'

const cardstyle = {
   border: 'solid 4px #398FC7',
   padding: '5% 2.5% 2.5% 5% ',
   maxWidth: '70vw',
   width: 'auto'
}

const Stack = () => (
   <StaticQuery
      query={graphql`
         query MediumFeedQuery {
            allMediumFeed {
               nodes {
                  title
                  link
                  date(formatString: "MM-DD-YYYY")
                  content
               }
               totalCount
            }
         }
      `}
      render={poems => (
         <CardWrapper addEndCard={() => <MyEndCard />}>
            {poems.allMediumFeed.nodes.map(poem => (
               <Card 
                  key={poem.title} 
                  style={cardstyle}
                  data={poem}
               >
                  <div className="card-box">
                     <div className="card-main">
                        <p className="card-title">{poem.title}</p>
                        <p 
                           className="card-content" 
                           dangerouslySetInnerHTML={{ 
                              __html: poem.content.replace(/<figure.+figure>/g,"")
                           }} 
                        />
                     </div>
                  
                     <div className="card-footer">
                        <a 
                           className="card-link" 
                           href={poem.link} 
                           target="_blank"
                           rel="noreferrer">
                           "{poem.title}", {poem.date} &emsp; {IconMedium}
                        </a>
                     </div>
                  </div>
               </Card>
               ))}
         </CardWrapper>
      )}
   />
)

export const MyEndCard = () => (
   <div className="card-box">
      <div className="card-main">
         <p className="card-content">
            Congrats for getting through all my poems!!! woo hoo
         </p>
         <p className="card-content">
            Refresh the page to start over
         </p>
      </div>
   </div>
 )

 export default Stack;