import React from 'react'

function ContactUs() {
  return (
    <section>
        <div className="bg-otherOrange text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24 md:w-3/4">
                <div className="flex flex-col w-full lg:w-1/3 p-8">
                    {/* <p className="ml-6 text-yellow-300 text-4xl text-lg uppercase tracking-loose">iDrive Driving School</p> */}
                    <p className="text-3xl md:text-4xl my-4 leading-relaxed md:leading-snug">Leave us a feedback!</p>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Get in touch with us if you need any assistance with any issues. 
                        Also if we could add anything to make your experience better let us know!
                    </p>

                    <div className='flex flex-col mt-4'>
                        <span className='mt-2 text-4xl font-normal'>Call Directly</span>
                        <p className='text-2xl'>+1 403 568 9999</p>
                    </div>

                    <div className='flex flex-col mt-4'>
                        <span className='mt-2 text-4xl font-normal'>Address</span>
                        <p className='text-2xl'>
                            71 Coral Springs Grove NE, Calgary, Alberta T3J 3T7
                        </p>
                    </div>

                    <div className='flex mt-4'>
                        
                    </div>


                </div>
                <div className="flex flex-col w-full lg:w-2/3 justify-center">
                    <div className="container w-full px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
                                        <form id="feedbackForm" action="" method="">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="fullname">Full Name</label><input type="text" name="fullname" id="fullname" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                                            bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder="e.g John Doe"
                                                style={{transition: 'all 0.15s ease 0s'}} required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                                            bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" e.g johndoe@gmail.com"
                                                style={{transition: 'all 0.15s ease 0s'}} required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="phone">Phone Number</label><input type="number" name="phone" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                                            bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" e.g 024XXXXXX"
                                                style={{transition: 'all 0.15s ease 0s'}} required />
                                            </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message</label>
                                                        <textarea maxLength="300" name="feedback" id="feedback" rows="4"
                                                        cols="80"
                                                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                        placeholder="" required>
                                                        </textarea>
                                                </div>
                                                <div className="text-center mt-6">
                                                    <button id="feedbackBtn"
                            className="bg-otherOrange text-black text-center mx-auto active:bg-otherOrange text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit" style={{transition: 'all 0.15s ease 0s'}}>Submit
                        </button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               

            </div>
        </div>
    </section>
  )
}

export default ContactUs