import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-72 shadow rounded">
                        <div className="relative">
                            <img className="rounded" src="https://i.ibb.co/WPS7r3g/Group-40.png" />
                        </div>
                        <div className="absolute py-12 px-6 inset-0">
                            <div className="flex flex-col w-full items-center justify-center">
                                <p className="text-2xl font-bold leading-6 text-gray-100">Subscribe</p>
                                <p className="text-sm leading-5 text-center text-gray-100 mt-4">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                                <div className="mt-10 w-full">
                                    <div className="bg-white bg-opacity-40  border rounded flex items-center justify-center">
                                        <input id="input1" placeholder="Enter your email" className="py-3 text-center focus:outline-none bg-transparent text-xs font-semibold leading-3 text-gray-100 placeholder-gray-100" />
                                    </div>
                                    <button className="mt-4 w-full py-3  bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded">
                                        <p className="text-sm font-medium leading-none text-gray-100">Subscribe</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-white transition duration-150 ease-in-out">
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
