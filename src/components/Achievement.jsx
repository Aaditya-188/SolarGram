import React from 'react'
import image6 from './image/3.jpg'
function Achievement() {
  return (
    <div className='ach'>
       <div className="achievement-container">
    <h2 className="achievement-heading">
      Our <span className="highlight">Achievement</span>
    </h2>
    
    <div className="achievement-content">
      {/* Left Side - Image */}
      <div className="achievement-image">
        <img
          src={image6}
          alt="Solar Projects"
        />
      </div>

      {/* Right Side - Stats */}
      <div className="achievement-stats">
        <div className="stat-box">
          <h3>27MW+</h3>
          <p>Solar Projects</p>
        </div>
        <div className="stat-box">
          <h3>42+</h3>
          <p>Cities Presence Pan India</p>
        </div>
        <div className="stat-box">
          <h3>90%</h3>
          <p>Energy Saving</p>
        </div>
        <div className="stat-box">
          <h3>86</h3>
          <p>Our Partner</p>
        </div>
      </div>
    </div>
  </div>
    </div>
   
  )
}

export default Achievement
