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
          <p>Fresh and tasty meals, made with love and delivered to you!</p>


          <div className="footer-social-icons">
          <a href="https://www.facebook.com/profile.php?id=100091455713940" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={assets.twitter_icon} alt="Twitter" />
             </a>
            {/* <img src={assets.linkedin_icon} alt="" /> */}
            <a href="https://www.linkedin.com/in/babul-yadav1211" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
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
            <li>babulkr1211@gmail.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Babul Kumar - All Rights Reserved.</p>

    </div>
  );
}

export default Footer;
