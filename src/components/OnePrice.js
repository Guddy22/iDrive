import React from 'react'

function OnePrice({heading, description,amount, subTextOne, subTextTwo, subTextThree}) {
  return (
    <div className='w-full mx-auto shadow-xl bg-white'>
            <div className='bg-otherOrange py-6 px-4'>
                <h3 className='text-white text-3xl'>{heading}</h3>
                <p className='text-white text-sm'>{description}</p>
            </div>
            <div className='bg-white p-4 space-y-8'>
                <span className='text-3xl'>{`${amount} + Tax`}</span>
                <ul className='space-y-8'>
                    <li>{subTextOne}</li>
                    <li>{subTextTwo}</li>
                    <li>{subTextThree}</li>
                </ul>

                <div className='bg-otherOrange m-4 p-4 font-semibold text-white'>
                    BOOK NOW
                </div>
            </div>
    </div>
  )
}

export default OnePrice