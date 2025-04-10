import React from 'react'
import image2 from "./image/Save.png"

import {motion} from 'framer-motion';

function UpNext() {
  return (
    <div className="solar-container">
      <header className="solar-header">
        <div className='up'><h1 >
         <span className='UpNext'>Up Next</span>  <span className="highlight">SOLOAR</span><span className='Gram'>GRAM</span>
        </h1></div>
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

export default UpNext
