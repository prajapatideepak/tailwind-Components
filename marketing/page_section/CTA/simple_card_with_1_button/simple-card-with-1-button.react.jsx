import React from "react";
function IndexPage() {
    return (
        <>
            <div className="py-12 f-f-p w-full flex justify-center items-center">
                <div className="bg-white lg:w-8/12 shadow-lg py-8 px-8 rounded-2xl">
                    <div className="lg:flex justify-between w-full">
                        <div>
                            <h1 className="text-xl md:text-2xl xl:text-5xl text-gray-800 font-bold tracking-wide">
                                <span className="text-indigo-700">Insurance</span>
                                made Easy
                            </h1>
                            <h2 className="text-gray-700 tracking-wide text-base xl:text-lg mt-4">At Inertia, we are commited to provide top-notch services to our customers</h2>
                        </div>
                        <div className="mt-4 lg:mt-0 flex-shrink-0">
                            <button className="hover:opacity-90 py-2 xl:py-4 focus:outline-none px-4 xl:px-8 xl:text-2xl text-white bg-indigo-700 tracking-wider rounded-3xl font-bold">Get a quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
