import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="w-80 bg-white dark:bg-gray-800 rounded py-6 px-8">
                    <p className="text-xl text-gray-800 dark:text-gray-100 font-semibold leading-5">Monthly Goal</p>
                    <img alt="man_on_rocket" src="https://i.ibb.co/kqNh7Bn/Saly-1.png" className="w-full mt-6" />
                    <div className="pt-2 flex items-end">
                        <p className="text-4xl font-semibold leading-9  text-gray-800 dark:text-gray-100">$480.6k</p>
                        <div className="flex items-center pl-4">
                            <p className="text-base font-semibold leading-4 text-center text-green-700 pr-2">2.3%</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={11} viewBox="0 0 19 11" fill="none">
                                <path d="M1 10.5L8 5L11.5 8L18.5 1M18.5 1H13M18.5 1V6" stroke="#15803D" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full bg-gray-300 h-2 mr-1 relative rounded mt-6">
                        <div className="h-2 w-52 bg-green-700 dark:bg-green-400 rounded" />
                    </div>
                    <div>
                        <p className="text-base font-semibold leading-6 pt-3 text-right text-gray-500 dark:text-gray-400">90% complete</p>
                    </div>
                </div>
            </div>
        </>
    );
}
