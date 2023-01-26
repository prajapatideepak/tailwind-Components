import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden">
                <div className="bg-white dark:bg-gray-800 rounded-t p-6">
                    <div className="flex items-start justify-between">
                        <div className="sm:flex items-start sm:items-center">
                            <div className="w-12 relative overflow-hidden">
                                <img className="w-12" src="https://i.ibb.co/BZ5Z774/profile-pic-100px.png" alt srcSet />
                            </div>
                            <div className="sm:ml-4 mt-6 sm:mt-0">
                                <p className="text-lg font-semibold leading-4 dark:text-gray-100 text-gray-800">Tolu Arowoselu</p>
                                <p className="text-base leading-6 pt-1 text-gray-500 dark:text-gray-400">2 hours ago</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer dark:text-gray-400 text-gray-700 icon icon-tabler icon-tabler-dots" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                    <p className="mt-6 mb-4 text-sm leading-5 dark:text-gray-100 text-gray-800 sm:w-11/12">
                        Got quarantined at the vet and had to give Billy a little peptalk that the other dogs do wanna be his friend, he’s just can’t wait to play with them
                        <br />
                        <span className="font-bold sm:pt-0 pt-1">#billy #pets #dogs</span>
                    </p>
                </div>
                <img className="w-full" src="https://i.ibb.co/XWtymvn/brown-dog.png" alt srcSet />
                <div className="bg-white dark:bg-gray-800 px-6 py-5 sm:flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer dark:text-gray-400 text-gray-600 icon icon-tabler icon-tabler-heart" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <p className="ml-2.5 text-lg leading-4 text-gray-500 dark:text-gray-400">91</p>
                        </div>
                        <div className="ml-8 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer dark:text-gray-400 text-gray-600 icon icon-tabler icon-tabler-message-dots" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={12} y1={11} x2={12} y2="11.01" />
                                <line x1={8} y1={11} x2={8} y2="11.01" />
                                <line x1={16} y1={11} x2={16} y2="11.01" />
                            </svg>
                            <p className="ml-2.5 text-lg leading-4 text-gray-500 dark:text-gray-400">14</p>
                        </div>
                        <div className="ml-8 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer dark:text-gray-400 text-gray-600 icon icon-tabler icon-tabler-share" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={6} cy={12} r={3} />
                                <circle cx={18} cy={6} r={3} />
                                <circle cx={18} cy={18} r={3} />
                                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 sm:mt-0">
                        <img className="w-6 h-6" src="https://i.ibb.co/Swqb7yk/avatar-1.png" alt srcSet />
                        <img className="-ml-2 w-6 h-6" src="https://i.ibb.co/DkQvSbM/avatar-2.png" alt srcSet />
                        <img className="-ml-2 w-6 h-6" src="https://i.ibb.co/pvJxdVx/avatar-3.png" alt srcSet />
                        <img className="-ml-2 w-6 h-6" src="https://i.ibb.co/QNyXhQx/avatar-4.png" alt srcSet />
                        <div className="-ml-2 w-6 h-6 flex items-center justify-center rounded-full dark:bg-indigo-600 bg-indigo-700 text-white">
                            <p className="text-xs font-semibold leading-4 text-white -mt-1">+2</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-5 bg-gray-100 dark:bg-gray-900">
                    <div className="flex items-center">
                        <p className="text-lg font-semibold leading-loose text-gray-500 dark:text-gray-400 mr-3">5 Comments</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-auto cursor-pointer dark:text-gray-400 text-gray-600 icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="mt-7 sm:flex items-start">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 mt-2 w-10" src="https://i.ibb.co/DkQvSbM/avatar-2.png" alt srcSet />
                            <p className="text-base font-semibold sm:hidden ml-3 dark:text-gray-100 text-gray-800">
                                Cosmos_ <span className="text-gray-500 dark:text-gray-400 font-normal">&nbsp;&nbsp;&nbsp;03:38</span>
                            </p>
                        </div>
                        <div className="sm:ml-5 mt-5 sm:mt-0">
                            <p className="text-base font-semibold sm:block hidden dark:text-gray-100 text-gray-800">
                                Cosmos_ <span className="text-gray-500 dark:text-gray-400 font-normal">&nbsp;&nbsp;&nbsp;03:38</span>
                            </p>
                            <p className="text-base text-gray-500 dark:text-gray-400">He looks unhappy tho. LOL</p>
                        </div>
                    </div>
                    <div className="mt-7 sm:flex items-start">
                        <div className="flex items-center w-full sm:w-28">
                            <img className="flex-shrink-0 mt-2 w-10" src="https://i.ibb.co/QNyXhQx/avatar-4.png" alt srcSet />
                            <p className="text-base block ml-3 sm:hidden font-semibold dark:text-gray-100 text-gray-800">
                                Joe_Reddick98 <span className="text-gray-500 dark:text-gray-400 font-normal">&nbsp;&nbsp;&nbsp;03:09</span>
                            </p>
                        </div>
                        <div className="sm:ml-5 mt-5 sm:mt-0">
                            <p className="text-base hidden sm:block font-semibold dark:text-gray-100 text-gray-800">
                                Joe_Reddick98 <span className="text-gray-500 dark:text-gray-400 font-normal">&nbsp;&nbsp;&nbsp;03:09</span>
                            </p>
                            <p className="text-base text-gray-500 dark:text-gray-400 sm:w-4/5">My dog, Bright won’t even need a pep talk, dude be just waiving his tail to every dogs out there….he is so friendly 😉</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-b flex w-full items-center px-6 py-5 border-t-2 border-gray-200 dark:border-gray-900">
                    <input type="text" className="bg-transparent text-lg text-gray-500 dark:text-gray-400 w-full focus:outline-none" placeholder="Your comment" />
                </div>
            </div>
        </>
    );
}
