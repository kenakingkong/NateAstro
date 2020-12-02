import React from 'react';
import { Card } from 'react-swipeable-cards';
import {IconMedium} from './icons' 
import '../scss/cards.scss'

const cardstyle = {
   border: 'solid 4px #398FC7',
   padding: '5% 2.5% 2.5% 5% ',
   maxWidth: '70vw',
   width: 'auto'
}

const onSwipe = (data) => {
   console.log("swiped")
   console.log(data)
}

export const MyCard = ({poem}) => (
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
)

 export const MyEndCard = () => (
   <div className="card-box">
      <div className="card-main">
         <p className="card-content">
            Congrats for getting through all my poems!!! woo hoo
         </p>
         <p className="card-content">
            Click here to start over.
         </p>
      </div>
   </div>
 )