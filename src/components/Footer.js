import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faMoneyBillWaveAlt,
  faHeart,
  faEnvelope,
  faUserPlus,
  faSign,
  faSignOutAlt


} from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footerIcons">
    <Link to="/Home">      
      <FontAwesomeIcon icon={faHome} />
      <p className= "footerText">Home</p>
    </Link> </div>
    <div className="footerIcons"> 

    <Link to="/BuyPage">
      <FontAwesomeIcon icon={faShoppingCart} />
      <p className="footerText">BUY</p>
    </Link></div>

    <div className="footerIcons"> 
    <Link to="/SellPage">
      <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
      <p className="footerText">SELL</p>
    </Link></div>
    

    <div className="footerIcons"> 
    <Link to="/PageonePage">      
      <FontAwesomeIcon icon={faHeart} />
      <p className="footerText">Temp</p>
    </Link> </div>
    
    <div className="footerIcons">
    <Link to="/ContactPage">
      <FontAwesomeIcon icon={faEnvelope} />
      <p className="footerText">CONTACT</p>
    </Link></div>

    <div className="footerIcons">
    <Link to="/SigninPage">
      <FontAwesomeIcon icon={faSign} />
      <p className="footerText">Signin</p>
    </Link></div>

    <div className="footerIcons">
    <Link to="/SignupPage">
      <FontAwesomeIcon icon={faUserPlus} />
      <p className="footerText">Signup</p>
    </Link></div>

    <div className="footerIcons">
    <Link to="/SignoutPage">
      <FontAwesomeIcon icon={faSignOutAlt} />
      <p className="footerText">Signout</p>
    </Link></div>
  </div>
);

export default Footer;