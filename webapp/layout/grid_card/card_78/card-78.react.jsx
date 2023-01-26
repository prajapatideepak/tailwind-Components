import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden">
                <img className="w-full" src="https://i.ibb.co/6P7MHP8/girl-on-a-car-trunk.png" alt srcSet />
                <div className="bg-white dark:bg-gray-800 rounded-b px-4 py-6 ">
                    <div className="flex items-start justify-between">
                        <p className="sm:text-base text-sm font-semibold leading-5 text-gray-800 dark:text-gray-100 w-4/5">Got my new Car today, hoping to get it to my parents home by myself</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mt-1 md:w-auto cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={19} r={1} />
                            <circle cx={12} cy={5} r={1} />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
