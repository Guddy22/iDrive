function GetInTouch(){

    return(
        // <div className="bg-blue-800 py-12 px-4 flex flex-col md:flex md:justify-between">
        <div className="bg-otherOrange p-4">
            <div className="md:flex md:justify-between md:p-16 w-5/6 mx-auto">
                <div className="text-2xl font-bold text-white md:text-4xl">
                    Get in touch with Us
                </div>
                <div className="bg-black text-white w-1/2 p-2 mt-2 border-2 border-white-600 flex items-center md:w-1/6 md:justify-center">
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default GetInTouch