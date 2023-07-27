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
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <label>Email:</label>
        <input type="text" onChange={this.emailHandler} /><br /><br />
        <label>Password:</label>
        <input type="text" onChange={this.passwordHandler} /><br /><br />
        <input type="submit" value="Login" />
    </div>
    )
  }
}

export default Login