import React from "react";
export default function index() {
    return (
        <>
            <div className="py-12 ">
                <div className="bg-indigo-700 rounded-md w-full">
                    <div className="mx-auto container">
                        <div className="py-12 flex flex-col items-center justify-center pb-40 px-4">
                            <h1 className="lg:text-5xl text-3xl text-center font-bold leading-10 text-white">Our Standout Progress</h1>
                            <p className="text-base leading-6 text-center text-white lg:w-1/3 sm:w-1/2 mt-4">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age.</p>
                        </div>
                    </div>
                </div>
                <div className="2xl:container 2xl:mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-20 gap-6 lg:px-20 md:px-6 px-4">
                    <div className="bg-white py-6 px-5 border rounded-md border-gray-200">
                        <p className="text-base font-semibold leading-4  text-indigo-700">Clients</p>
                        <p className="text-5xl leading-10 mt-6 text-gray-800">50k+</p>
                        <p className=" text-base leading-6 mt-4 text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
                    </div>
                    <div className="bg-white py-6 px-5 border rounded-md border-gray-200">
                        <p className="text-base font-semibold leading-4  text-indigo-700">Projects</p>
                        <p className="text-5xl leading-10 mt-6 text-gray-800">90k+</p>
                        <p className=" text-base leading-6 mt-4 text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
                    </div>
                    <div className="bg-white py-6 px-5 border rounded-md border-gray-200">
                        <p className="text-base font-semibold leading-4  text-indigo-700">Revenue</p>
                        <p className="text-5xl leading-10 mt-6 text-gray-800">$80M</p>
                        <p className=" text-base leading-6 mt-4 text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
                    </div>
                    <div className="bg-white py-6 px-5 border rounded-md border-gray-200">
                        <p className="text-base font-semibold leading-4  text-indigo-700">Success</p>
                        <p className="text-5xl leading-10 mt-6 text-gray-800">99%</p>
                        <p className=" text-base leading-6 mt-4 text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
