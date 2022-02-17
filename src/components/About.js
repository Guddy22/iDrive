import React from 'react'

function About() {
  return (
    <div className='flex flex-col p-4 md:md:flex justify-between'>
        <div className='md:w-3/4  mx-auto'>
            <h4 className='font-popins text-otherOrange font-semibold mb-4 mt-2 md:text-4xl'>ABOUT US</h4>
            <h2 className='mb-4 mt-2 text-3xl md:text-3xl'>iDrive Driving School</h2>
            <p className='text-xs text-gray-400 md:text-lg'>
            iDrive Driving School delivers professional and effective driving lessons in Calgary.  
            Apex Driving School is a perfect choice for those who need to learn and improve their 
            driving skills, 
            as well as to prepare for the theory test and the practical driving test.
            </p>

            <div className="bg-black text-white w-1/2 p-2 mt-2 border-2 border-white-600 mb-4 mt-6 border-0 md:w-1/6">
                READ MORE
            </div>
        </div>

        <div className='bg-gray-100'>
            <div className='flex justify-between w-2/3 py-8 mx-auto'>
                <div className='flex flex-col text-center'>
                    <span className='text-4xl text-blue-800 font-semibold'>12+</span>
                    <span className='font-[poppins]'>Years of experience</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='text-4xl text-blue-800 font-semibold'>1234+</span>
                    <span className='font-[poppins]'>No. of students</span>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default About