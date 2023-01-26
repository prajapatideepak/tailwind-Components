import React from "react";
function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="mb-12 xl:w-full w-11/12 mx-auto">
                <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
                <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">Blogging has turned the publishing world on its head. It allows you to write and publish anything, from anywhere, and have it be immediately available to billions of people all around the world.</p>
            </div>
            <div className="relative bg-center bg-cover bg-no-repeat mb-40 w-11/12 mx-auto xl:w-full h-64">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_0.png" alt className="h-full w-full object-cover overflow-hidden absolute rounded" />
                <div className="absolute bottom-0 w-11/12 ml-2 xl:mx-0 lg:mx-0 xl:w-6/12 lg:w-6/12 xl:ml-12 lg:ml-12 rounded-md lg:-mb-56 sm:-mb-48 -mb-64 xl:-mb-24">
                    <div className="w-full py-5 px-6 bg-white shadow rounded">
                        <p className="text-sm text-indigo-700 pb-1">LEADERSHIP</p>
                        <p className="text-xl text-gray-800 font-bold pb-2">Productivity tips for effective leaders</p>
                        <p className="text-base text-gray-600">Drop the 9-to-5 Schedule. It's no longer news that the traditional 9-to-5 workday is not the optimal productivity time span.</p>
                        <div className="pt-4 flex justify-between">
                            <p className="text-sm text-gray-600">
                                May 13, 2019 by{" "}
                                <a href="javascript:void(0)">
                                    <span className="text-indigo-700">Sameul Guzman</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-32 md:pt-12 xl:pt-0 xl:w-full w-11/12 mx-auto border-b .border-gray-300">
                <p className="mb-4 font-bold text-gray-800 text-base">Trending Posts</p>
                <div className="xl:flex lg:flex sm:flex-1 md:flex flex-wrap justify-between">
                    <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                        <div className="h-16 w-20">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_1.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <div className="pt-3 pb-3 ml-2 pr-5">
                            <p className="uppercase text-xs text-indigo-700">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                        <div className="h-16 w-20">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_2.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <div className="pt-3 pb-3 ml-2 pr-5">
                            <p className="uppercase text-xs text-indigo-700">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                        <div className="h-16 w-20">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_3.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <div className="pt-3 pb-3 ml-2 pr-5">
                            <p className="uppercase text-xs text-indigo-700">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                        <div className="h-16 w-20">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_4.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                        </div>
                        <div className="pt-3 pb-3 ml-2">
                            <p className="uppercase text-xs text-indigo-700">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
