import React from "react";
function Index() {
    return (
        <div className="container py-10 mx-auto pt-16">
            <div className="mb-12 xl:w-full w-11/12 mx-auto">
                <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
                <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">If you love writing or making music or blogging or any sort of performing art, then do it. Do it with everything you’ve got. Just don’t plan on using it as a shortcut to making a living.</p>
            </div>
            <div className="xl:flex lg:flex md:flex xl:w-full mx-auto xl:mx-0 w-11/12 flex-wrap mb-32 justify-between">
                <div className="xl:w-9/12 lg:w-2/3 md:w-2/3 relative bg-center bg-cover bg-no-repeat h-64">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_4.png" alt className="h-full w-full object-cover overflow-hidden absolute rounded shadow" />
                    <div className="absolute bottom-0 w-11/12 ml-2 xl:mx-0 lg:mx-0 xl:w-8/12 lg:w-8/12 xl:ml-24 lg:ml-24 rounded-md lg:-mb-48 sm:-mb-32 -mb-56 xl:-mb-40">
                        <div className="xl:w-3/12 w-6/12 lg:w-3/12 bg-white py-4 px-8 rounded-t-md">
                            <div className="flex justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d9e3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7f91b1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full bg-white shadow rounded-tr-md rounded-b-md">
                            <div className="py-4 px-6">
                                <p className="text-sm text-indigo-700 pb-1">LEADERSHIP</p>
                                <p className="text-xl text-gray-800 font-bold pb-2">Productivity tips for effective leaders</p>
                                <p className="text-base text-gray-600">Placing effectiveness over efficiency should be your daily mantra. You can never complete everything, yet you can finish the tasks.</p>
                            </div>
                            <div className="border-t border-gray-300 flex justify-between">
                                <p className="text-sm text-gray-600 py-4 pl-8">
                                    May 13, 2019 by
                                    <a href="javascript:void(0)">
                                        <span className="text-indigo-700">Sameul Guzman</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-3/12 lg:w-1/3 md:w-1/3 xl:pl-10 lg:pl-10 md:pl-10 mt-64 xl:mt-0 md:mt-0 lg:mt-0">
                    <div className="border-gray-400 border h-full xl:h-64 lg:h-64 md:h-64 overflow-y-auto rounded-lg">
                        <div className="flex items-center bg-gray-100 px-3 rounded-lg mt-5 mx-4 mb-5">
                            <div className="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search blogs" className="text-gray-500 text-sm bg-transparent focus:outline-none py-3 w-full" />
                        </div>
                        <div className="mx-5">
                            <div className="cursor-pointer mb-4">
                                <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                                <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                            </div>
                            <div className="cursor-pointer mb-4">
                                <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                                <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                            </div>
                            <div className="cursor-pointer mb-4">
                                <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                                <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                            </div>
                            <div className="cursor-pointer mb-4">
                                <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                                <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
