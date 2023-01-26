import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/* Code block starts */}

            <div className="flex items-center justify-center px-4 sm:px-0">
                <div id="alert" className={flag ? "lg:w-10/12 transition duration-150 ease-in-out bg-green-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 " : "lg:w-10/12 transition duration-150 ease-in-out bg-green-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 translate-hide"}>
                    <div className="sm:flex items-center">
                        <div className="flex items-end">
                            <div className="mr-2 mt-0.5 sm:mt-0 text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                                </svg>
                            </div>
                            <p className="mr-2 text-base font-bold text-green-500">Success</p>
                        </div>
                        <div className="h-1 w-1 bg-green-500 rounded-full mr-2 hidden xl:block" />
                        <p className="text-base text-green-500">Your Payment was successful. You can now use our services.</p>
                    </div>
                    <div className="flex justify-end mt-4 md:mt-0 md:pl-4 lg:pl-0">
                        <span className="text-sm mr-4 font-bold cursor-pointer text-green-500">Details</span>
                        <span onClick={() => setFlag(false)} className="text-sm cursor-pointer text-gray-500">
                            Dismiss
                        </span>
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
