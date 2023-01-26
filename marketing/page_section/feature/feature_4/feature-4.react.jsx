import React from "react";

export default function Home() {
    return (
        <>
            <div className="xl:container xl:mx-auto px-4 flex flex-col md:items-center justify-between md:flex-row">
                <div className=" md:w-1/2 w-full mb-14 md:mb-0">
                    <div className="pl-4 border-l border-gray-800 mb-4">
                        <h5 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800">Our projects</h5>
                    </div>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening.</p>
                </div>
                <div className="md:w-1/2">
                    <div role="list" aria-label="Features" className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-6 flex-wrap justify-center items-start">
                        <div role="listitem" className="flex items-start">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/features-1.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Time Prompt</h5>
                                <p className=" md:w-auto w-44 text-base leading-normal text-gray-600">Whether article spirits new her covered.</p>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-start">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/features-2.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">User Friendly</h5>
                                <p className=" md:w-auto w-44 text-base leading-normal text-gray-600">Whether article spirits new her covered.</p>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-start">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/features-3.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Creative Ideas</h5>
                                <p className=" md:w-auto w-44 text-base leading-normal text-gray-600">Whether article spirits new her covered.</p>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-start">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/features-4.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Achievements</h5>
                                <p className=" md:w-auto w-44 text-base leading-normal text-gray-600">Whether article spirits new her covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
