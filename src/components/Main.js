import React from 'react';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Nav from './Nav';
import OnePrice from './OnePrice';
import Pricing from './Pricing';
import Myvideo from '../idrive3.mp4'



function Main() {
  return (
      <div className='md:w-full'>
          
        {/* <Nav/>
        <Hero/>
        <GetInTouch/>
        <About/>
        <Pricing/>
        <ContactUs/> */}

        <header className="relative flex h-screen overflow-hidden">
          <div className='md:flex flex-col'>
            <Nav/>
            <Hero/>
          </div>
         
          <video
            autoPlay
            loop
            muted
            className="w-full absolute object-cover top-0 right-0 buttom-0 left-0  -z-50 min-h-full h-48 md:w-full max-w-none"
          >
        <source
          src= {Myvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header> 
    <GetInTouch/>
        <About/>
        <Pricing/>
        <ContactUs/>
        
      </div>);
}

export default Main;
