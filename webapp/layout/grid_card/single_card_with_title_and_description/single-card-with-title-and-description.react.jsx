const Index = (props) => (
    <div>
        <div className="flex w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center items-center ">
            <div>
                <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                        <p className="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-gray-800">
                            <p className="text-sm dark:text-gray-100">March 28, 2020</p>
                            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
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
