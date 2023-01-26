import React from "react";

function MyApp() {
   
    return (
        <>
            <div className="flex items-center justify-center py-8 bg-gray-300 px-4" >
            <div className="bg-white rounded-lg xl:w-10/12 md:w-11/12 w-full px-5 py-10 sm:py-10 sm:px-10">
            <div className="bg-gray-50 rounded py-6 xl:px-24 px-4 flex items-center justify-center">

                <div className="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 items-center">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <p className="text-base text-white">1</p>
                        </div>
                        <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6  text-green-600">Cabin</p>
                    </div>
                    <div className="mx-8 sm:block hidden ">
                        <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="47" y2="1" stroke="#059669" stroke-width="2" />
                        </svg>
                    </div>
                    <div className="flex items-center sm:mt-0 mt-4">
                        <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center">
                            <p className="text-base text-white">2</p>
                        </div>
                        <p  className="text-base leading-4 ml-6 md:ml-3 lg:ml-6 text-indigo-700">Meal</p>
                    </div>
                    <div className="sm:mx-4  md:mx-8 sm:block hidden">
                        <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="47" y2="1" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="5 5" />
                        </svg>
                    </div>
                    <div className="flex items-center md:mt-0 mt-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <p className="text-base text-gray-900">3</p>
                        </div>
                        <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6 text-gray-900">Upgrades</p>
                    </div>
                    <div className="mx-8 md:mt-0 mt-4 sm:block hidden">
                        <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="47" y2="1" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="5 5" />
                        </svg>
                    </div>
                    <div className="flex items-center lg:mt-0 mt-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <p className="text-base text-gray-900">4</p>
                        </div>
                        <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6 text-gray-900">Payments</p>
                    </div>
                   
                </div>
            </div>
            <div>
                <h1 role="heading" className="text-2xl font-semibold leading-6 mt-8 text-gray-900">Meal Preferences</h1>
                <p className="text-base leading-6 mt-4 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
            </div>
            <div className="w-full md:flex items-center justify-between mt-7">
                <div className="md:w-3/5 w-full">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="breakfast">Breakfast</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="breakfast">
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 md:pl-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="drinks">Drinks</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="drinks">
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:flex items-center justify-between mt-7">
                <div className="md:w-3/5">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="lunch">Lunch</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="lunch" >
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 md:pl-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="drinks" >Drinks</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="drinks">
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:flex items-center justify-between mt-7">
                <div className="md:w-3/5">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="dinner" >Dinner</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="dinner">
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Half fried eggs and toast</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 md:pl-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-4 text-center text-gray-600" id="drinks">Drinks</label>
                    <div className="border rounded border-gray-300 w-full mt-4 relative">
                        <select tabindex="0" arial-label="Select option" className="w-full p-6 foucs:outline-none appearance-none" aria-labelledby="drinks">
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                            <option className="text-base leading-none text-center text-gray-900 capitalize truncate">Tea</option>
                        </select>
                        <div className="absolute right-0 top-6 mr-6 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M6 9L12 15L18 9" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2 flex-row mt-12">
                <button className="text-base font-medium leading-4 border rounded border-gray-300 text-center text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none py-3.5 px-10 w-2/3 sm:w-auto">Back</button>
                <button className="text-base font-medium leading-4 py-3.5 px-6 bg-indigo-700 rounded  text-center text-white hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none w-2/3 sm:w-auto">Continue</button>
            </div>
                </div>
        </div>
        </>
    );
}

export default MyApp;
