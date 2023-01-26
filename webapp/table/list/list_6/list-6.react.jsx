import React from "react";

function Index() {
    return (
        <>
            <div className="lg:pr-6 lg:w-5/12 w-full px-4">
                <div className="border rounded-lg border pb-8 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Customer Support</p>
                        <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                            <p className="text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                        </div>
                    </div>
                    <div className="px-6 pt-8">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-xs md:text-sm font-semibold leading-none text-gray-800">David Jones</p>
                                    <p className="text-xs md:text-sm leading-none text-blue-500 pl-3">(CID 879-10-940)</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                            </div>
                            <div>
                                <p className="text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-xs md:text-sm font-semibold leading-none text-gray-800">Carla Smith</p>
                                    <p className="text-xs md:text-sm leading-none text-blue-500 pl-3">(CID 879-10-940)</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                            </div>
                            <div>
                                <p className="text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-xs md:text-sm font-semibold leading-none text-gray-800">Samantha. J</p>
                                    <p className="text-xs md:text-sm leading-none text-blue-500 pl-3">(CID 879-10-940)</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                            </div>
                            <div>
                                <p className="text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</p>
                            </div>
                        </div>
                        <div className="pt-6 pb-0.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-xs md:text-sm font-semibold leading-none text-gray-800">Dwayne Jon</p>
                                    <p className="text-xs md:text-sm leading-none text-blue-500 pl-3">(CID 879-10-940)</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm leading-none text-right text-gray-600">2hrs ago</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-xs md:text-sm leading-tight text-gray-600">Order has not been received and is past the delivery...</p>
                            </div>
                            <div>
                                <p className="text-sm leading-none underline text-indigo-700 cursor-pointer">Resolve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
