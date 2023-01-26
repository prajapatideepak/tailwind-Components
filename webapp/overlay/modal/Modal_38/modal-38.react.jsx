import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-80 bg-white dark:bg-gray-800 shadow  pt-8 rounded">
                        <div className="px-6">
                            <p className=" md:text-2xl font-bold md:leading-8 text-gray-800 dark:text-gray-100">Install our app and get 30% OFF</p>
                        </div>
                        <div className="pl-6 mt-6 flex justify-between items-start w-full">
                            <button className=" text-sm font-medium leading-none focus:outline-none text-gray-100 px-4 py-2 md:px-6 md:py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded">Download</button>
                            <img src="https://i.ibb.co/vm7G6Gd/Group-34.png" />
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
