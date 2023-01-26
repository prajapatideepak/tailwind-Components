import React from "react";
const Index = () => {
    return (
        <div>
            <div className="max-w-8xl mx-auto container py-8">
                <div className="flex justify-center">
                    <div className="w-8 h-8 shadow rounded-full mr-5 cursor-pointer text-gray-500 hover:text-indigo-700 transition duration-150 ease-in-out flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </div>
                    <div className="w-8 h-8 shadow rounded-full text-gray-500 hover:text-indigo-700 cursor-pointer flex justify-center items-center transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};
export default Index;
