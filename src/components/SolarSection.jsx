import React from 'react'
import image2 from "./image/Save.png";

import {motion} from 'framer-motion';

function SolarSection() {
  return (
    <div className="solar-container">
      <header className="solar-header">
        <h1>
          Save <span className="highlight">Energy</span>, Safe Tomorrow
        </h1>
      </header>

      <motion.div 
      initial={{opacity : 0,translateY : "30%"}} 
      whileInView={{opacity : 1, translateY :0}}
      transition={{duration:1}}
      className="solar-content">
      
        <img
          src={image2}
          alt="Solar Panels"
          className="solar-image"
        />

       
      </motion.div>
    </div>
  )
}

export default SolarSection
