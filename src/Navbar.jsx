import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Login from './Components/Login'

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className='navbar navbar-dark bg-light navbar-expand-lg '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf16tX-GP19z8oLHe1Owhsk0-H6GFFhLQUQ&usqp=CAU" width={100} alt="" />
          <Link to='/#' className='navbar-brand' style={{color:'black',fontSize:'80'}}>Digital Technologies</Link>
           <div className='ml-auto abc'>
               <ul className='navbar-nav'>
                  <li className='nav-list'><Link className='nav-link' to='/home'style={{color:'black',fontSize:'20'}} >Home</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/about'style={{color:'black',fontSize:'20'}}>About</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/services'style={{color:'black',fontSize:'20'}}>Services</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/contact'style={{color:'black',fontSize:'20'}}>Contact</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/login'style={{color:'black',fontSize:'20'}}>Login</Link></li>
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