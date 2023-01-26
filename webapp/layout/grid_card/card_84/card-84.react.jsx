import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-xl rounded bg-white shadow overflow-hidden p-6 sm:flex items-stretch">
                <div className="w-1/3 mr-4">
                    <img className="sm:mr-6 mb-6 sm:mb-0 flex-shrink-0 w-full sm:w-auto object-cover " src="https://i.ibb.co/HgMh1LN/tab-in-hand.png" alt srcSet />
                </div>
                <div className="flex flex-col justify-between w-2/3">
                    <h4 className="text-xl font-semibold leading-5 text-gray-800">Youtube has a new face, but has it lost its voice?</h4>
                    <p className="mt-4 text-sm leading-tight text-gray-800">I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of both. But this was not the only jamming jeopardy he was exposed to.</p>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-red-500 icon icon-tabler icon-tabler-heart" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <p className="ml-2 sm:ml-3 text-xs font-medium leading-3 text-gray-500">141</p>
                        </div>
                        <div className="flex items-center text-indigo-700 cursor-pointer">
                            <p className="text-sm font-semibold leading-none text-right mr-1">Read More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <line x1={13} y1={18} x2={19} y2={12} />
                                <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
