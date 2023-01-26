import React from "react";

export default function Home() {
    return (
        <>
            <div className="py-24 lg:px-20 px-8 2xl:mx-auto 2xl:container">
                <div>
                    <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 text-gray-800 focus:outline-none">
                        FEATURED ITEMS
                    </h1>
                    <div className="w-24 h-1 border-2 border-gray-900 bg-gray-900 mt-7" />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-11 gap-6">
                    <div className="w-full h-full">
                        <img className="rounded lg:w-auto" src="https://i.ibb.co/h9bNg5t/jean-philippe-delberghe-Ry9-WBo3qmoc-unsplash-1-1.png" alt="Golden color lamps" />
                        <h2 className="text-2xl font-medium pt-5 text-gray-900">Golden lamps</h2>
                        <div className="w-20 mt-4 bg-gray-900 h-1 border-2 border-gray-900" />
                    </div>
                    <div className="w-full h-full">
                        <img className="rounded lg:w-auto" src="https://i.ibb.co/ngZ9rVd/matt-walsh-ASJi-P5l-H7-Cc-unsplash-1.png" alt="silver bulbs" />
                        <h2 className="text-2xl font-medium pt-5 text-gray-900">Silver bulbs</h2>
                        <div className="w-20 mt-4 bg-gray-900 h-1 border-2 border-gray-900" />
                    </div>
                    <div className="w-full h-full">
                        <img className="rounded lg:w-auto" src="https://i.ibb.co/hBGRmsM/szabo-viktor-1-Fp-WNziff-Y-unsplash-1.png" alt="Traditional hanging" />
                        <h2 className="text-2xl font-medium pt-5 text-gray-900">Traditional hanging</h2>
                        <div className="w-20 mt-4 bg-gray-900 h-1 border-2 border-gray-900" />
                    </div>
                </div>
            </div>
        </>
    );
}
