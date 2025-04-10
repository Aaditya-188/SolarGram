import React from 'react'
import img1 from "./image/11.jpg"
import img2 from "./image/12.png";
import img3 from "./image/13.jpg";
import img4 from "./image/14.png";
import img5 from "./image/15.jpg";

function Mission() {
  return (
    <section className="missions-container">
      <div className="missions-content">
        <h2><b>Missions of <br/>SOLARGRAM</b></h2>
        <p>
        2502 Corn is a staple food, one of the most commonly eaten and grown in the world. 
        Corn is naturally gluten-free, and are loaded with important vitamins, minerals, 
        and antioxidants that can help your health in a number of ways.
        </p>
        <div className="mission-card">
          <h3><img src={img1} ></img>Off-Grid Solar</h3>
          <p>
          Frozen mix vegetables can often be prepared with minimal effort, 
          making them a quick and convenient alternative to fresh vegetables.
           They tend to have a longer shelf life, helping you get the most bang for your buck. 
           What’s more, they’re available ye
          </p>
        </div>
        <div className="mission-card">
          <h3><img src={img2} ></img> Hybrid Solar System</h3>
          <p>
          2502 An on-grid solar system, also known as a grid-tied solar system,
           is a popular choice for solar panel installation in Lucknow, functions alongside the grid.
            Accordingly, any excess or shortage of energy can be fed into the grid through net metering. S
          </p>
        </div>
        <div className="mission-card">
          <h3><img src={img3} ></img>Housing Society.</h3>
          <p>
          Housing Society As electricity consumption and costs continue to rise, 
          the world looks to renewable energy sources to meet its energy needs. Solar energy, 
          including Solar Panel for Home UPNEDA, has gained popularity as a renewable energy source in recent
          </p>
        </div>
        <div className="mission-card">
          <h3><img src={img4} ></img>Solar Upgrade & Mantanace.:</h3>
          <p>
          2502 As electricity consumption and costs continue to rise,
           the world looks to renewable energy sources to meet its energy needs. 
           Solar energy, including Solar Panel for Home UPNEDA, 
           has gained popularity as a renewable energy source in recent years due t
          </p>
        </div>
      </div>
      <div className="missions-image">
        <img
          src={img5}
          alt="Solar Panels"
        />
      </div>
    </section>
  )
}

export default Mission
