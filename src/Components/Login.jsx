import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

const Login = () => {
     let [login,setLogin]=useState("")
     let [pass,setpass]=useState("")
     let [show,setshow]=useState(false)
   let  UpdateHandler=(event)=>{
      if(event.target.name==="email"){
      setLogin({email:event.target.value})

      }
      else if(event.target.name==="password"){
      setpass(event.target.value)

      }
      
  }

  const getPasswordHandler=()=>{

    setshow(!show)
  }
  return (
    <div>
      <pre>{JSON.stringify(login)}</pre>
      <pre>{JSON.stringify(pass)}</pre>
      <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
              <h1>Login Form</h1>
                    
                    <form >
                      <div className='form-group'>
                     <label>Email:</label>
                     <input type="text" name="email" onChange={UpdateHandler}  className='form-control'  /><br />
                     </div>
                     <div className='form-group'>
                     <label>Password:</label>
                     <input type="password" name="password" onChange={UpdateHandler} className='form-control'  /><br /><br />
                     <input type={show?"text":"password"} />
                     <button onClick={getPasswordHandler}>{show?"Hide":"Show"}</button> 
                     </div>
                                                 
                     <input type="submit" value="Login" />
                   
                    </form>
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Login


