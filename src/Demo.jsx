import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Components/Login'


class Navbar extends Component {
  render() {
    return (
       
      
        <Router>
          <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to='#' className='navbar-brand'> React Application </Link>
              <div className='ml-auto'>
                <ul className='navbar-nav'>
                  <li className='nav-list'><Link  to='/home'className='nav-link'>Home</Link></li>
                  <li className='nav-list'><Link to='/about' className='nav-link'>About</Link></li>
                  <li className='nav-list'><Link to='/services' className='nav-link'>Services</Link></li>
                  <li className='nav-list'><Link to='/contact' className='nav-link'>Contact</Link></li>
                  <li className='nav-list'><Link to='/login' className='nav-link'>Login</Link></li>
                </ul>
              </div>
          </nav>
         <Routes>
         
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/services' element={<Services/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              
         
         </Routes>
         
         </Router>
    
    
    )
  }
}

export default Navbar



