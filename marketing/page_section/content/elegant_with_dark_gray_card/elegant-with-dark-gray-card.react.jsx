import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container mt-0 lg:my-16 my-10 px-4 lg:px-0">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="f-f-d-s text-2xl lg:text-6xl leading-normal tracking-wide text-gray-800 text-center">Upcoming Exhibitions</h1>
                </div>
                <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
                    <div className="lg:w-1/2 h-1/3">
                        <img src="https://cdn.tuk.dev/assets/templates/Fabterior/Section7(1).png" alt className="w-full h-full" />
                    </div>
                    <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12 bg-gray-700 lg:w-2/5 lg:-ml-12 text-white f-f-l">
                        <div className="lg:text-4xl text-2xl font-normal leading-9 pb-6 f-f-d-s">Extra Space</div>
                        <div className="flex items-center font-lato">
                            <div className="text-sm lg:text-lg font-normal color-white mb-4">Nov 01 - 10</div>
                            <span className="dot-color text-2xl px-2 mb-4">•</span>
                            <div className="text-sm lg:text-lg font-normal color-white mb-4">James Haul</div>
                        </div>
                        <div className="pb-6 leading-6 f-f-l text-base lg:text-2xl leading-9">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes, specific spaces, architectural marvels, and new design trends.</div>
                        <button className="border-b border-white lg:text-2xl text-base leading-6 f-f-l font-bold">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
}
