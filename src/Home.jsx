import React, { useEffect, useState } from 'react'
import Horizontalcards from './Horizontalcards'
import Verticalcards from './Verticalcards'
import Navbar from './Navbar'

const eventsData = 
  [
    {
      eventName: "Winter Wonderland Fair",
      cityName: "West Douglas",
      date: "2024-03-24T00:00:00.000Z",
      weather: "Snowy 26C",
      distanceKm: "4264.1226847222415",
      imgUrl: "https://i.postimg.cc/wMQfZv8z/image.webp"
    },
    {
      eventName: "Spring Clouds Art Exhibit",
      cityName: "North Amy",
      date: "2024-03-25T00:00:00.000Z",
      weather: "Cloudy 7C",
      distanceKm: "3864.065400248832",
      imgUrl: "https://i.postimg.cc/rsPSs04M/image.webp"
    },
    {
      eventName: "Snowy Peaks Photography Workshop",
      cityName: "Rayville",
      date: "2024-03-26T00:00:00.000Z",
      weather: "Snowy 18C",
      distanceKm: "14188.240054906337",
      imgUrl: "https://i.postimg.cc/Y0r7XRdq/image.webp"
    },
    {
      eventName: "Sunny Days Marathon",
      cityName: "Hartville",
      date: "2024-03-27T00:00:00.000Z",
      weather: "Sunny 2C",
      distanceKm: "9022.823129623723",
      imgUrl: "https://i.postimg.cc/4NFK9H3h/image.webp"
    },
    {
      eventName: "Tropical Tunes Music Festival",
      cityName: "South Andrew",
      date: "2024-03-27T00:00:00.000Z",
      weather: "Cloudy 30C",
      distanceKm: "14311.615540703924",
      imgUrl: "https://i.postimg.cc/Z5bS4wm8/image.webp"
    },
    {
      eventName: "Frozen Harmony Concert",
      cityName: "Port Markton",
      date: "2024-03-27T00:00:00.000Z",
      weather: "Sunny -3C",
      distanceKm: "12476.33705344043",
      imgUrl: "https://i.postimg.cc/y6p9FbQd/image.webp"
    },
    {
      eventName: "Cloudy Skies Book Fair",
      cityName: "Lake Matthew",
      date: "2024-03-27T00:00:00.000Z",
      weather: "Cloudy 14C",
      distanceKm: "6515.755364660444",
      imgUrl: "https://i.postimg.cc/SsFqFkxs/image.webp"
    },
    {
      eventName: "Sunlit Path Charity Run",
      cityName: "West Erika",
      date: "2024-03-27T00:00:00.000Z",
      weather: "Sunny -4C",
      distanceKm: "4544.261026003867",
      imgUrl: "https://i.postimg.cc/Y0r7XRdq/image.webp"
    }
  ]

  const Upcomming = [
      {
        eventName: "Winter Wonderland Fair",
        cityName: "West Douglas",
        date: "2024-03-24T00:00:00.000Z",
        weather: "Snowy 26C",
        distanceKm: "4264.1226847222415",
        imgUrl: "https://i.postimg.cc/rFvkz1LY/image.webp"
      },
      {
        eventName: "Spring Clouds Art Exhibit",
        cityName: "North Amy",
        date: "2024-03-25T00:00:00.000Z",
        weather: "Cloudy 7C",
        distanceKm: "3864.065400248832",
        imgUrl: "https://i.postimg.cc/T2b8FybV/image.webp"
      },
      {
        eventName: "Snowy Peaks Photography Workshop",
        cityName: "Rayville",
        date: "2024-03-26T00:00:00.000Z",
        weather: "Snowy 18C",
        distanceKm: "14188.240054906337",
        imgUrl: "https://i.postimg.cc/rpTzRXLb/image.webp"
      },
      {
        eventName: "Sunny Days Marathon",
        cityName: "Hartville",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Sunny 2C",
        distanceKm: "9022.823129623723",
        imgUrl: "https://i.postimg.cc/L8pZLZtN/image.webp"
      },
      {
        eventName: "Tropical Tunes Music Festival",
        cityName: "South Andrew",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Cloudy 30C",
        distanceKm: "14311.615540703924",
        imgUrl: "https://i.postimg.cc/BvyS5rW4/image.webp"
      },
      {
        eventName: "Frozen Harmony Concert",
        cityName: "Port Markton",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Sunny -3C",
        distanceKm: "12476.33705344043",
        imgUrl: "https://i.postimg.cc/J41LXryj/image.webp"
      },
      {
        eventName: "Cloudy Skies Book Fair",
        cityName: "Lake Matthew",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Cloudy 14C",
        distanceKm: "6515.755364660444",
        imgUrl: "https://i.postimg.cc/F1tkPY2F/image.webp"
      },
      {
        eventName: "Sunlit Path Charity Run",
        cityName: "West Erika",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Sunny -4C",
        distanceKm: "4544.261026003867",
        imgUrl: "https://i.postimg.cc/fLwG95yD/image.webp"
      },
      {
        eventName: "Winter Bliss Ice Sculpture Contest",
        cityName: "Terrenceberg",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Snowy 25C",
        distanceKm: "6350.197144394632",
        imgUrl: "https://i.postimg.cc/HLPNrmq4/image.webp"
      },
      {
        eventName: "Winter Baking Contest",
        cityName: "Terrenceberg",
        date: "2024-03-27T00:00:00.000Z",
        weather: "Snowy 22C",
        distanceKm: "63",
        imgUrl: "https://i.postimg.cc/028C1338/image.webp"
      }
    ]





function Home() {
  const [edata,setData] = useState([])
  const [updata,setUpdata] = useState([])
  useEffect(
     function eventfun(){
      setData(eventsData)
      setUpdata(Upcomming)

    },[])


    
  return (
    <>
    <Navbar/>
      <div className='eventBg'>
      <h1 className='title'>Discover Exciting Events Happen Near You - Stay Tuned For Updates!</h1>      
      <div className='recCont'>
        <p className='para'>Recomendation</p>
        <p className='para'>See All</p>
      </div>
      <ul className='hcardsList'>
        {edata.map((datas)=>(
          <Horizontalcards eventCard = {datas}/>
        ))}
      </ul>
      </div>
      <div>
        <p className='veventitle'>Upcomming Events</p>
      <ul className='vcardsList'>
        {Upcomming.map((datas)=>(
          <Verticalcards eventCard = {datas}/>
        ))}
      </ul>
      </div>
        <div className = "aboutSec">
          <div>
            <h1 className='secHead'>Services</h1>
            <ul>
              <li className='secPara'>Wedding Decor</li>
              <li className='secPara'>Wedding Management</li>
              <li className='secPara'>Conference Management</li>
              <li className='secPara'>Product Launch</li>
              <li className='secPara'>Award Ceremonies</li>
              <li className='secPara'>Mice</li>
            </ul>
          </div>
          <div>
            <h1 className='secHead'>Pages</h1>
            <ul>
              <li className='secPara'>About</li>
              <li className='secPara'>Work Gallery</li>
              <li className='secPara'>Upcomming Events</li>
              <li className='secPara'>Product Launch</li>
              
            </ul>
          </div>
          <div>
            <h1 className='secHead'>Company</h1>
            <ul>
              <li className='secPara'>Terms & Conditions</li>
              <li className='secPara'>Privacy Policy</li>
              
            </ul>
          </div>
        </div>
    </>
    
  )
}

export default Home