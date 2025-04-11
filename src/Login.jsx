import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
// import {useHistory,withRouter} from "react-router-dom"

const Login = (props) => {
  // const history = useHistory();
  const [userName,setUsername] = useState("")
  const [passWord,setPassword] = useState("")

  const onLogin = (e)=>{
    e.preventDefault();
  }
  const getUser=(e)=>{
      setUsername(e.target.value)
  }
  const getPass=(e)=>{
    setPassword(e.target.value)
}

  return (
    
        <form className='loginCard' onSubmit = {onLogin}>
          <div className='inputCard'>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input onChange = {getUser} value={userName} type="email" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={getPass} value={passWord} type="password" className="form-control input" id="exampleInputPassword1"/>
            
        </div>
            <Link to = "/">
            <button className="btn btn-primary">Submit</button>
            </Link>
        


          </div>
        
        
        </form>
  
    
  )
}

export default Login