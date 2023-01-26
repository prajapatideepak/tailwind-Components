import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded-md shadow-lg py-4 px-5 w-full bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-600 dark:text-gray-400 text-xs leading-3">Production Status</h3>
                        <div className="flex items-center">
                            <p className="text-gray-500 dark:text-gray-400 text-xs leading-3">12 Jan - 18 Feb</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-chevron-left" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-chevron-right" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="pt-2 pb-12 dark:text-gray-100 text-gray-800 font-bold text-lg">256 Units Produced</h1>
                    <img alt="graph" src="https://i.ibb.co/Y7Mt6Hc/Group-558.png" className="w-full" />
                </div>
            </div>
        </>
    );
}
