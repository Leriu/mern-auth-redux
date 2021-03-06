import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  render(){
    return (
    <nav className='indigo darken-1'>
      <div className="nav-wrapper container">
        <Link to='/' className="brand-logo">Redux</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li> <Link to='/signup'>  Signup </Link> </li>
          <li> <Link to='/login'>   Login </Link> </li>
          <li> <Link to='/private'> Private</Link></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Header