import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="w-80 bg-white dark:bg-gray-800 rounded p-4">
                    <div className="flex items-center justify-end cursor-pointer">
                        <svg className="text-gray-800 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                    <p className="text-xl font-semibold tracking-wider leading-5 text-center text-gray-800 dark:text-gray-100">Security risk alert</p>
                    <p className="text-base font-medium tracking-wider leading-6 pt-4 px-4 text-center text-gray-500 dark:text-gray-400">Dear user, we have detected that your account is at risk of security issues, and we strongly recommend that you immediately click "Modify security issues" to remove the security risk.</p>
                    <p className="text-base font-semibold leading-4 pt-12 pb-8 text-center text-indigo-700">Modify security issues &gt;</p>
                    <div className="flex items-center justify-center pb-8">
                        <button className="py-4 px-10 text-base font-semibold leading-4 bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600 text-white cursor-pointer">Not for now</button>
                    </div>
                </div>
            </div>
        </>
    );
}
