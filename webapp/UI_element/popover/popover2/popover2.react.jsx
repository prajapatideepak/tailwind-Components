import React from "react";

function MyApp() {
    return (
        <div className="flex items-center justify-center py-8 px-4">
            <div className="w-96 bg-white shadow rounded ">
                <div className="py-6 w-full flex ityems-center justify-center border-b border-gray-200">
                    <h1 role="heading" tabIndex={0} className="focus:outline-none text-2xl font-bold leading-normal text-indigo-700">
                        Collaborate
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <p role="contentinfo" tabIndex={0} className="focus:outline-none  pt-6 w-72 text-sm font-medium leading-5 text-center text-gray-800">
                        Start discussions by adding annotation directly on design.
                    </p>
                </div>
                <div className="pt-10 px-16 flex items-center justify-center">
                    <img src="https://i.ibb.co/3svMG6M/Group-19.png" alt="set one comment" />
                </div>
                <div className="flex w-full items-center justify-center">
                    <p role="contentinfo" tabIndex={0} className="focus:outline-none  w-72 mt-8 text-sm leading-tight text-center text-gray-600">
                        Once you’ve discussed a point,you can create to-do and track your work
                    </p>
                </div>
                <div className="flex items-center justify-center mt-7 mb-6">
                    <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 text-sm font-medium leading-none text-center text-white bg-indigo-700 rounded px-5 py-3">Ok, got it</button>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
