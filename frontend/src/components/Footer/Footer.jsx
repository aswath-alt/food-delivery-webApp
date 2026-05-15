import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-content">

        {/* Left Column */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />

          <p>
            "Delivering happiness and piping hot food since 2026.
            Have a question or feedback? We're always here to help."
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        {/* Center Column */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>

          <ul>
            <li>+12-2343-34554</li>
            <li>deltomato@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2022 @ tomato.com - All Right Reserved
      </p>

    </div>
  )
}

export default Footer