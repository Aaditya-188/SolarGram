import React from 'react'

function ContactUs() {
  return (
    <div>
         <section className="blog-section">
    <div className="overlay"></div> {/* Dark Overlay */}
    <div className="container text-center content">
      <h2 className="blog-title">
         <span className="highlight">Contact</span>
      </h2>
      <p className="blog-details">→ Contact Details</p>
    </div>
    
  </section>
  <div>
  <h2 className="contacts-title">
          <span className="highlight">Connect</span> With Us
        </h2>

        <div className="row container-fluid justify-content-center">
          {/* Address Card */}
<div></div>
          <div className="col-md-4 ">
            <div className="contact-card ">
              <img src="https://img.icons8.com/ios/50/map-marker.png" alt="Address" />
              <h5>Our Address</h5>
              <p>SOLARGRAM</p>
              <p>NH753, Tirora Road, Gondia (MS)</p>
            </div>
          </div>

          {/* Phone Number Card */}
          <div className="col-md-4">
            <div className="contact-card">
              <img src="https://img.icons8.com/ios/50/phone.png" alt="Phone" />
              <h5>Phone Number</h5>
              <p>+919790906129</p>
              <p>+919790906129</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="col-md-4">
            <div className="contact-card">
              <img src="https://img.icons8.com/ios/50/email.png" alt="Email" />
              <h5>Email Address</h5>
              <p>hello@solargram.in</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.006058373488!2d79.9300323154029!3d21.46232208572042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd31fc579bf90af%3A0xa87b9a41d8b8c2a0!2sSOLARGRAM!5e0!3m2!1sen!2sin!4v1642605644352"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  </div>
 
   
  )
}

export default ContactUs
