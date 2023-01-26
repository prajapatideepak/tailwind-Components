import React from "react";
function Index() {
    return (
        <div>
            <div className="w-64 pl-4 border-r shadow bg-white border-gray-300 transition duration-150 ease-in-out hidden sm:block">
                <ul aria-orientation="vertical" className="py-8">
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm py-2 leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Dashboard</span>
                            <span className="px-3 py-1 rounded bg-indigo-700 text-white font-xs flex items-center justify-center mr-3">5</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Products</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Performance</span>
                            <span className="px-3 py-1 rounded bg-gray-200 text-gray-600 font-xs flex items-center justify-center mr-3">7</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Deliverables</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-64 pl-4 border-r shadow bg-white border-gray-300 sm:hidden relative transition duration-150 ease-in-out" id="mobile-nav">
                <div className="h-10  w-10 bg-indigo-700 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" onclick="sidebarHandler()">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <ul aria-orientation="vertical" className="py-8">
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm py-2 leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Dashboard</span>
                            <span className="px-3 py-1 rounded bg-indigo-700 text-white font-xs flex items-center justify-center mr-3">5</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Products</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Performance</span>
                            <span className="px-3 py-1 rounded bg-gray-200 text-gray-600 font-xs flex items-center justify-center mr-3">7</span>
                        </div>
                    </li>
                    <li className="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Deliverables</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;
