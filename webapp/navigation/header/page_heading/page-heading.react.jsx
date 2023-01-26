import React from "react";
export default function Home() {
    return (
        <>
            <div className="w-full bg-gray-50 p-4 flex sm:items-center items-start justify-between">
                <div className="sm:flex items-center">
                    <div className="sm:w-64 w-56 bg-white border rounded border-gray-200 flex items-center lg:mr-60 mr-6">
                        <svg className="ml-2" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 14L10 10" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className="mx-2 focus:outline-none w-full py-2 text-sm leading-none placeholder-gray-600 text-gray-600" placeholder="Search here" />
                    </div>
                    <div className="flex items-center sm:mt-0 mt-4">
                        <p className="text-sm leading-none text-gray-600">
                            Today, <span className="font-bold">July 23</span>
                        </p>
                        <svg className="ml-2 cursor-pointer" width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <a aria-label="show notifications" role="link" href="javascript:void(0)" className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                            <svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92475 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />
                        <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />
                    </div>
                    <div className="w-8 h-8 ml-5 cursor-pointer">
                        <img src="https://i.ibb.co/xLtZCRT/Mask-Group.png" alt="profile picture" />
                    </div>
                </div>
            </div>
        </>
    );
}
