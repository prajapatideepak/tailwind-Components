import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-80 rounded shadow-lg px-6 pb-5 dark:bg-gray-800 bg-white">
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co/MnW9jw8/Saly-19.png" />
                        <p className="text-lg font-semibold leading-5 text-gray-500 dark:text-gray-400 mt-4">Get our deal for</p>
                        <p className="text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100 mt-2">Unlimited Access</p>
                        <p className="text-sm leading-5 my-4 text-center text-gray-500">621 components and 30 premium tailwind templates are being offered in such a small price. Go get it!</p>
                        <div className="flex items-center justify-center">
                            <button className="py-3 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 px-6 bg-gray-50 dark:bg-gray-900 border rounded border-gray-200 text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100 dark:border-gray-700">$189</button>
                            <button className="px-4 py-3 focus:outline-none hover:bg-opacity-80 bg-indigo-700 dark:bg-indigo-600 ml-4 rounded text-xs font-semibold leading-3 text-gray-100">Pay now</button>
                        </div>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400   text-gray-600 transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
