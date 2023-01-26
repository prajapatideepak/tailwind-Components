import React from "react";
const Index = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center " style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col  items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col md:mr-16 ">
                    <label htmlFor="password1" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Password
                    </label>
                    <input id="password1" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm text-red-400 border-red-400 rounded border dark:bg-gray-800 bg-white shadow" defaultValue={12345} />
                    <div className="flex items-center justify-between mt-2 text-red-400">
                        <p className="text-xs leading-3 tracking-normal">Incorrect combination, weak!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                    </div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                    <label htmlFor="password2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Password
                    </label>
                    <input id="password2" className="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm text-green-400 border-green-400 rounded border shadow" defaultValue="Correct_234" />
                    <div className="flex items-center justify-between mt-2 text-green-400">
                        <p className="text-xs leading-3 tracking-normal">Your passowrd is strong!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <path d="M9 12l2 2l4 -4" />
                        </svg>
                    </div>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
