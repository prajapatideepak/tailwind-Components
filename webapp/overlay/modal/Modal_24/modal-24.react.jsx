import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-96 rounded bg-white dark:bg-gray-800 p-8 shadow">
                        <p className="text-2xl font-bold leading-normal dark:text-gray-100 text-gray-800">Notifications</p>
                        <p className="text-sm leading-5 mt-3 mb-5 text-gray-600 dark:text-gray-300">Select whether you want to get notified about new promotions and offers.</p>
                        <p className="text-base font-bold leading-none text-gray-800 dark:text-gray-100">Get a notification?</p>
                        <div className="mt-7 mb-8 text-sm font-medium leading-none text-gray-800 dark:text-gray-100">
                            <label htmlFor="yes" className="flex items-center cursor-pointer">
                                <input type="radio" name="consent" defaultChecked className="w-4 h-4 mr-2" id="yes" />
                                news about notification
                            </label>
                            <label htmlFor="no" className="flex items-center cursor-pointer mt-4">
                                <input type="radio" name="consent" className="w-4 h-4 mr-2" id="no" />I don’t want to get notified
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-none text-indigo-700 dark:text-indigo-600 cursor-pointer">Learn more</p>
                            <button className="focus:outline-none hover:bg-opacity-80 dark::bg-indigo-600 px-7 py-4 bg-indigo-700 rounded text-sm font-semibold leading-none text-gray-100">Get Started</button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
                <style>
                    {`  input[type='radio']:checked:after {
                                margin: 3px;
                                width: 10px;
                                height: 10px;
                                border-radius: 15px;
                                position: relative;
                                background-color: #4338CA;
                                content: '';
                                display: inline-block;
                                visibility: visible;
                                border: 1px solid #4338CA;
                            }`}
                </style>
            </div>
        </>
    );
}

export default Index;
