import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden">
                <div className="bg-white dark:bg-gray-800 rounded-t p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center">
                            <div className="w-12 relative">
                                <img className="w-12" src="https://i.ibb.co/WnVgd7B/DP.png" alt srcSet />
                            </div>
                            <div className="ml-4">
                                <p className="sm:text-lg text-base font-semibold leading-4 text-gray-800 dark:text-gray-100">Tolu Arowoselu</p>
                                <p className="sm:text-base text-sm leading-6  text-gray-500 dark:text-gray-400">2 hours ago</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                    <p className="mt-6 mb-4 text-base leading-5 text-gray-800 dark:text-gray-100 w-11/12">
                        Got quarantined at the vet and had to give Billy a little peptalk that the other dogs do wanna be his friend, he’s just can’t wait to play with them
                        <br />
                        <span className="font-bold ">#billy #pets #dogs</span>
                    </p>
                </div>
                <img className="w-full" src="https://i.ibb.co/XSch7BW/adorable-dog.png" alt srcSet />
                <div className="bg-white dark:bg-gray-800 rounded-b px-6 py-5 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-heart" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <p className="ml-2 text-lg leading-4 text-gray-500 dark:text-gray-400">91</p>
                        </div>
                        <div className="ml-4 sm:ml-8 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-message-dots" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={12} y1={11} x2={12} y2="11.01" />
                                <line x1={8} y1={11} x2={8} y2="11.01" />
                                <line x1={16} y1={11} x2={16} y2="11.01" />
                            </svg>
                            <p className="ml-2 text-lg leading-4 text-gray-500 dark:text-gray-400">14</p>
                        </div>
                        <div className="ml-4 sm:ml-8 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-share" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={6} cy={12} r={3} />
                                <circle cx={18} cy={6} r={3} />
                                <circle cx={18} cy={18} r={3} />
                                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-star" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                </div>
            </div>
        </>
    );
}
