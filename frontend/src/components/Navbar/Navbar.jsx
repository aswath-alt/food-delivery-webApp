import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>

      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">

        <li>
          <Link
            to='/'
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <a
            href='#explore-menu'
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href='#app-download'
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>

        <li>
          <a
            href='#footer'
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>

      </ul>

      <div className="navbar-right">

        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>

      </div>

    </div>
  )
}

export default Navbar