import React, { useState } from "react";

export default function Index() {
    return (
        <div>
            <div className="text-gray-800 grid place-content-center text-center py-12 md:py-40 px-16 md:px-24">
                <h1 className="font-bold text-7xl py-2">404</h1>
                <p className="md:hidden py-2">
                    Sorry. The content you’re looking for <br /> doesn’t exist. Either it was removed, <br /> or you mistyped the link.
                </p>
                <p className="hidden md:block py-2">
                    Sorry. The content you’re looking for doesn’t exist.
                    <br />
                    Either it was removed, or you mistyped the link.
                </p>
                <div>
                    <div className="md:flex md:justify-center md:gap-4 py-2">
                        <button className="w-1/2 md:w-auto my-2 md:my-0 border rounded-md py-4 px-8 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50">Contact us</button>
                        <button className="w-1/2 md:w-auto my-2 md:my-0 border rounded-md bg-gray-800 text-white py-4 px-8 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Go to Homepage</button>
                    </div>
                    <div className="py-4 px-4 md:pr-32 mx-32 md:mx-24 my-2 flex justify-start border rounded-md border-gray-800 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                        <input type="text" placeholder="Search here" className=" focus:outline-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
