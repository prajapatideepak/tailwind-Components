import React, { useEffect } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="w-96 bg-white dark:bg-gray-800 rounded">
                    <div className="relative">
                        <div className="w-16 absolute z-20 right-0 mt-6 mr-8 px-4 py-1 bg-red-100 rounded-full text-base font-semibold text-center dark:bg-red-400 dark:text-white text-red-700">NEW</div>
                        <img className="w-full relative z-0" src="https://i.ibb.co/w7qt40R/card50.png" alt="sunset" />
                    </div>
                    <div className="py-6 px-8">
                        <p className="text-2xl font-semibold leading-normal text-gray-800 dark:text-gray-100">Lorem ipsum dolor</p>
                        <p className="pt-4 text-base font-medium tracking-wider leading-snug text-gray-500 dark:text-gray-400">Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin ultrices lectus. Sed bibendum felis sed metus congue, vitae congue eros rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio finibus, mollis elit ac, fermentum lacus. Quisque eleifend ac nunc id tristique.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="flex pt-4 pb-6 px-8 items-start justify-between">
                            <div className="flex items-center">
                                <img className="w-10 h-10 shadow rounded-full" src="https://i.ibb.co/mFR5bBF/DP.png" alt="dp image" />
                                <div className="pl-6">
                                    <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Tolu Arowoselu</p>
                                    <p className="text-xs leading-3 mt-1 text-gray-500 dark:text-gray-400">Admin</p>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-right text-gray-500 dark:text-gray-400">8 Aug</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
