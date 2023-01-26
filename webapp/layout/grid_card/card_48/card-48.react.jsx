import React, { useEffect } from "react";

export default function IndexPage() {
    return (
        <>
            <div>
                <div className="flex items-center justify-center w-full h-full py-8 px-4">
                    <div className="w-80 bg-white dark:bg-gray-800 rounded-lg">
                        <img className="w-full h-56" src="https://i.ibb.co/C8m9SF4/card50.png" alt="sunset" />
                        <div className="pt-4 px-5">
                            <p className="text-xl font-semibold leading-tight text-gray-600 dark:text-gray-100">Take Action</p>
                            <p className="mt-3 text-sm leading-4 text-gray-500 dark:text-gray-400">Fight Climate change right now, save your children and their future.</p>
                            <div className="flex  justify-between mt-6">
                                <button className="flex items-center justify-center w-28 sm:w-32 h-9 bg-gray-100 hover:bg-gray-200 rounded text-sm font-semibold leading-4 text-center text-indigo-700">Free Trial</button>
                                <button className=" flex items-center justify-center w-28 sm:w-32 h-9 bg-indigo-700 hover:bg-indigo-600 rounded text-sm font-semibold leading-4 text-center text-white">Purchase</button>
                            </div>
                        </div>
                        <div className="mt-6 mb-5 border-t border-gray-200 ">
                            <div className="flex px-5 pt-3.5 pb-5">
                                <div className="flex items-center">
                                    <div className="bg-white dark:bg-transparent border rounded-sm border-gray-200 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className=" text-xs leading-4 pl-3 text-gray-500 dark:text-gray-400">Send me weekly updates, resources to my email address.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n        .checkbox:checked+.check-icon {\n            display: flex;\n        }\n    " }} />
            </div>
        </>
    );
}
