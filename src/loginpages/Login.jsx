import React from 'react'
import './Login.css'
import Button from '../component/HomeButton'

function Login() {
  return (
    <>
        
        <div className="login_main">
        <div className="arrowback_div">
            <img src="/public/login/arrowback.png" alt="arrowback.png" />
        </div>
            <div className="leftangle">
                <img src="/public/login/leftangle.png" alt="leftangle.png" />
            </div>
            <div className="center">
                <form >
                    <div className="emailinput">
                        <label htmlFor="">Email</label> <br />
                        <input type="email" placeholder='Enter Your Email'/>
                    </div>
                    <div className="passwordinput">
                        <label htmlFor="">Password</label> <br />
                        <input type="password" placeholder='*********' />
                    </div>
                    <div className="passwordalert">
                        <p>Please check the Password and EmailID </p>
                    </div>
                    <button id='btn'>Log ln</button>
                   <div className="already"><p>Already have an account ? <span>Register now</span></p> </div> 
                </form>
            </div>
        </div>
        <div className="righthalf">
                <img src="/public/login/righthalf.png" alt="righthalf.png" />
            </div>

        <div className="lasthalf">
            <img src="/public/login/lasthalf.png" alt="lasthalf.png" />
        </div>
    </>
  )
}

export default Login