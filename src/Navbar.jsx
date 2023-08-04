import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Cakes from './Components/Cakes'
import Coffee from './Components/Coffee'
import Fooditems from './Components/Fooditems'
import Smoothies from './Components/Smoothies'
import Login from './Components/Login'

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav className='navbar navbar-dark bg-light navbar-expand-lg '>
          
          <Link to='/#' className='navbar-brand' style={{color:'black',fontSize:'50'}}>Cafe</Link>
           <div className='ml-auto abc'>
               <ul className='navbar-nav'>
                  <li className='nav-list'><Link className='nav-link' to='/home'style={{color:'black',fontSize:'20'}} >Home</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/cakes'style={{color:'black',fontSize:'20'}}>Cakes</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/coffee'style={{color:'black',fontSize:'20'}}>Coffee</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/fooditems'style={{color:'black',fontSize:'20'}}>Fooditems</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/smoothies'style={{color:'black',fontSize:'20'}}>Smoothies</Link></li>
                  <li className='nav-list'><Link className='nav-link' to='/login'style={{color:'black',fontSize:'20'}}>Login</Link></li>
               </ul>
           </div>
        </nav>
        <Routes>
                  <Route path='/home' element={<Home/>}>Home</Route>
                  <Route path='/cakes' element={<Cakes/>}>Cakes</Route>
                  <Route path='/coffee' element={<Coffee/>}>Coffee</Route>
                  <Route path='/smoothies' element={<Smoothies/>}>Smoothies</Route>
                  <Route path='/fooditems' element={<Fooditems/>}>Fooditems</Route>
                  <Route path='/login' element={<Login/>}>Login</Route>
        </Routes>
      </Router>
    
    )
  }
}

export default Navbar