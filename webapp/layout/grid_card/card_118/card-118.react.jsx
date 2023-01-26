import React from "react";

export default function Home() {
    return (
        <>
            <div className="py-8 flex items-center justify-center px-4">
                <div className="max-w-lg sm:w-auto w-full  p-4 bg-white border border-gray-200 sm:flex items-center">
                    <div className="sm:w-80 flex flex-col flex-shrink-0">
                        <h1 className="text-base font-semibold leading-4 text-gray-800">Location Stats</h1>
                        <div className="mt-2 w-full h-full relative">
                            <img src="https://i.ibb.co/99rQkSt/mapbase-3-1.png" alt="map" className="w-full h-full" />
                            <div className="absolute top-0 ml-10 mt-4 w-12 h-12 border rounded-full border-indigo-700 flex items-center justify-center">
                                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-indigo-700 rounded-full" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 mb-12 ml-36 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-indigo-700 rounded-full" />
                            </div>
                            <div className="absolute top-0 right-0 mr-12 mt-6 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-indigo-700 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-20 sm:ml-7 sm:mt-0 mt-4 sm:block flex  items-center  justify-between">
                        <div className="border-l-2 border-indigo-700 pl-4">
                            <h2 className="text-sm leading-none text-gray-600">USA</h2>
                            <p className="text-sm font-semibold mt-1 leading-none text-green-700">+15%</p>
                        </div>
                        <div className="border-l-2 sm:mt-8 border-indigo-700 pl-4">
                            <h2 className="text-sm leading-none text-gray-600">Canada</h2>
                            <p className="text-sm mt-1 font-semibold leading-none text-red-600">-09%</p>
                        </div>
                        <div className="border-l-2 sm:mt-8 border-indigo-700 pl-4">
                            <h2 className="text-sm leading-none text-gray-600">Russia</h2>
                            <p className="text-sm font-semibold mt-1 leading-none text-green-700">+70%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
