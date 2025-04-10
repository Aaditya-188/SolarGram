import React from 'react'
import image7 from "./image/4.jpg"

function WhySolargram() {
  return (
    <div className='Why_cont'>
    <div className="why-container">
    <div className='wsg'>
    <h2 className="why-heading">
      Why <span className="highlight">SOLAR</span><span className='Gram'>GRAM</span> 
    </h2>
    </div>
   

    <div className="why-content">
     
      <div className="why-text">
      
        <div className="why-item">
          <span className="icon">☀️</span>
          <p><strong>Clean and Renewable Energy:</strong> Solar energy is an abundant and inexhaustible resource. Unlike fossil fuels, it generates electricity without emitting harmful greenhouse gases or pollutants, contributing to a healthier planet.</p>
        </div>

        <div className="why-item">
          <span className="icon">🔋</span>
          <p><strong>Future-Proof Investment:</strong> Solar energy is abundant and inexhaustible, making it one of the most reliable renewable energy sources.</p>
        </div>

        <div className="why-item">
          <span className="icon">⚡</span>
          <p><strong>Our Service:</strong> Providing seamless service for a company involves creating a smooth, efficient, and consistent experience for clients.</p>
        </div>

        <div className="why-item">
          <span className="icon">🌍</span>
          <p><strong>Reduced Carbon Footprint:</strong> Switching to solar significantly lowers your carbon footprint, contributing to a cleaner environment.</p>
        </div>

        <div className="why-item">
          <span className="icon">🏠</span>
          <p><strong>Cyclone-Proof, Safe Rooftop Solar:</strong> Safe installations that can handle scary storms and winds up to 170 kmph speeds.</p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="why-image">
        <img src={image7} alt="Solar Energy" />
      </div>
    </div>
  </div>
  </div>
  )
}

export default WhySolargram
