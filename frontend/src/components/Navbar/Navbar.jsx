import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { cartItems } = useContext(StoreContext);

  // 🧠 calculate total items in cart
  const totalCartItems = Object.values(cartItems).reduce((sum, qty) => {
    return sum + qty;
  }, 0);

  return (
    <div className='navbar'>

      <Link to='/'>
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

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
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket" />
          </Link>

          {/* ✅ ONLY SHOW DOT IF CART > 0 */}
          {totalCartItems > 0 && (
            <div className="dot">
              {totalCartItems}
            </div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>
          Sign In
        </button>

      </div>

    </div>
  );
};

export default Navbar;