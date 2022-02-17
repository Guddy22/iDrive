import React from 'react';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Nav from './Nav';
import OnePrice from './OnePrice';
import Pricing from './Pricing';


function Main() {
  return (
      <div className=''>
          
        <Nav/>
        <Hero/>
        <GetInTouch/>
        <About/>
        <Pricing/>
        <ContactUs/>
        
      </div>);
}

export default Main;
