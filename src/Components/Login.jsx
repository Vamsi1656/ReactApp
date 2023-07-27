import React, { Component } from 'react'


 class Login extends Component {
         state={
          email:"",
          password:""
         }
         emailHandler=(event)=>{
         
          this.setState({email:event.target.value})
         }
         passwordHandler=(event)=>{
        
          this.setState({password:event.target.value})
         }
         submitHandler=(event)=>{

          event.preventdefault()
          console.log(this.state)

         }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form className='form-group' >
        <label>Email:</label>
        <input type="text" onChange={this.emailHandler} className='form-control'  /><br /><br />
        <label>Password:</label>
        <input type="text" onChange={this.passwordHandler}className='form-control'  /><br /><br />
        <input type="submit" value="Login" />
        </form>
    </div>
    )
  }
}

export default Login