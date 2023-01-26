const functionName = (props) => (
    <div>
        <div className="flex justify-center w-full dark:bg-gray-900 py-12">
            <div id="check" className="md:flex w-10/12 bg-white dark:bg-gray-800 shadow-lg items-center justify-between px-4 visible py-6">
                <div className="flex items-center text-gray-400">
                    <svg onclick="selection(false)" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                        <circle cx={10} cy={10} r={10} stroke="currentColor" />
                        <path d="M6 10.5H14" stroke="currentColor" strokeLinecap="square" />
                    </svg>
                    <p className="text-gray-900 dark:text-gray-100 text-base ml-3">1 notebook selected</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0 dark:text-gray-400">
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                            <circle cx={9} cy={9} r={2} />
                        </svg>
                    </div>
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                    </div>
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={5} width={16} height={16} rx={2} />
                            <line x1={16} y1={3} x2={16} y2={7} />
                            <line x1={8} y1={3} x2={8} y2={7} />
                            <line x1={4} y1={11} x2={20} y2={11} />
                            <rect x={8} y={15} width={2} height={2} />
                        </svg>
                    </div>
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11h6m-3 -3v6" />
                        </svg>
                    </div>
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={4} width={18} height={4} rx={2} />
                            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                            <line x1={10} y1={12} x2={14} y2={12} />
                        </svg>
                    </div>
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default functionName;
