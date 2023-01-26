import React from "react";
const Index = () => {
    return (
        <div className="xl:w-5/12 w-11/12 mx-auto mb-4 my-6 md:w-2/3 shadow sm:px-10 px-4 py-6 bg-white dark:bg-gray-800 rounded-md">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-4">Active Account</p>
            <div className="flex bg-indigo-700 rounded-md relative">
                <div className="flex">
                    <div className="px-4 py-6 border-r border-indigo-600">
                        <div className="h-10 w-10">
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80" alt className="h-full w-full rounded-full overflow-hidden shadow object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center pl-3 py-2 sm:py-0">
                        <p className="text-sm font-bold text-white pb-1">Jon Harrison</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <p className="text-xs text-white leading-5">New York &nbsp; - &nbsp;</p>
                            <p className="text-xs text-white leading-5">Last active 21 June 2020</p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto mt-2 sm:mt-4 mr-2 sm:mr-4 sm:right-0 w-5 text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                </div>
            </div>
        </div>
    );
};
export default Index;
