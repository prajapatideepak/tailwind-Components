import React from "react";

const About5 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">Discover about us</h2>
                        <svg className="mt-8 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20 rounded-md" width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="71" height="47" rx="5.5" stroke="white" />
                            <path d="M31 16V32L44 24L31 16Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div>
                    <img className="rounded-md lg:block hidden w-full" src="https://i.ibb.co/17q26WL/qw.png" alt="A person Coding" />
                    <img className="rounded-md lg:hidden sm:block hidden w-full" src="https://i.ibb.co/pZX8cKM/Rectangle-122-1.png" alt="A person Coding" />
                    <img className="rounded-md sm:hidden block w-full" src="https://i.ibb.co/b3YLqxC/Rectangle-122.png" alt="A person Coding" />
                </div>
            </div>

            <div className="lg:mt-14 sm:mt-7 mt-14">
                <div className="flex lg:flex-row flex-col items-center">
                    <div className="w-full lg:w-7/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
                        <div className="w-full grid sm:grid-cols-2 grid-cols-1">
                            {/* <!-- Company Founded --> */}
                            <div className="pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">Company founded</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div></div>

                            {/* <!-- 500k For Responsiveness STARTS--> */}
                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">500k Monthly Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 500k For Responsiveness ENDS--> */}

                            <div className="border-r-2 border-gray-200"></div>

                            {/* <!-- 500k monthly Views --> */}

                            <div className="sm:block hidden pb-7">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">500k monthly views</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200k Users For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">200k Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200k Users For Responsiveness ENDS--> */}

                            <div></div>

                            {/* <!-- 200k Users --> */}

                            <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">200k Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200+ Team For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">500k Monthly Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200+ Team For Responsiveness ENDS--> */}

                            <div className=""></div>

                            {/* <!-- 200+ Team --> */}

                            <div className="sm:block hidden pb-5">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-gray-800">200+ Team</h2>
                                        <p className="w-auto font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About5;
