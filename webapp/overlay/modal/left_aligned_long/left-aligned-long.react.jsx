import React from "react";
const Index = () => {
    return (
        <div>
            <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex items-center text-gray-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                <line x1={10} y1={12} x2={14} y2={12} />
                            </svg>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight ml-2">Add Project to Archive</h1>
                        </div>
                        <p className="mb-5 text-sm text-gray-600 font-normal">Are you sure you want to archive this project. If you confirm, after this you will be redirected to the project page.</p>
                        <p className="mb-5 text-sm text-gray-600 font-normal">Check the action below for more details.</p>
                        <div className="flex items-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Archive</button>
                            <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                                Cancel
                            </button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
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
