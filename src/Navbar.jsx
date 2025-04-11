import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Catagories from './Catagories';
import { Link } from 'react-router-dom';


const catagory = [{
    name:"Live Shows"
},{
    name:"Stream"
},{
    name:"Movies"
},{
    name:"Dance Shows"
},{
    name:"Plays"
},{
    name:"Sports"
}]

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='bookingCont'>
                <h1 className='BooknowTitle'>Bookus Now</h1>
                <div className='location_info'>
                <FaLocationDot className='map'/>
                <h1 className='locatioName'>Chennai, India</h1>
                </div>
            </div>
            <div>
                <div className='catagoriesBtn'>
                    <button className='btn btn-primary catBtn'>
                        <FaBars className='barIcon'/>
                        Catagories</button>
                    <input type = "search" className='searchBar' />
                </div>
                <ul className='catagoriesBtn'>
                    {catagory.map((item)=>(
                        <Catagories data = {item}/>
                    ))}
                </ul>
            </div>

            <div>
                
                <div className='favOpt'>
                  <FaHeart className='likeIcon'/>
                    <p className='favName'>Favorites</p>
                    <Link to = "login">
                    <p> Sign-in</p>
                    </Link>
                    
                </div>
                
            </div>

        </div>
    
    </>
    
  )
}

export default Navbar