import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center w-full justify-center py-8">
                <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                    <div className="flex">
                        <div className="px-6 py-5">
                            <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">Congratulations 🎉 Bruce!</p>
                            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">You have won gold medal</p>
                            <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 pt-3">$48.9k</p>
                            <div className="pt-4">
                                <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">View Sales</button>
                            </div>
                        </div>
                        <div className="px-3">
                            <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
