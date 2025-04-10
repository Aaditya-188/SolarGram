import React from 'react'
import About from './components/About'

function AboutUs() {
  return (
    <div>
       <section className="blog-section">
      <div className="overlay"></div> {/* Dark Overlay */}
      <div className="container text-center content">
        <h2 className="blog-title">
           <span className="">About </span><span className="highlight">SOLARGRAM</span>
        </h2>
        <p className="blog-details">→ About Us</p>
      </div>
    </section>
    <About/>

    </div>
  )
}

export default AboutUs
