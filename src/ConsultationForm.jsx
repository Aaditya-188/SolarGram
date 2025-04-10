import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaMapPin } from "react-icons/fa";


const ConsultForm = () => {
  return (
    <div className="consult-container">
      <div className="left-section">
        <h2>Schedule a <span className="highlight">FREE consultation</span> with us today!</h2>
        <p>Get genuine advice from our solar experts. No pressure, book only if you are satisfied!</p>
      </div>

      <div className="right-section">
        <h3>Write a <span className="highlight">Message!</span></h3>
        
        <form>
          <div className="input-field">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-field">
            <FaPhone className="icon" />
            <input type="text" placeholder="phone" />
          </div>

          <label className="label">Monthly Electricity Bill</label>
          <div className="btn-group">
            <button type="button">Less than ₹1500</button>
            <button type="button">₹1500 - ₹3000</button>
            <button type="button">₹3000 - ₹5000</button>
            <button type="button">₹5000 - ₹9000</button>
            <button type="button">More than ₹9000</button>
          </div>

          <div className="input-group">
            <div className="input-field">
              <FaMapPin className="icon" />
              <input type="text" placeholder="Pin Code" />
            </div>

            <div className="input-field">
              <FaCity className="icon" />
              <input type="text" placeholder="City" />
            </div>
          </div>

          <div className="input-field">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="checkbox-container">
  <input type="checkbox" id="agree" />
  <label htmlFor="agree">
    <span>I agree to SolarGram’s</span> <a href="#">terms of service</a> & <a href="#">privacy policy</a>.
  </label>
</div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;
