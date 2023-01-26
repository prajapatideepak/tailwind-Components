import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="bg-white dark:bg-gray-800 md:w-96 rounded px-5 py-5 shadow w-full">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Best Sellers</p>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-sm" src="https://i.ibb.co/Q8CRW4B/card-1.png" alt="white tiger" />
                            <div className="ml-3">
                                <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Plain White Tiger</p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">$20/each</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">$520</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">124 orders</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-sm" src="https://i.ibb.co/HNgDYMB/card-2.png" alt="fresh towels" />
                            <div className="ml-3">
                                <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Awesome Fresh Towels</p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">$30/each</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">$230</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">42 orders</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-sm" src="https://i.ibb.co/cxttnLp/card-3.png" alt="Hat" />
                            <div className="ml-3">
                                <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Gorgeous Granite Hat</p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">$54/each</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">$123</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">172 orders</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-sm" src="https://i.ibb.co/qpSQtrc/card-4.png" alt="Cheese" />
                            <div className="ml-3">
                                <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Awesome Cotton Cheese</p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">$37/each</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">$321</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">32 orders</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-sm" src="https://i.ibb.co/Ws0LLgv/card-5.png" alt="Plastic Mouse" />
                            <div className="ml-3">
                                <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Small Plastic Mouse</p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">$12/each</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">$20</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-2">12 orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
