import React from "react";
function Index() {
    return (
        <>
            <div className="px-6 flex sm:flex-row flex-wrap items-center">
                {/* Code block for small badge starts */}
                <div className="bg-indigo-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center mr-8">
                    <div className="flex items-center justify-around h-full w-full">
                        <span className="text-xs text-indigo-700 font-normal">Badge</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth={2} stroke="#667EEA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Code block ends */}
                {/* Code block for large badge starts */}
                <div className="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <div className="flex items-center justify-around h-full w-full">
                        <span className="text-xs text-indigo-700 font-normal">Badge</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth={2} stroke="#667EEA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Code block ends */}
            </div>
        </>
    );
}
export default Index;
