import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Login from './Components/Login'

class Navbar extends Component {
  render() {
    return (
       
      <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg '>
           <a href='./' className='navbar-brand'>Test</a>
           <div className='ml-auto'>
               <ul className='navbar-nav'>
                  <li className='nav-list'><Link className='nav-link' to='/home'>Home</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/about'>About</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/services'>Services</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/contact'>Contact</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/login'>Login</Link></li>
               </ul>
           </div>
        </nav>
        <Routes>
                  <Route path='/home' element={<Home/>}>Home</Route>
                  <Route path='/about' element={<About/>}>About</Route>
                  <Route path='/services' element={<Services/>}>Services</Route>
                  <Route path='/contact' element={<Contact/>}>Contact</Route>
                  <Route path='/login' element={<Login/>}>Login</Route>
        </Routes>
      </Router>
    
    )
  }
}

export default Navbar