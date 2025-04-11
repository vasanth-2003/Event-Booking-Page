import React from 'react'
import styled from "styled-components"
import { FaLocationDot } from "react-icons/fa6";

const Bgstyled = styled.div`
    background-image:url(${(props)=>props.tyles});
     background-size: cover;
      height:50vh;
      width:36vh;
      display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end; 
     margin: 10px;
     border-radius: 10px;

  `

function Horizontalcards(props) {
  const {eventCard} = props
    
  return (
    <>
    <li>
      <Bgstyled tyles={eventCard.imgUrl}>
        <div className = "locationCont">
          <div>
          <h1 className='eventitle'>{eventCard.eventName}</h1>
          <div >
            <FaLocationDot className='map'/>
            <p className = "info">{eventCard.cityName}</p>
          </div>
          </div>
        <div>
          <p className = "info">{eventCard.cityName}</p>
          <p className = "info">{eventCard.date.slice(0,10)} | {Math.round(eventCard.distanceKm/100)+" Km"}</p>
        </div>

        </div>
      </Bgstyled>
    </li> 
    </>
    
  )
}

export default Horizontalcards