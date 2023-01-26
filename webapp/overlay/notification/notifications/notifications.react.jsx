import React from "react";

function MyApp() {
    return (
        <div>
            <div className="w-full h-full bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification">
                    <div className="xl:w-2/5 md:w-7/12 w-full absolute bg-gray-900 shadow h-full right-0">
                        <div className="md:p-10 p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-3xl font-bold leading-loose text-white">Recent Updates</p>
                                <div role="button" tabIndex={0} aria-label="close Notification" className="cursor-pointer" onclick="notificationHandler(false)">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 7L12 12L7 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13 7L18 12L13 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-10">
                                <h1 className="text-xl font-medium leading-5 text-white">Welcome to OvonRueden</h1>
                                <p className="text-sm leading-none text-white">30 mins ago</p>
                            </div>
                            <div>
                                <p className="text-sm mt-6 leading-none text-white">Hi William,</p>
                                <p className="text-sm leading-5 mt-4 text-white md:pr-24">Welcome to OvonRueden ! We hope you'll find getting up and running is both quick and easy. Here are resources to get you started</p>
                                <ul className="list-disc text-sm leading-none underline text-white pl-5 mt-8">
                                    <li>Onboarding video</li>
                                    <li className="pt-4">FAQs</li>
                                    <li className="pt-4">Documentation</li>
                                </ul>
                                <p role="link" tabIndex={0} aria-label="Email link" className="text-sm leading-none underline text-indigo-400 mt-8 cursor-pointer">
                                    Send us an email if you need anything
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-800 border-t border-b border-gray-700 w-full  md:p-10 p-5">
                            <div className="flex items-center justify-between ">
                                <h1 className="text-xl font-medium leading-5 text-white">Unusual Activity</h1>
                                <p className="text-sm font-light leading-none text-white">1 day ago</p>
                            </div>
                            <p className="text-sm leading-none text-white mt-6">Hi William,</p>
                            <p className="text-sm leading-tight text-white md:pr-24 mt-4">Not to alarm you or anything but we noticed there has been drastic changes in your performance and thought you might want to have a look</p>
                            <div className="pt-8">
                                <div>
                                    <div className="flex w-64 items-center justify-between">
                                        <p className="text-sm leading-6 text-white">Facebook</p>
                                        <p className="text-sm font-bold leading-6 text-white">35,929</p>
                                    </div>
                                    <div className="w-64 h-1.5 mt-1">
                                        <div className="flex items-center justify-start h-full bg-gray-200 rounded-full">
                                            <div className="w-24 h-full bg-indigo-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex w-64 items-center justify-between">
                                        <p className="text-sm leading-6 text-white">Twitter</p>
                                        <p className="text-sm font-bold leading-6 text-white">65,929</p>
                                    </div>
                                    <div className="w-64 h-1.5 mt-1.5">
                                        <div className="flex items-center justify-start h-full bg-gray-200 rounded-full">
                                            <div className="w-44 h-full bg-blue-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex w-64 items-center justify-between">
                                        <p className="text-sm leading-6 text-white">Indie Hackers</p>
                                        <p className="text-sm font-bold leading-6 text-white">5,929</p>
                                    </div>
                                    <div className="w-64 h-1.5 mt-1.5">
                                        <div className="flex items-center justify-start h-full bg-gray-200 rounded-full">
                                            <div className="w-32 h-full bg-gray-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex w-64 items-center justify-between">
                                        <p className="text-sm leading-6 text-white">Instagrams</p>
                                        <p className="text-sm font-bold leading-6 text-white">52,929</p>
                                    </div>
                                    <div className="w-64 h-1.5 mt-1.5">
                                        <div className="flex items-center justify-start h-full bg-gray-200 rounded-full">
                                            <div className="w-64 h-full bg-pink-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <div role="link" tabIndex={0} aria-label="Go to my dashboard  link" className="flex items-center cursor-pointer mt-7">
                                    <p className="text-sm leading-none pr-0.5 underline text-indigo-400">Go to my dashboard</p>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33398 8H12.6673" stroke="#818CF8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 10.6667L12.6667 8" stroke="#818CF8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 5.33331L12.6667 7.99998" stroke="#818CF8" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 py-4 bg-gray-900">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-medium mt-4 leading-5 text-white">Getting Started</h1>
                                <p className="text-sm leading-none text-white">30 mins ago</p>
                            </div>
                            <div className="pb-16">
                                <p className="text-sm mt-6 leading-none text-white">Hi William,</p>
                                <p className="text-sm leading-5 mt-4 text-white md:pr-24">Happy to have you here, lets get started with the knicks and knacks of the system. Below is a short description of what you can expect</p>
                                <ul className="list-disc text-sm leading-none underline text-white pl-5 mt-8">
                                    <li>Onboarding video</li>
                                    <li className="pt-4">FAQs</li>
                                    <li className="pt-4">Documentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
