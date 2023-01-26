import React from "react";
const Index = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
                <p className="text-lg text-gray-800 dark:text-gray-100 pb-3 font-semibold">Best In Class User Experience</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 font-normal">When UX doesn’t consider ALL users, shouldn’t it be known as “SOME User Experience.</p>
                <button className="text-xs rounded px-3 py-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 flex items-center focus:outline-none">
                    Learn More About Our UX
                    <span className="pl-3 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <line x1={15} y1={16} x2={19} y2={12} />
                            <line x1={15} y1={8} x2={19} y2={12} />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};
export default Index;
