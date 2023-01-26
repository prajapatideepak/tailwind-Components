import React,{useState} from "react";

function Index() {
    const [show, setShow] = useState(null)
    return (
        <>
            <div className="xl:w-3/4 2xl:w-4/5 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Activity Board</p>
                    </div>
                </div>
                <div className="bg-white px-4 md:px-10 pb-5">
                    <div>
                        <div className="pb-2 border-b border-gray-200">
                            <p className="text-xs font-medium leading-3 text-gray-600">08 January 2021</p>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="h-6 border-l border-dashed border-gray-200" />
                                <div className="px-3 py-2 bg-gray-100 rounded-full">
                                    <p className="text-xs leading-none text-gray-600">16:01</p>
                                </div>
                                <div className="h-6 border-l border-dashed border-gray-200" />
                            </div>
                            <div className="bg-gray-100 rounded py-6 px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-medium leading-none text-gray-800">New Card Added</p>
                                    <div className="relative">
                                        {show == 0 && (
                                            <div className="dropdown-content mt-8 absolute  left-0 shadow-md z-10 w-32">
                                                <ul className="bg-white shadow rounded py-1">
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                </ul>
                                            </div>
                                        )}
                                        {show == 0 ? (
                                            <button onClick={()=>setShow(null)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <button onClick={()=>setShow(0)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                                <div className="flex items-center mt-5">
                                    <img className="w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                    <p className="text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="h-6 border-l border-dashed border-gray-200" />
                                <div className="px-3 py-2 bg-gray-100 rounded-full">
                                    <p className="text-xs leading-none text-gray-600">16:01</p>
                                </div>
                                <div className="h-6 border-l border-dashed border-gray-200" />
                            </div>
                            <div className="bg-gray-100 rounded py-6 px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-medium leading-none text-gray-800">
                                        New attachments added in
                                        <span className="text-blue-500">‘Wireframes MVP’</span>
                                    </p>
                                    <div className="relative">
                                        {show == 1 && (
                                            <div className="dropdown-content mt-8 absolute  left-0 shadow-md z-10 w-32">
                                                <ul className="bg-white shadow rounded py-1">
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                </ul>
                                            </div>
                                        )}
                                        {show == 1 ? (
                                            <button onClick={()=>setShow(null)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <button onClick={()=>setShow(1)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                                <div className="flex items-center mt-6">
                                    <div className="w-12 h-12 sm:w-24 sm:h-24 rounded">
                                        <img src="https://cdn.tuk.dev/assets/templates/olympus/projects(16).png" />
                                    </div>
                                    <div className="w-12 h-12 sm:w-24 sm:h-24 ml-4 rounded">
                                        <img src="https://cdn.tuk.dev/assets/templates/olympus/projects(17).png" />
                                    </div>
                                    <div className="w-12 h-12 sm:w-24 sm:h-24 ml-4 rounded">
                                        <img src="https://cdn.tuk.dev/assets/templates/olympus/projects(18).png" />
                                    </div>
                                    <div className="px-2 sm:px-6 py-4 sm:py-10 ml-4 rounded flex items-center justify-center border border-gray-300">
                                        <p className="text-xs leading-none text-gray-600">+ 2 more</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5">
                                    <img className="w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                    <p className="text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="h-6 border-l border-dashed border-gray-200" />
                                <div className="px-3 py-2 bg-gray-100 rounded-full">
                                    <p className="text-xs leading-none text-gray-600">16:01</p>
                                </div>
                                <div className="h-6 border-l border-dashed border-gray-200" />
                            </div>
                            <div className="bg-gray-100 rounded py-6 px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-medium leading-none text-gray-800">New Comment Added</p>
                                    <div className="relative">
                                        {show == 2 && (
                                            <div className="dropdown-content mt-8 absolute  left-0 shadow-md z-10 w-32">
                                                <ul className="bg-white shadow rounded py-1">
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                    <li className="cursor-pointer text-gray-600 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                </ul>
                                            </div>
                                        )}
                                        {show == 2 ? (
                                            <button onClick={()=>setShow(null)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <button onClick={()=>setShow(2)} className="focus:outline-none">
                                                <svg onclick="dropdownFunction(this)" className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#52525B" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm leading-5 text-gray-600 mt-2 sm:w-11/12">New comments are a great way to let your team know what they you are upto and how far along the project has progressed. It can also be valuable for someone that is looking for such information so that they are not lost and know what needs to be done next</p>
                                <div className="flex items-center mt-5">
                                    <img className="w-8 h-8 rounded-full shadow" src="https://cdn.tuk.dev/assets/templates/olympus/projects(15).png" />
                                    <p className="text-sm leading-none text-gray-800 ml-2">Anika Dias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
