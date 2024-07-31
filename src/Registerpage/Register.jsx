import React, { useState } from 'react'
import './Register.css'

function Register() {

    const [user,setUser] = useState(
        {
            username:"", email:"", password:"",cpassword:""
        }
    )

    let name,value;

    const handleInputs  = (e)=>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value})
    }

  return (
    <>
              
        <div className="login_main">
        <div className="arrowback_div">
            <img src="/public/login/arrowback.png" alt="arrowback.png" />
        </div>
        {/* left angle  */}
            <div className="leftangle">
                <img src="/public/login/leftangle.png" alt="leftangle.png" />
            </div>
            {/* center-form code */}
            <div className="center">
                <form >
                <div className="username">
                        <label htmlFor="username">Username</label> <br />
                        <input type="text" id='username' name='username' placeholder='Enter a username' 
                        value={user.username} onChange={handleInputs} autoComplete='off'/>
                    </div>

                    <div className="emailinput">
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" id='email' name='email' placeholder='Enter Your Email'
                        value={user.email} onChange={handleInputs} autoComplete='off'/>
                    </div>

                    <div className="passwordinput">
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" id='password' name='password' placeholder='*********' 
                        value={user.password} onChange={handleInputs} autoComplete='off'/>
                    </div>

                    <div className="confirmpassword">
                        <label htmlFor="cpassword">Confirm Password</label> <br />
                        <input type="password" id='cpassword' name='cpassword' placeholder='*********' 
                        value={user.cpassword} onChange={handleInputs} autoComplete='off'/>
                    </div>
                    <div className="passwordalert">
                        <p>Please check the Password and EmailID </p>
                    </div>
                    {/* button code */}
                    <button id='btn'>Sign Up</button>
                   <div className="already"><p>Already have an account ? <span>Login</span></p> </div> 
                </form>
            </div>
        </div>
        {/* right-half code */}
        <div className="righthalf">
                <img src="/public/login/righthalf.png" alt="righthalf.png" />
            </div>

        <div className="lasthalf">
            <img src="/public/login/lasthalf.png" alt="lasthalf.png" />
        </div>
    
    </>
  )
}

export default Register