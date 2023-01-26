import React from "react";
import Cards from "components/search_result_components/cards/index";
export default function IndexPage() {
    return (
        <>
            <div className="container mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-1/3">
                        <div className="bg-gray-100 mt-6">
                            <div className="flex items-center justify-between p-5">
                                <h4 className="text-xl font-semibold text-gray-700 pt-1.5">Chats</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={5} cy={12} r={1} />
                                    <circle cx={12} cy={12} r={1} />
                                    <circle cx={19} cy={12} r={1} />
                                </svg>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full">
                                    <div className="absolute text-black flex items-center pl-6 h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 28 28" fill="none">
                                            <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input id="search" className="w-full text-text-gray-600 focus:outline-none font-normal pl-16 pr-16 h-9 flex items-center text-sm bg-gray-200 border-t border-b" placeholder="Search Chats" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:overflow-y-scroll h-screen mb-16 lg:px-0 px-4" id="search">
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a className="cursor-pointer">
                                <div className="p-5 bg-gray-100 hover:bg-gray-200">
                                    <div>
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-9 h-9 rounded-full" />
                                            <div className="ml-2 w-full">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                                    <p className="text-xs text-gray-600">11:05pm</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                        <line x1={15} y1={16} x2={19} y2={12} />
                                                        <line x1={15} y1={8} x2={19} y2={12} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-snug text-gray-600">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                        </div>
                    </div>
                    <div className="w-full pl-16 mt-6 hidden lg:block">
                        <div className="border h-screen flex flex-col justify-between">
                            {/* CHAT */}
                            <div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center py-5">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-12 h-12 rounded-full" />
                                            <div className="ml-4">
                                                <h3 className="text-lg text-gray-700">Thomas Geller</h3>
                                                <p className="text-xs text-gray-600">Joined on 12 September 2020</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag" width={22} height={22} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={5} x2={5} y2={21} />
                                                    <line x1={19} y1={5} x2={19} y2={14} />
                                                    <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                                    <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                                </svg>
                                            </div>
                                            <div className="mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width={22} height={22} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                                    <line x1={8} y1={9} x2={16} y2={9} />
                                                    <line x1={8} y1={13} x2={14} y2={13} />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={22} height={22} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4C51BF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100">
                                    <div className="flex items-center p-6">
                                        <p className="text-xs underline text-indigo-600 mr-1">OnePlus 5T for Sale</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <line x1={15} y1={16} x2={19} y2={12} />
                                            <line x1={15} y1={8} x2={19} y2={12} />
                                        </svg>
                                        <p className="text-base text-indigo-700">$350</p>
                                    </div>
                                </div>
                                <div className="overflow-y-scroll" id="search">
                                    <div className="p-8 flex">
                                        <div className="w-16">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-12 h-12 rounded-full" />
                                        </div>
                                        <div className="w-full pr-36">
                                            <p>Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications. hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex bg-gray-100">
                                        <div className="w-16">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/13.png" className="w-12 h-12 rounded-full" />
                                        </div>
                                        <div className="w-full pr-36">
                                            <p>Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications. hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex">
                                        <div className="w-16">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-12 h-12 rounded-full" />
                                        </div>
                                        <div className="w-full pr-36">
                                            <p>Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications. hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex bg-gray-100">
                                        <div className="w-16">
                                            <img src="https://cdn.tuk.dev/assets/templates/classified/13.png" className="w-12 h-12 rounded-full" />
                                        </div>
                                        <div className="w-full pr-36">
                                            <p>Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications. hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas</p>
                                            <div className="flex flex-wrap items-center mt-5">
                                                <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-copy-8.png" className="mr-3" />
                                                <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-9.png" className="mr-3" />
                                                <img src="https://cdn.tuk.dev/assets/templates/classified/Rectangle-Copy-10.png" className="mr-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CHAT */}
                            <div className="h-16 border-t">
                                <div className="flex h-full">
                                    <div className="w-16 h-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={9} x2="9.01" y2={9} />
                                            <line x1={15} y1={9} x2="15.01" y2={9} />
                                            <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
                                        </svg>
                                    </div>
                                    <input className="w-full focus:outline-none text-gray-700" placeholder="Type Something here" />
                                    <div className="flex">
                                        <div className="w-16 h-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                                            </svg>
                                        </div>
                                        <div className="w-16 h-full flex items-center justify-center bg-indigo-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={10} y1={14} x2={21} y2={3} />
                                                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
