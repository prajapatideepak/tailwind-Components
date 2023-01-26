import React from "react";
function Index() {
    return (
        <div className="container mx-auto lg:w-11/12 pt-16">
            <div className="mb-12 xl:w-full lg:w-full w-11/12 mx-auto">
                <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
                <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">Content: Selling to people through social media is like going to a party, meeting somebody for the first time, and then saying, “Hey, do you want to buy this Tupperware..</p>
            </div>
            <div className="lg:flex md:flex sm:flex xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-0 lg:pr-4 xl:pl-0">
                    <div className="h-48 bg-cover rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1557804506-669a67965ba0.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                        <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                        <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                        <p className="text-sm text-gray-600 text-center">
                            May 13, 2019 by{" "}
                            <a href="javascript:void(0)">
                                <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                    <div className="h-48 bg-cover rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1547306843-f8fea4d65f9b.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                        <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                        <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                        <p className="text-sm text-gray-600 text-center">
                            May 13, 2019 by{" "}
                            <a href="javascript:void(0)">
                                <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                    <div className="h-48 bg-cover rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1559125148-869baf508c95.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                        <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                        <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                        <p className="text-sm text-gray-600 text-center">
                            May 13, 2019 by{" "}
                            <a href="javascript:void(0)">
                                <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                    <div className="h-48 bg-cover rounded">
                        <img src="https://cdn.tuk.dev/assets/photo-1513759565286-20e9c5fad06b.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                        <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                        <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                        <p className="text-sm text-gray-600 text-center">
                            May 13, 2019 by{" "}
                            <a href="javascript:void(0)">
                                <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
