import React from 'react';
import { Card } from 'react-swipeable-cards';
import {IconMedium} from './icons' 
import './css/cards.css'

const cardstyle = {
   border: 'solid 4px #398FC7',
   padding: '2rem',
}

export const MyCard = ({poem}) => (
   <Card 
      key={poem.title} 
      style={cardstyle}
   >
      <div className="cardbox">
         <div className="cardmain">
            <p className="cardtitle">{poem.title}</p>
            <p 
               className="cardcontent" 
               dangerouslySetInnerHTML={{ 
                  __html: poem.content.replace(/<img .*?>/g,"")
               }} 
            />
         </div>
      
         <div className="cardfooter">
            <p className="carddate">
               written {poem.date} 
            </p>
            <a 
               className="cardlink" 
               href={poem.link} 
               target="_blank"
               rel="noreferrer">
               original post &nbsp;
               {IconMedium}
            </a>
         </div>
      </div>
   </Card>
);

 export const MyEndCard = () => (
   <div className="cardbox">
      <div className="cardmain">
         <p className="cardcontent">
            Congrats for getting through all my poems!!! woo hoo
         </p>
         <p className="cardcontent">
            Click here to start over.
         </p>
      </div>
   </div>
 )