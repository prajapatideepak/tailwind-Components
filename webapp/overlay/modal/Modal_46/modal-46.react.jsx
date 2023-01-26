import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto flex justify-center px-4">
                    <div className="relative bg-indigo-700 dark:bg-indigo-600 w-72 sm:w-10/12 md:w-8/12 lg:w-1/2 xl:w-2/5 shadow rounded">
                        <div className="sm:flex items-strech">
                            <img className="w-full h-72 sm:h-auto  object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/fNG54kh/Rectangle-138.png" />
                            <div className="pt-8 pb-4 w-full">
                                <div className="px-2.5 flex flex-col items-center w-full">
                                    <p className="text-2xl font-bold leading-6 text-gray-100">Save Big!</p>
                                    <p className="text-sm leading-5 text-center mt-2 text-gray-100">Get a discount of 30% on your first order by subscribing to our newsletter</p>
                                </div>
                                <div className="mt-4 w-full px-9">
                                    <div className="bg-white bg-opacity-30 dark:bg-indigo-800 dark:bg-opacity-100 dark:border-indigo-800 border rounded flex items-center justify-center">
                                        <input id="input1" placeholder="Full Name" className="py-3 text-center focus:outline-none bg-transparent text-xs font-semibold leading-3 text-gray-100 placeholder-gray-100" />
                                    </div>
                                    <div className="bg-white bg-opacity-30 dark:bg-indigo-800 dark:bg-opacity-100 dark:border-indigo-800 border rounded flex items-center justify-center mt-3">
                                        <input id="input2" placeholder="Enter your email" className="py-3 text-center focus:outline-none bg-transparent text-xs font-semibold leading-3 text-gray-100 placeholder-gray-100" />
                                    </div>
                                    <button className="py-3 w-full mt-4 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded text-xs font-semibold leading-3 text-indigo-700">Subscribe</button>
                                    <p className="text-xs font-semibold leading-3 text-gray-100 cursor-pointer text-center mt-3">Learn more</p>
                                </div>
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
