import React, { useState } from 'react'
import './navbar.css';

import logo from '../../Shop_Asset/logo.avif';
const Navbar = () => {

  const [menu,setMenu]=useState('home')
  return (
    <div className='navbar'>
      <img className='nav-logo' src={logo}  alt='logo' />
      <ul className='nav-menu'>
        <li   className={menu ==='home'?'active':""}>home </li>
        <li className={menu === "menu"?"active":""}>menu</li>
        <li className={menu === "mobile-app"?"active":""}>mobile-app</li>
        <li className={menu === "contact-us"?"active":""}>contact-us</li>
      </ul>
      <div className='navbar-search-login'>
         
      </div>
    </div>
  )
}

export default Navbar
