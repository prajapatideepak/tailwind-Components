import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 4 col grid for best view. */}
            {/* Card code block start */}
            <div className="bg-white dark:bg-gray-800 shadow rounded">
                <div className="pt-4 px-4 flex items-center justify-between pb-8">
                    <p className="text-indigo-700 dark:text-indigo-600 font-normal text-xs">UX Design</p>
                    <div className="flex items-center">
                        <svg className="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg className="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg className="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg className="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                        <svg className="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center w-full mb-3">
                    <div className="w-16 h-16 rounded border border-white dark:border-gray-700 shadow">
                        <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png" alt="placeholder image" />
                    </div>
                </div>
                <h5 className="mb-2 text-base text-gray-800 dark:text-gray-100 leading-4 font-normal tracking-normal text-center">Jackson Teller</h5>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-3 font-normal tracking-normal text-center">Senior UX Designer</p>
                <div className="flex justify-center w-full mb-6">
                    <p className="py-2 px-5 bg-indigo-700 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white">Professional</p>
                </div>
                <div className="flex items-center justify-center mb-2 mx-4">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 text-center tracking-normal p-2">UX Research</div>
                    <div className="ml-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 text-center tracking-normal p-2">Product Strategy</div>
                </div>
                <div className="flex items-center justify-center mb-5 mx-4">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 tracking-normal text-center p-2">UX Research</div>
                    <div className="ml-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 tracking-normal text-center p-2">Product Strategy</div>
                </div>
                <p className="flex justify-center py-4 text-gray-600 dark:text-gray-400 cursor-pointer hover:bg-indigo-700 rounded-b hover:text-white text-sm border-t dark:border-gray-200 border-gray-300 tracking-normal">View Profile</p>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
