import React from 'react'
import './Errorpage.css'
import { NavLink } from 'react-router-dom'

function Errorpage() {
  return (
        <>
            <div className="error">
                <div className="errormain">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking it might have been removed <br />
                    Please Check the URL</p>
                </div>
            </div>
            <div className="btn">
                <NavLink to="/" id='btn' >Back To Homepage</NavLink>
            </div>
            
        </>
  )
}

export default Errorpage