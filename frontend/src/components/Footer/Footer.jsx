import React from 'react';
import "./Footer.css"
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={ assets.logo} alt=""/> */}
          <h1 className="footer-clr">Fooding.com</h1>
          <p>Lorem ipsum dolor, si. beatae ducimus nesciunt commodi nemo assumenda? Vero, dicta.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li> Delivery</li>
            <li> Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
         <h2> GET IN TOUCH</h2>
         <ul>
            <li>+91-9508568903</li>
            <li>contact@fooding.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Babul Kumar - All Rights Reserved.</p>

    </div>
  );
}

export default Footer;
