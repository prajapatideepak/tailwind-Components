import React,{useState} from "react";
const Index = () => {
    const[show,showModal]=useState()
    return (
        <div>
            <div className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
               {show &&  <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-center text-gray-600 dark:text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={56} height={56} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                <line x1={10} y1={12} x2={14} y2={12} />
                            </svg>
                        </div>
                        <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Add Project to Archive</h1>
                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">Are you sure you want to archive this project? Note that by clicking the archive project, this project will be disable across all Unity services and the data, files and information associated with it may become irrecoverable.</p>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">Type Archive Project to confirm this action. For more details click here</p>
                        <div className="flex items-center justify-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Archive</button>
                            <button className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={()=>showModal(!show)}>
                                Cancel
                            </button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition duration-150 ease-in-out" onClick={()=>showModal(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            
            }
               </div>
            <div className="w-full flex justify-center py-12 items-center" id="button">
                <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={()=>showModal(!show)}>
                    Open Modal
                </button>
            </div>
        </div>
    );
};
export default Index;
