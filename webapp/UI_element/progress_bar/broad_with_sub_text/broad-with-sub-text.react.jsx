import React from "react";
function Index() {
    return (
        <>
            <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="flex justify-between items-center pb-2 flex-col">
                    <p className="text-xs text-indigo-700 font-bold">63% Complete</p>
                    <p className="text-xs font-bold text-gray-500">Please wait while your transaction is processed</p>
                </div>
                <div className="flex items-center">
                    <div className="w-1/3 bg-indigo-700 h-2 rounded-tl rounded-bl mr-1" />
                    <div className="w-1/3 bg-gray-200 h-2 mr-1 relative">
                        <div className="h-2 w-1/6 bg-indigo-700" />
                    </div>
                    <div className="w-1/3 bg-gray-200 h-2 rounded-tr rounded-br" />
                </div>
            </div>
        </>
    );
}
export default Index;
