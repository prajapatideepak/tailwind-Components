import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/* Code block starts */}
            <div className={flag ? "absolute top-0 mt-12 w-full bg-yellow-400 shadow mb-8" : "absolute top-0 mt-12 w-full bg-yellow-400 shadow mb-8 translate-hide"}>
                <div className="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12">
                    <div className="w-full xl:flex lg:flex py-6 items-center">
                        <div className="xl:w-5/6 lg:w-5/6 w-full flex xl:flex-row lg:flex-row flex-col xl:justify-start lg:justify-start justify-center items-center">
                            <div className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                    <path className="heroicon-ui" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </div>
                            <p className="mx-4 text-lg text-white text-center sm:text-left">Hurricane warning in this area. Please check local media and authorities-NWS</p>
                        </div>
                        <div className="w-2/12 flex justify-end">
                            <div onClick={() => setFlag(false)} className="cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Code block ends */}
            <style>
                {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
            </style>
        </div>
    );
};
export default Index;
