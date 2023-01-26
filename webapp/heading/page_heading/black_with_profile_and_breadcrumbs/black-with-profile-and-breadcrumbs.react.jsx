import React from "react";
const Index = () => {
    return (
        <div>
            <div className="bg-gray-800 pt-8 pb-8 lg:pb-16">
                <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-col flex lg:flex-row items-start lg:items-center">
                        <div className="flex items-center">
                            <div className="h-12 w-12 mr-3 ">
                                <img className="border-2 shadow border-gray-600 rounded-full object-cover h-full w-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/page_headings/ph_1.png" alt="logo" />
                            </div>
                            <div>
                                <h5 className="text-sm text-white leading-4 mb-1">Andres Berlin</h5>
                                <p className="text-xs text-gray-400 leading-4">VP Operations</p>
                            </div>
                        </div>
                        <div className="ml-0 lg:ml-20 mt-6 lg:mt-0">
                            <h4 className="text-2xl font-bold leading-tight text-white mb-2">Dashboard</h4>
                            <p className="flex items-center text-gray-300 text-xs">
                                <span>Portal</span>
                                <span className="mx-2">&gt;</span>
                                <span>Dashboard</span>
                                <span className="mx-2">&gt;</span>
                                <span>KPIs</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <button className="mr-3 bg-transparent focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">Back</button>
                        <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-gray-200 bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};
export default Index;
