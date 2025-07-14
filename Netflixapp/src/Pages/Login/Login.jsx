// import React from 'react'
// import  './Login.css'
// import { useState } from 'react'
// import logo from '../../assets/logo.png'


// function Login() {
//   const [signState,setSignstate]=useState("Sign In")

//   return (
//     <div className='login'>
//       <img src={logo} className="login-logo" alt="" />
//       <div className="login-form">
//           <h1>{signState}</h1>
//           <form>
//             {signState ==="Sign Up" ?  <input type="text" placeholder='Your name'/> :<></>}  {/* // only display your name feild in Sign Up time o */}
                                                                                
           
//             <input type="email" placeholder='Email' />
//             <input type="password" placeholder='Password' />
//             <button>{signState}</button>
//             <div className="form-help">
//               <div className="remember">
//               <input type="checkbox" />
//               <label htmlFor="">Remember me!</label>
//               </div>
//               <p>Need Help?</p>
//             </div>

//           </form>
//           <div className="form-switch">
//             {signState ==="Sign In" ? 
//             <p>New to Netflix? <span onClick={()=>{setSignstate("Sign Up")}}>Sign Up Now</span></p>
//             :<p>Already have an Acount <span onClick={()=>{setSignstate("Sign In")}}>Sign In Now</span></p>
//             }
            
            
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  const [signState, setSignState] = useState("Sign In")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const fixedEmail = "user@gmail.com"
    const fixedPassword = "123456"

    if (email === fixedEmail && password === fixedPassword) {
      navigate("/") // Redirect to Home page
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input type="text" placeholder='Your name' />
          )}

          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{signState}</button>

          {error && <p className="error">{error}</p>}

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me!</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
