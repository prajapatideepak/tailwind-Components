import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-72  shadow rounded-md">
                        <img className="rounded h-56 md:h-64 " src="https://i.ibb.co/BrDj00m/Rectangle-142.png" />
                        <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-indigo-700  bg-opacity-90 rounded">
                            <div className="px-5   flex flex-col items-center">
                                <p className="text-base sm:text-xl md:text-2xl font-bold md:leading-8 text-center text-gray-100">Signup now and get free Consultation</p>
                                <button className="focus:outline-none px-6  md:px-12 py-3 bg-gray-100 hover:bg-gray-200 rounded mt-4 md:mt-8">
                                    <p className="text-xs font-semibold leading-3 text-indigo-700">Signup now</p>
                                </button>
                            </div>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-100 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
