import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 sm:max-w-sm flex justify-center">
                    <div className="relative w-96 bg-indigo-700 dark:bg-indigo-600 shadow pt-10 px-14 rounded">
                        <p className="text-xl md:text-3xl font-bold md:leading-9 text-center text-gray-100">Install our app and get 30% OFF</p>
                        <img className="mt-5" src="https://i.ibb.co/kS1GHWc/Group-34.png" />
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-100 transition duration-150 ease-in-out" >
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
