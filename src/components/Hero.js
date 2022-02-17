import React from 'react';

function Hero() {
  return (
    <div className='text-center p-4 md:w-3/4 mx-auto h-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl text-white mt-8 md:text-6xl text-white'>
              Individually Tailored Driving Lessons
          </h1>

          <p className='mt-8 text-center text-white md:w-3/4 mx-auto text-white'>
              iDrive is Calgary’s most trusted driving school, offering expert tuition to everyone from complete beginners to experienced drivers. 
              We want you to have a safe and fun experience on the road. 
              We help you learn from your mistakes in a positive environment at our own pace.
         </p>

        <div className='w-full md:flex justify-between md:w-1/2 mx-auto md:space-x-4 '>
            <div className='w-full p-4 border-2 border-none mt-8 text-white bg-otherOrange md:font-bold md:animate-bounce'>
                GET ENROLLED
            </div>

            <div className='w-full p-4 border-2 border-otherOrange mt-8 text-otherOrange md:font-bold md:animate-bounce'>
                CHECK COURSES
            </div>
        </div>
        

    </div>);
}

export default Hero;