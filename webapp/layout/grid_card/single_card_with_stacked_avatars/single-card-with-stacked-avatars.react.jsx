const Index = (props) => (
    <div>
        <div className="mx-auto container py-12 px-6 dark:bg-gray-900 flex justify-center items-center ">
            <div className="max-w-xs">
                <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-3 py-5 px-4">
                    <div className="mb-5 w-20 rounded border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                        <div className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                        <p className="text-xs text-gray-800 dark:text-gray-100">Family</p>
                    </div>
                    <h4 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">Company website redesign</h4>
                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                        <div className="mb-5 rounded-full border border-gray-400 py-1 pl-2 pr-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 icon icon-tabler icon-tabler-alarm" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={13} r={7} />
                                <polyline points="12 10 12 13 14 13" />
                                <line x1={7} y1={4} x2="4.25" y2={6} />
                                <line x1={17} y1={4} x2="19.75" y2={6} />
                            </svg>
                            <p className="ml-2 text-xs">7 Sept, 23:00</p>
                        </div>
                        <p className="text-xs text-red-500 font-semibold">Two days ago</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-gray-600 dark:text-gray-400">
                        <div className="flex items-center flex-no-wrap">
                            <div className="w-6 h-6 bg-cover bg-center rounded-md">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                            </div>
                            <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                            </div>
                            <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
export default Index;
