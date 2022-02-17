import React, { useState } from 'react';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }



  return (
        <div>
            
        <div className='w-full p-4 items-center flex justify-between md:w-5/6 mx-auto'>
              <div>
                  <span className='text-lg text-black md:font-bold text-3xl text-white'>iDrive Driving School</span>
              </div>
                
              
              <ul className='flex hidden md:flex justify between md:block text-black'>
                  <li className='px-4 py-4 cursor-pointer font-[poppins]'>Home</li>
                  <li className='px-4 py-4 cursor-pointer font-[poppins]'>Services</li>
                  <li className='px-4 py-4 cursor-pointer font-[poppins]'> About Us</li>
                  <li className='px-4 py-4 cursor-pointer font-[poppins]'>Contact U</li>
              </ul>
              

                <svg onClick={()=>toggleMenu()} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

              <div className='bg-otherOrange text-center py-2 hidden md:block w-28 text-white font-bold rounded-full'>
                  Book Now
              </div>
        </div>
            <div className='text-center flex flex-col bg-blue-500 space-y-4 md:hidden'>
                {isOpen?(
                    <>
                    <span className="flex flex-start" onClick={()=>setIsOpen(false)}>X</span>
                    <span>Home</span>
                    <span>Services</span>
                    <span>About Us</span>
                    <span>Contact Us</span> 
                    <span>
                        <div className='bg-red-400 text-center py-2 '>
                             Book Now
                        </div>
                    </span>
                    </>
                    ):(
                    ""
                )}
                 
            </div>
              
  </div>);
}
