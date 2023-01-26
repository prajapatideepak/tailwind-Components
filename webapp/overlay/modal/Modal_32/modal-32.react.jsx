import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-72 shadow rounded-md bg-white dark:bg-gray-800">
                        <div>
                            <div className="px-6 pt-6 pb-5">
                                <p className="text-xl font-bold leading-5 text-gray-800 dark:text-gray-100">Watch our new Video</p>
                                <p className="text-sm mt-3 leading-5 text-gray-600 dark:text-gray-300">We work really hard to deliver you the best paper products available in Scranton.</p>
                            </div>
                            <div>
                                <img className="rounded-br rounded-bl absolute bottom-0 object-cover h-24 object-center" src="https://i.ibb.co/WFXZbb1/Rectangle-139.png" />
                                <div className="bg-gray-800 rounded-br rounded-bl bg-opacity-90 w-full py-6 px-4 relative">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center cursor-pointer">
                                            <svg width={19} height={22} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 9.26795C19.3333 10.0377 19.3333 11.9623 18 12.7321L3 21.3923C1.66666 22.1621 -1.05781e-06 21.1999 -9.90511e-07 19.6603L-2.33408e-07 2.33975C-1.6611e-07 0.800144 1.66667 -0.162106 3 0.607695L18 9.26795Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="pl-3">
                                            <p className="text-base font-bold leading-4 text-gray-100">Goodbye Micheal</p>
                                            <p className="text-xs leading-3 mt-2 text-gray-100">watch and leave a review</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-800 transition duration-150 ease-in-out" >
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
