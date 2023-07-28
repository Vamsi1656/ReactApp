import React, { Component } from 'react'


 class Login extends Component {
         state={
          email:"",
          password:""
         }
          UpdateHandler=(event)=>{

            this.setState({[event.target.name]: event.target.value})
          }
         submitHandler=(event)=>{

          event.preventDefault()
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
                   
                    <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={this.UpdateHandler} className='form-control'  /><br />
                    </div>
                    <div className='form-group'>
                    <label>Password:</label>
                    <input type="text" name="password" onChange={this.UpdateHandler}className='form-control'  /><br /><br />
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