import React from 'react'

import logo from '../assets/logo.png'
function Header() {
  return (
    <div className='header'>
        <div>
        <img src={logo} className='logo' />
       <h3> Placement Service </h3>
       </div>
    </div>
  )
}

export default Header