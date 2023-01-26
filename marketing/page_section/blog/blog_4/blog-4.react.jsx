import React from "react";

export default function Home() {
    return (
        <>
            <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
                <div className="lg:flex justify-center">
                    <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
                        <img src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png" alt="fingerprint recognition" className="lg:w-full w-auto" />
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                                    <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                </div>
                                <div className="flex items-center">
                                    <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 1H0" stroke="#6B7280" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                                </div>
                            </div>
                            <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">Chip fingerprint technology for secure transaction</h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in, rather urgently, a need for low-cost security technology. While passwords and other such forms of encription are software base, there is also a need for security level</p>
                        </div>
                    </div>
                    <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
                        <div className="lg:w-auto sm:w-1/2">
                            <img src="https://i.ibb.co/d6jQJyY/blog-2-desktop.png" alt="flying letters" className="w-full" />
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="text-base leading-4 text-gray-500">5 feb</p>
                                        <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 1H0" stroke="#6B7280" />
                                        </svg>
                                        <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                                <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                            </div>
                        </div>
                        <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
                            <img src="https://i.ibb.co/9cN11LT/blog-3-desktop.png" alt="robotic arm" className="w-full" />
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="text-base leading-4 text-gray-500">5 feb</p>
                                        <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 1H0" stroke="#6B7280" />
                                        </svg>
                                        <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                                <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
