import React from 'react'
import OnePrice from './OnePrice'

function Pricing() {
  return (
    <div className='bg-gray-200 text-center p-4'>
        <div className='p-8'>
            <h4 className='text-otherOrange mb-4 text-xl md:text-4xl'>PRICING</h4>
            <h3 className='mb-4 font-bold text-2xl'>Our Flexible Pricing Plan</h3>
            <p className='mb-4 text-sm text-gray'>
            Our flexible pricing plan is designed with each and everyone in mind. 
            We offer the most comprehensive driving courses to meet every students needs.
            </p>
        </div>
      

        <div className='md:flex justify-between md:space-x-4'>
            <OnePrice heading={`Brush Up Course`} 
            description={`For Calgary NW & Downtown  (Including Coventry Hills, Harvest Hills &  Livingston)`} 
            amount={`499`} 
            subTextOne={`2 Hours of Driving Lessons	`} 
            subTextTwo={`Basic Driving Techniques`} 
            subTextThree={`Online Class Addon For $40`}/>

            <OnePrice heading={`Full Course`} 
            description={`For Calgary NW & Downtown  (Including Coventry Hills, Harvest Hills &  Livingston)`} 
            amount={`499`} 
            subTextOne={`2 Hours of Driving Lessons	`} 
            subTextTwo={`Basic Driving Techniques`} 
            subTextThree={`Online Class Addon For $40`}/>

            <OnePrice heading={`Brush Up Course`} 
            description={`For Calgary NW & Downtown  (Including Coventry Hills, Harvest Hills &  Livingston)`} 
            amount={`499`} 
            subTextOne={`2 Hours of Driving Lessons	`} 
            subTextTwo={`Basic Driving Techniques`} 
            subTextThree={`Online Class Addon For $40`}/>

        </div>

    </div>
  )
}

export default Pricing