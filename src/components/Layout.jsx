import React from 'react'
import HeroSection from './HeroSection';
import SolarSection from './SolarSection';
import About from './About';
import SolarBanner from './SolarBanner';
import Achievement from './Achievement';
import WhySolargram from './WhySolargram';
import Mission from './Mission';
import Projects from './Projects';
import Partners from './Partners';
import UpNext from './UpNext';
import FAQ from './FAQ';
import Footer from './Footer';
import DownFooter from './DownFooter';

function Layout() {
  return (
    <div>
      <HeroSection/>
         <SolarSection/>
         <About/>
         <SolarBanner/>
         <Achievement/>
         <WhySolargram/>
         <Mission/>
         <Projects/>
         <Partners/>
         <FAQ/>
         <UpNext/>
         <Footer/>
         <DownFooter/>
    </div>
  )
}

export default Layout
