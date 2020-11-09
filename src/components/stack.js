import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { CardWrapper } from 'react-swipeable-cards';
import {MyCard, MyEndCard} from './mycard'

const Stack = () => {
   return (
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
            <>
               {/*<p>{poems.allMakena.totalCount}</p>*/}
               <CardWrapper addEndCard={() => <MyEndCard />}>
                  {poems.allMediumFeed.nodes.map(poem => (
                     <MyCard poem={poem} />
                  ))}
               </CardWrapper>
            </>
         )}
      />
   )
};

 export default Stack;