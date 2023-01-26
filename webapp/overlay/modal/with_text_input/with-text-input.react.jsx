import React from "react";
const Index = () => {
    return (
        <div>
            <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="py-8 px-5 md:px-32 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-center text-gray-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={56} height={56} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={5} y={11} width={14} height={10} rx={2} />
                                <circle cx={12} cy={16} r={1} />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>
                        </div>
                        <h1 className="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5">Enter Password to Unlock</h1>
                        <input id="pass" className="mb-5 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter Password" />
                        <div className="flex items-center justify-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                            <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center py-12" id="button">
                <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick="modalHandler(true)">
                    Open Modal
                </button>
            </div>
        </div>
    );
};
export default Index;
