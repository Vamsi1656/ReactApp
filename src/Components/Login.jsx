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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
              <h1>Login Form</h1>
                    <pre>{JSON.stringify(this.state)}</pre>
                   
                    <form>
                    <div className='form-group'>
                    <label>Email:</label>
                    <input type="text" onChange={this.emailHandler} className='form-control'  /><br />
                    </div>
                    <div className='form-group'>
                    <label>Password:</label>
                    <input type="text" onChange={this.passwordHandler}className='form-control'  /><br /><br />
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
}

export default Login