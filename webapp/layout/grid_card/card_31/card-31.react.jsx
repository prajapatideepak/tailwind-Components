import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="dark:bg-gray-800 bg-gray-200">
                <div className="flex items-center  justify-center w-full h-full py-8 px-4">
                    <div className="w-full max-w-4xl bg-white dark:bg-gray-800 px-8 py-4 rounded">
                        <p className="text-base leading-4 tracking-tight text-gray-600 dark:text-white font-semibold">Earning</p>
                        <div className="pt-12 md:overflow-x-hidden overflow-x-scroll">
                            <table className="w-full ">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <td className="text-gray-500 dark:text-gray-400 text-base leading-4 pb-7 font-semibold opacity-50">Items</td>
                                        <td className="text-gray-500 dark:text-gray-400 text-base leading-4 pb-7 font-semibold opacity-50">Categories</td>
                                        <td className="text-gray-500 dark:text-gray-400 text-base leading-4 pb-7 font-semibold opacity-50">Earned</td>
                                    </tr>
                                </thead>
                                <tbody className>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-8 md:pr-0 pr-64">
                                            <div className="flex items-start">
                                                <img alt="laptop" src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" className="object-cover object-center w-24 h-24 rounded" />
                                                <div className="flex flex-col pl-5">
                                                    <p className="text-lg font-semibold leading-6 text-gray-800 dark:text-white">
                                                        Complete&nbsp;Saas&nbsp;UI&nbsp;Kit&nbsp;with
                                                        <br />
                                                        support
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 text-gray-500 dark:text-white">
                                                        SketchApp, Adobe
                                                        <br />
                                                        Illustration
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex items-center py-8  md:pr-0 pr-16">
                                            <div className="w-4 h-4 bg-gradient-to-br from-red-300 to-purple-500 rounded-full" />
                                            <p className="text-lg font-medium pl-2 leading-5 text-gray-500 dark:text-white">Graphic&nbsp;Template</p>
                                        </td>
                                        <td className="align-top py-8  text-lg leading-4 text-gray-800 dark:text-white"> $19.00</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td className="py-8 md:pr-0 pr-64">
                                            <div className="flex items-start">
                                                <img alt="laptop" src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" className="object-cover object-center w-24 h-24 rounded" />
                                                <div className="flex flex-col pl-5">
                                                    <p className="text-lg font-semibold leading-6 text-gray-800 dark:text-white">
                                                        Working&nbsp;Business&nbsp;Man&nbsp;-&nbsp;Flat
                                                        <br /> Line Illustration
                                                    </p>
                                                    <p className="text-sm font-medium leading-5 text-gray-500 dark:text-white">Adobe Illustration</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex items-center py-8">
                                            <div className="w-4 h-4  bg-gradient-to-tl from-yellow-300 to-red-400 rounded-full" />
                                            <p className="text-lg font-medium pl-2 leading-5 text-gray-500 dark:text-white">Illustration</p>
                                        </td>
                                        <td className="align-top py-8  text-lg leading-4 text-gray-800 dark:text-white"> $19.00</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
