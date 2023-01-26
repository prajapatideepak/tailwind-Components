import React, { useState } from "react";
function Index() {
    const [show, setshow] = useState(false);
    const [show2, setshow2] = useState(false);
    return (
        <>
            <div className="mx-auto bg-gray-200 flex items-center justify-center py-6">
                {/* Code block starts */}
                <div className="flex items-start relative">
                    <button className="border bg-white text-gray-500 flex items-center justify-center shadow rounded text-xs focus:outline-none">
                        <span className="py-3 pl-3">Save Changes</span>
                        <span className="py-3 bg-white text-gray-500 rounded-r px-2" onClick={() => setshow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </span>
                    </button>
                    {show && (
                        <ul className="bg-white shadow rounded mt-2 py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                        </ul>
                    )}
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex items-start ml-4 relative">
                    <button className="bg-indigo-700 text-white flex items-center justify-center shadow rounded text-xs focus:outline-none">
                        <span className="p-3">Save Changes</span>
                        <span className="py-3 bg-indigo-600 border border-indigo-600 rounded-r px-2" onClick={() => setshow2(!show2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </span>
                    </button>
                    {show2 && (
                        <ul className="bg-white shadow rounded mt-2 py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                        </ul>
                    )}
                </div>
                {/* Code block ends */}
            </div>
        </>
    );
}
export default Index;
