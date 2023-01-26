import React from "react";

export default function MyApp() {
    return (
        <div>
            <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container" >
                <div className="md:flex items-center justify-between">
                    <div className="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
                        <h1 role="heading" className="lg:text-5xl text-3xl font-bold leading-tight text-gray-800">
                            How many letters are in the alphabet?
                        </h1>
                        <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600">
                            There are currently 26 letters in the English alphabet, but there was once a 27th letter. In fact, it still exists on computer keyboards. The 27th letter was "Et" and referred to as an "ampersand" or more commonly.
                        </p>
                        <button role="button" aria-label="explore more" className="sm:w-auto w-full mt-10 text-base font-medium leading-none text-white bg-indigo-700 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 focus:outline-none">
                            Explore More
                        </button>
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
                        <img src="https://i.ibb.co/wNG9Nk1/pexels-fauxels-3183166-1.png" alt="woman working" className="md:w-auto w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap md:mt-16 mt-8 gap-6 flex items-center justify-between">
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">1</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">2</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">3</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
