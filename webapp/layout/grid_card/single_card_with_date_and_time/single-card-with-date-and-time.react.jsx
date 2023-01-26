const Index = (props) => (
    <div>
        <div className="mx-auto container dark:bg-gray-900 flex justify-center items-center py-12 px-6">
            <div className="max-w-xs">
                <div className="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800  rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div className="mb-3 flex items-center">
                            <div className="border border-gray-300 rounded-full px-3 py-1 text-gray-600 dark:text-gray-400 text-xs flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={13} r={7} />
                                    <polyline points="12 10 12 13 14 13" />
                                    <line x1={7} y1={4} x2="4.25" y2={6} />
                                    <line x1={17} y1={4} x2="19.75" y2={6} />
                                </svg>
                                <p className="ml-2">7 Sept, 23:00</p>
                            </div>
                            <div className="p-1 bg-gray-800  rounded-full ml-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p className="text-sm">March 28, 2020</p>
                            <div className="w-8 h-8 rounded-full bg-gray-800  text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Index;
