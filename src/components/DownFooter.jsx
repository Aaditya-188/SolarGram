import React from 'react'

function DownFooter() {
  return (
    <footer className="Downfooter">
    <div className="footer-container">
      {/* Information Section */}
      <div className="footer-section">
        <h6><b>SOLARGRAM present here</b></h6>
        <div className="locations">
          <p><strong>Maharashtra:</strong> <span>Solar in Gondia, Solar in Nagpur, Solar in Pune, Solar in Thane, Solar in Nashik...</span></p>
          <p><strong>Madhya Pradesh:</strong> <span>Solar in Bhopal, Solar in Indore, Solar in Ujjain, Solar in Jabalpur...</span></p>
          <p><strong>Chhattisgarh:</strong><span>Solar in Raipur, Solar in Bilaspur, Solar in Durg...</span> </p>
          <p><strong>Telangana:</strong><span>Solar in Hyderabad, Solar in Warangal...</span> </p>
          <p><strong>Uttar Pradesh:</strong><span>Solar in Lucknow, Solar in Varanasi, Solar in Meerut...</span> </p>
          <p>Proudly made in India ❤️</p>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="footer-bottom">
      <p>Copyright ©2025-26 All Rights Reserved.</p>
      <p>Designed & Developed by <span className="highlight">Alphawizz Technologies</span></p>
      
    </div>
  </footer>
  )
}

export default DownFooter
