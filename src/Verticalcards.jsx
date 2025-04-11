import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Verticalcards(props) {
    const {eventCard} = props
  return (
    <li className='upcommingCard'>
        
            <img src = {eventCard.imgUrl} className='cardImage'/>
            <div className='align'>
            <div>
                      <h1 className='veventitle'>{eventCard.eventName}</h1>
                      <div >
                        <FaLocationDot className='map'/>
                        <p className = "vinfo">{eventCard.cityName}</p>
                      </div>
                      </div>
                    <div >
                      <p className = "vinfo">{eventCard.date.slice(0,10)} | {Math.round(eventCard.distanceKm/100)+" Km"}</p>
                    </div>
        </div>
    </li>
    
  )
}

export default Verticalcards