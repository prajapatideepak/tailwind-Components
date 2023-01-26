import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg p-5 bg-white dark:bg-gray-800 w-full">
                    <h1 className="text-lg font-bold  text-gray-800 dark:text-gray-100">Product Usage</h1>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 ">Country</p>
                        </div>
                        <div className=" flex items-center ">
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 pr-4 uppercase">Visits</p>
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 uppercase">Bounce</p>
                        </div>
                    </div>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <img alt="chine" src="https://i.ibb.co/MMQtT0G/china.png" className="w-5 h-5" />
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">China</p>
                        </div>
                        <div className=" flex items-center ">
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 pr-10">2,500</p>
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100">30%</p>
                        </div>
                    </div>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <img alt="greman" src="https://i.ibb.co/27c98hX/germa.png" className="w-5 h-5" />
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Geramny</p>
                        </div>
                        <div className=" flex items-center ">
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 pr-10">2,500</p>
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100">30%</p>
                        </div>
                    </div>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <img alt="lebnon" src="https://i.ibb.co/hBj1rT9/lebnon.png" className="w-5 h-5" />
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Lebnon</p>
                        </div>
                        <div className=" flex items-center ">
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 pr-10">2,500</p>
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100">30%</p>
                        </div>
                    </div>
                    <div className="pt-5 flex items-center justify-between">
                        <div className="flex items-center">
                            <img alt="USA" src="https://i.ibb.co/YycnHbn/usa.png" className="w-5 h-5" />
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">USA</p>
                        </div>
                        <div className=" flex items-center ">
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100 pr-10">2,500</p>
                            <p className="text-xs leading-3 text-right text-gray-800 dark:text-gray-100">30%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
