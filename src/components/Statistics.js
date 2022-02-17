import React from 'react'

function Statistics() {
  return (
    <div className='bg-gray-100'>
        <div className='flex justify-between w-4/5 py-8 mx-auto'>
            <div className='flex flex-col text-center'>
                <span className='text-4xl text-otherOrange font-semibold md:text-text-otherOrange'>12+</span>
                <span className='font-[poppins]'>Years of experience</span>
            </div>
            <div className='flex flex-col text-center'>
                <span className='text-4xl text-otherOrange font-semibold md:text-text-otherOrange'>1234+</span>
                <span className='font-[poppins]'>No. of students</span>
            </div>
        </div>
    </div>
  )
}

export default Statistics