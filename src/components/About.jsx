import React from 'react'
import image2 from "./image/1.jpg";
import {motion} from 'framer-motion';
function About() {
  return (
    <div className='abt'>
      <div className="about-container">
    <motion.div 
      initial={{opacity : 0,translateX : "-50%"}} 
      whileInView={{opacity : 1, translateX :0}}
      transition={{duration:1}} className="about-text">
     <div className='abs'> <h1>
       <span className="About">About</span>  <span className="highlight">SOLAR</span><span className='Gram'>GRAM </span>
      </h1></div>
      <div className='about-cont'><p>
        The solar energy industry is at the forefront of the global shift
        toward sustainable and renewable energy solutions. Harnessing the
        power of the sun, this industry has become a key player in reducing
        carbon emissions, mitigating climate change, and promoting energy
        independence across the world.
      </p>
      <p>
        Key Features of the Solar Energy Industry
        Sustainable Energy Source: Solar energy is a clean and inexhaustible
        resource that reduces dependency on fossil fuels and minimizes
        environmental impact.
      </p></div>
      
    </motion.div>

    <motion.div 
      initial={{opacity : 0,translateX: "20%"}} 
      whileInView={{opacity : 1, translateX :0}}
      transition={{duration:1}} className="about-image">
      <img
        src={image2}
        alt="Solar Panels"
      />
    </motion.div>
  </div>
    </div>
    
  )
}

export default About
