import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative md:w-96 rounded shadow-lg px-6 pt-4 pb-6 dark:bg-gray-800 bg-white">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-base md:text-lg font-bold leading-5 dark:text-gray-100 text-gray-800">How do you feel about our Service</p>
                        <p className="text-xs font-medium leading-3 text-gray-500 mt-3 mb-6 dark:text-gray-400">We would love to get your feedback</p>
                        <div className="flex items-center justify-between w-full">
                            <button className="focus:outline-none">😍</button>
                            <button className="focus:outline-none">🙂</button>
                            <button className="focus:outline-none">😶</button>
                            <button className="focus:outline-none">😕</button>
                            <button className="focus:outline-none">😡</button>
                        </div>
                        <p className="text-xs leading-3 underline text-gray-500 dark:text-gray-400 cursor-pointer mt-4">Maybe later</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
