import React from "react";

function MyApp() {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex sm:w-10/12 mt-20 -mb-20 items-center justify-center">
                    <div className="w-full bg-white rounded-lg">
                        <div className="py-10 lg:px-28 px-10 flex sm:flex-row flex-col items-center sm:justify-between justify-center">
                            <div>
                                <h1 role="heading" className="lg:text-3xl text-xl font-bold text-gray-800">
                                    Avail the oppurtunity
                                </h1>
                                <p role="contentinfo" className="lg:text-2xl text-lg font-medium leading-6 mt-4 text-gray-800">
                                    Join us.
                                </p>
                            </div>
                            <button role="button" aria-label="join us" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 lg:w-28 w-16 lg:h-20 h-12 bg-gray-50 rounded-lg flex items-center justify-center md:mt-0 mt-8">
                                <svg className="lg:w-12 w-8 lg:h-12 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 24H38" stroke="#1F2937" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30 32L38 24" stroke="#1F2937" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30 16L38 24" stroke="#1F2937" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 w-full h-full flex pb-16 pt-44 px-12">
                <div className="xl:w-4/12" />
                <div className="lg:flex items-start">
                    <div className="md:flex">
                        <div>
                            <h2 className="text-xl font-semibold leading-5 text-white">ABOUT US</h2>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-7">
                                Store Locator
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Gift cards
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Lufu Group
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Careers
                            </p>
                        </div>
                        <div className="md:pl-28 md:pt-0 pt-14">
                            <h2 className="text-xl font-semibold leading-5 text-white">SUPPORT</h2>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-7">
                                Contact us
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Size guide
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Shipping
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Payment security
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Order tracking
                            </p>
                        </div>
                    </div>
                    <div className="md:flex lg:mt-0 mt-14">
                        <div className="lg:pl-28">
                            <h2 className="text-xl font-semibold leading-5 text-white">LEGAL</h2>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-7">
                                Privacy policy
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Cookie Policy
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Trademark
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Terms of use
                            </p>
                        </div>
                        <div className="md:pl-28 md:pt-0 pt-14">
                            <h2 className="text-xl font-semibold leading-5 text-white">VISIT US</h2>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-7">
                                Mayfair
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Melbourne
                            </p>
                            <p role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm cursor-pointer leading-none text-white mt-6">
                                Wimbledon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
