import React from "react";
function Index() {
    return (
        <>
            <div className="w-21/12 md:w-1/4 w-11/12 mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-2 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" className="h-56 w-2 rounded bg-indigo-700" />
                        </div>
                        <p className="text-sm text-gray-600">Ideation</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-2 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" className="h-48 w-2 rounded bg-indigo-700" />
                        </div>
                        <p className="text-sm text-gray-600">UX</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-2 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" className="h-24 w-2 rounded bg-indigo-700" />
                        </div>
                        <p className="text-sm text-gray-600">UI</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-64 w-2 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" className="h-32 w-2 rounded bg-indigo-700" />
                        </div>
                        <p className="text-sm text-gray-600">Testing</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
