import React from "react";

export default function index() {
    return (
        <>
            <div className="flex items-center justify-center py-10 px-4 relative">
                <div className="max-w-md relative w-full bg-white border border-gray-200 p-4">
                    <div className="absolute pb-10 ml-3 mt-2 z-0 h-full">
                        <img src="https://i.ibb.co/Gxt6VGp/Line-13.png" className="h-full" alt="line" aria-hidden="true" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex flex-col items-center relative z-20">
                            <div className="w-6 h-6 bg-indigo-700 rounded-full text-sm font-medium leading-none text-white flex items-center justify-center">1</div>
                        </div>
                        <div className="ml-5">
                            <h1 className="text-base font-medium leading-4 text-gray-800">Settings</h1>
                            <p className="text-sm leading-5 text-gray-600 mt-2">Generating random paragraphs can be an excellent way for writers to get their creative flow.</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <div className="flex flex-col items-center relative z-20">
                            <div className="w-6 h-6 bg-indigo-50 rounded-full text-sm font-medium leading-none text-gray-600 flex items-center justify-center">2</div>
                        </div>
                        <div className="ml-5">{/* second step */}</div>
                    </div>
                    <div className="flex items-start mt-6">
                        <div className="flex flex-col items-center relative z-20">
                            <div className="w-6 h-6 bg-indigo-50 rounded-full text-sm font-medium leading-none text-gray-600 flex items-center justify-center">3</div>
                        </div>
                        <div className="ml-5">{/* third step */}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
