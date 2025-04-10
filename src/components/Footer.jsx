import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import image1 from "./image/solarlogo.png";

function Footer() {
  return (
    
    // <footer className="footer" >
    //  <div className="overlay"></div>
    //   <div className="footer-container" >
    //     <div className="footer-section">
    //       <h2 className="footer-logo"> <img src={image1}></img></h2>
         
    //       <div className="footer-social">
    //         <a href="#"><FaFacebook /></a>
    //         <a href="#"><FaTwitter /></a>
    //         <a href="#"><FaLinkedin /></a>
    //         <a href="#"><FaWhatsapp /></a>
    //       </div>
    //     </div>

    //     <div className="footer-section">
    //       <h3>INFORMATION</h3>
    //       <ul>
    //         <li><a href="#">➤Home</a></li>
    //         <li><a href="#">➤Products</a></li>
    //         <li><a href="#">➤Contact Us</a></li>
    //         <li><a href="#">➤Terms & Conditions</a></li>
    //         <li><a href="#">➤FAQs</a></li>
    //       </ul>
    //     </div>

    //     <div className="footer-section">
    //       <h3>GET IN TOUCH</h3>
    //       <p><strong><b>Address:</b><br/></strong> NH753, Tiroda Road, Gondia (MS) 441614</p>
    //       <p><strong><b>Phone:</b><br/></strong> +919970906129</p>
    //       <p><strong><b>Email:</b><br/></strong> hello@solargram.in</p>
    //     </div>
    //   </div>

    // </footer>
    <footer className="footer">
   
    <div className="footer-container">
      {/* Logo & Social Media Links */}
      <div className="footer-section">
        <img src={image1}  alt="SolarGram Logo" className="footer-logo" />
        <div className="social-links">
        <a href="#"><FaFacebook /></a>
             <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
           <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Information Links */}
      <div className="footer-section">
        <h3>INFORMATION</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contacts Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3>GET IN TOUCH</h3>
        <p><strong>Address:</strong> NH753, Tiroda Road, Gondia (MS)</p>
        <p><strong>Phone:</strong> +91 99970096129</p>
        <p><strong>Email:</strong> hello@solargram.in</p>
      </div>
    </div>


    {/* Location Links
    <div className="location-container">
      <h4>SOLARGRAM present here</h4>
      <div className="locations">
        <strong>Maharashtra:</strong> Solar in Gondia, Solar in Nagpur, Solar in Pune, Solar in Thane, Solar in Nashik...
        <strong>Madhya Pradesh:</strong> Solar in Bhopal, Solar in Indore, Solar in Ujjain, Solar in Jabalpur...
        <strong>Chhattisgarh:</strong> Solar in Raipur, Solar in Bilaspur, Solar in Durg...
        <strong>Telangana:</strong> Solar in Hyderabad, Solar in Warangal...
        <strong>Uttar Pradesh:</strong> Solar in Lucknow, Solar in Varanasi, Solar in Meerut...
      </div>
    </div>

    {/* Copyright */}
    {/* <div className="footer-bottom">
      <p>Proudly made in India ❤️</p>
    </div> */} 
  </footer>
  )
}

export default Footer
