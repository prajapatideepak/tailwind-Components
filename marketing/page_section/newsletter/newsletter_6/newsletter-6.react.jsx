import React, { useState } from "react";

const Newsletter6 = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <div id="button" className={"container mx-auto justify-center items-center px-4 md:px-10 py-20 " + (show ? "hidden" : "flex")}>
                <button onClick={() => setShow(true)} className="bg-gray-800 bg-opacity-80 border rounded-md text-white py-5 px-10 focus:outline-none hover:bg-gray-900">
                    Show Modal
                </button>
            </div>
            <div id="modal" className="flex items-center justify-center py-12">
                <div className={"w-10/12 items-center justify-center relative " + (show ? "flex" : "hidden")}>
                    <img className="hidden md:block w-full h-full absolute rounded-md" src="https://i.ibb.co/SXQ72jM/Group-780.png" alt="an envelope" />
                    <img className="block md:hidden w-full h-full absolute rounded-md" src="https://i.ibb.co/MhJJZnt/X-93.png" alt="an envelope" />
                    <div className="relative z-10 w-full">
                        <div className="flex flex-col justify-center items-center py-12 px-6">
                            <div className="absolute top-5 right-5">
                                <button onClick={() => setShow(false)}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3346 2.66675L2.66797 13.3334M13.3346 13.3334L2.66797 2.66675L13.3346 13.3334Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-center text-white pb-4">Try free for 30 days - No credit card required</p>
                            <p className="md:text-4xl text-2xl text-center font-bold text-white pb-4 md:pb-8">Get new products every months on your inbox!</p>
                            <div className="md:w-full w-3/4 flex flex-col justify-center md:flex-row gap-4 md:gap-0">
                                <input className="md:w-1/3 p-2 sm:p-4 border border-gray-300 rounded-md md:rounded-r-none bg-white focus:outline-none placeholder-gray-300" type="email" placeholder="Enter email to join" />
                                <button className="w-full md:w-32 p-2 sm:p-4 border rounded-md md:rounded-l-none bg-indigo-700 hover:bg-indigo-800 text-base font-medium text-white border-indigo-700 focus:border-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter6;
