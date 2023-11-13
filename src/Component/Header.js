import React from 'react'
import logo from '../assets/images/Lemon-logo.png'
import Nav from './Nav'
const Header = () => {
  return (
    <div className='header'>
    <div className='logo-container'>
        <img src={logo} alt="logo" />
    </div>
    <Nav />
    </div>
  )
}

export default Header