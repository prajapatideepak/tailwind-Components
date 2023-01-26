import React, { useState } from "react";

export default function Home() {
    const [button, setButton] = useState(false);
    return (
        <>
            <div className="container mx-auto text-center py-14 md:py-20 px-4">
                <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold text-center text-gray-800">Choose the right plan for your business</h1>
                <div className="flex flex-col lg:flex-row justify-center items-strech mt-12 lg:space-x-6">
                    <div className="shadow-lg rounded p-12 lg:w-5/12">
                        <div className="w-56">
                            <button onClick={() => setButton(!button)} aria-label="Monthly or Annually Switch." className="bg-gray-200 shadow-md rounded-full flex items-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                                <div className={button ? "bg-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6" : "bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6"}>Monthly</div>
                                <div className={button ? "bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6" : "bg-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6"}>Annually</div>
                            </button>
                        </div>
                        <ul className="mt-16 md:mt-12">
                            <li className="flex justify-between">
                                <p className="text-base text-center text-gray-600">Unlimited products</p>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={8} cy={8} r="7.625" stroke="#4338CA" strokeWidth="0.75" />
                                    <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                            <li className="flex justify-between mt-6">
                                <p className="text-base text-center text-gray-600">20 Pages, Galleries</p>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={8} cy={8} r="7.625" stroke="#4338CA" strokeWidth="0.75" />
                                    <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                            <li className="flex justify-between mt-6">
                                <p className="text-base text-center text-gray-600">500 GB Bandwidth</p>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={8} cy={8} r="7.625" stroke="#4338CA" strokeWidth="0.75" />
                                    <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                            <li className="flex justify-between mt-6">
                                <p className="text-base text-center text-gray-600">Unlimited Services</p>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={8} cy={8} r="7.625" stroke="#4338CA" strokeWidth="0.75" />
                                    <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                            <li className="flex justify-between mt-6">
                                <p className="text-base text-center text-gray-600">Mobile Website and Site</p>
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={8} cy={8} r="7.625" stroke="#4338CA" strokeWidth="0.75" />
                                    <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div role="list" aria-label="Packages" className="lg:w-7/12 flex flex-col justify-between space-y-4 md:space-y-6 lg:space-y-0 mt-4 md:mt-6 lg:mt-0">
                        <div role="listitem" className="bg-white shadow-lg rounded flex justify-between  items-center py-8 px-6 md:py-9 md:px-12">
                            <div className="flex items-center">
                                <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-labelledby="starter" defaultChecked type="radio" name="radio" className="checkbox appearance-none  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                                </div>
                                <h2 id="starter" className="text-xl md:text-2xl  text-gray-600 ml-4">
                                    Starter
                                </h2>
                            </div>
                            <h3 className="font-medium text-center text-gray-600">
                                {" "}
                                <span className="text-2xl md:text-5xl text-gray-800">$19</span> /month
                            </h3>
                        </div>
                        <div role="listitem" className="bg-white shadow-lg rounded flex justify-between items-center py-8 px-6 md:py-9 md:px-12">
                            <div className="flex items-center">
                                <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-labelledby="premium" defaultChecked type="radio" name="radio" className="checkbox appearance-none  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                                </div>
                                <h2 id="premium" className="text-xl md:text-2xl  text-gray-600 ml-4">
                                    Premium
                                </h2>
                            </div>
                            <h3 className="font-medium text-center text-gray-600">
                                {" "}
                                <span className="text-2xl md:text-5xl text-gray-800">$29</span> /month
                            </h3>
                        </div>
                        <div role="listitem" className="bg-white shadow-lg rounded flex justify-between items-center py-8 px-6 md:py-9 md:px-12">
                            <div className="flex items-center">
                                <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input aria-labelledby="pro" defaultChecked type="radio" name="radio" className="checkbox appearance-none  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                                </div>
                                <h2 id="pro" className="text-xl md:text-2xl  text-gray-600 ml-4">
                                    Pro
                                </h2>
                            </div>
                            <h3 className="font-medium text-center text-gray-600">
                                {" "}
                                <span className="text-2xl md:text-5xl text-gray-800">$49</span> /month
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="mt-12 md:mt-10 lg:mt-12">
                    <button className="px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Choose Plan</button>
                </div>
            </div>

            {`<style>
             .checkbox:checked {
                        border: none;
                }
            .checkbox:checked + .check-icon {
                        display: flex;
                }
        </style>`}
        </>
    );
}
