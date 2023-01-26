import React, { useState } from "react";
const Index = () => {
    const [count, setCount] = useState(23);
    return (
        <div className="max-w-8xl mx-auto container py-8">
            <div className="flex justify-center items-center">
                <ul className="flex">
                    <li className="flex flex-col justify-center">
                        <span onClick={() => setCount(count ? count - 1 : 0)} className="cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <input id="page_number" readOnly className="w-8 h-8 pl-2 rounded text-indigo-700 text-base mx-2 shadow focus:outline-none" value={count} />
                    </li>
                    <li className="flex flex-col justify-center">
                        <span onClick={() => setCount(count + 1)} className="cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </span>
                    </li>
                </ul>
                <div className="flex ml-8 shadow rounded">
                    <span className="cursor-pointer text-gray-500 text-base leading-tight p-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </span>
                    <span className="cursor-pointer text-gray-500 text-base leading-tight p-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Index;
