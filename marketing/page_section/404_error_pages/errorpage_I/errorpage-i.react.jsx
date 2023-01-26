import React from "react";
export default function index() {
    return (
        <div className="text-center py-60 lg:py-36">
            <h1 className="text-7xl md:text-9xl font-bold text-indigo-700 py-2">404</h1>
            <h2 className="md:text-4xl text-2xl lg:text-5xl font-bold text-gray-800 py-2">Page not found</h2>
            <p className="text-md text-gray-600 py-2 px-12 lg:px-96">Sorry! We could not find you the page you are looking for. Please check URL in address bar and try again.</p>
            <div className="text-md text-indigo-700 flex justify-center cursor-pointer">
                <div className="hover:underline">Go back</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <line x1={15} y1={16} x2={19} y2={12} />
                        <line x1={15} y1={8} x2={19} y2={12} />
                    </svg>
                </div>
            </div>
        </div>
    );
}
