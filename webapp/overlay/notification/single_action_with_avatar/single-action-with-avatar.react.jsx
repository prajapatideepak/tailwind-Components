import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div role="alert" className={flag ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 justify-between w-10/12 bg-white shadow-lg rounded flex absolute left-0 sm:left-auto right-0 sm:top-0 dark:bg-gray-800 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
            <div>
                <div className="flex items-center">
                    <div className="px-2 sm:px-4 flex items-center justify-center">
                        <div className="h-12 w-12 sm:h-10 sm:w-10 rounded-full">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/notifications/n_1.png" alt className="h-full w-full object-cover rounded-full shadow" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-4/6 py-4">
                        <p className="text-sm text-gray-800 dark:text-gray-100 font-semibold">Ashley Wilson</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">Lets meet at the bar at 9:00pm tonight.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center border-l items-center border-gray-300 dark:border-gray-700 px-4">
                    <div className="pt-2 pb-2 w-full flex justify-center">
                        <span className="text-sm text-blue-500 font-bold cursor-pointer" onClick={() => setFlag(false)}>
                            Reply
                        </span>
                    </div>
                </div>
            </div>
            <style>
                {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                }
                `}
            </style>{" "}
        </div>
    );
};

export default Index;
