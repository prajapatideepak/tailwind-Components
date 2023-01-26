const Index = () => {
    return (
        <div className="w-1/3 bg-white shadow rounded absolute top-20" id="modal">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-11 h-11 bg-indigo-50 rounded-sm flex items-center justify-center">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.00002 8L9.00303 2H19.998C20.55 2 21 2.455 21 2.992V21.008C20.9998 21.2712 20.895 21.5235 20.7088 21.7095C20.5226 21.8955 20.2702 22 20.007 22H3.99302C3.8617 21.9991 3.73185 21.9723 3.61087 21.9212C3.4899 21.8701 3.38017 21.7957 3.28796 21.7022C3.19575 21.6087 3.12286 21.4979 3.07346 21.3762C3.02406 21.2545 2.9991 21.1243 3.00002 20.993V8ZM10 3.5L4.50002 9H10V3.5Z" fill="#4338CA" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium leading-normal text-gray-800">Brainstorming Session Summary</p>
                        <p className="text-xs leading-3 text-gray-500 pt-1">Create, edit, and share this document</p>
                    </div>
                </div>
                <div className="cursor-pointer" onclick="modalHandler(false)">
                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7L7 21" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7L21 21" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="p-6 border-b border-gray-200">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Robert Watson</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">Watson.Robert@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 bg-gray-100 rounded flex items-center justify-between">
                            <select className="w-36 text-xs font-medium leading-3 text-gray-600 appearance-none bg-gray-100 focus:outline-none p-2">
                                <option className="text-xs font-medium leading-3 text-gray-600">Owner</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Edit access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">View access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Comment access</option>
                            </select>
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 rounded w-6 h-7 ml-2 flex items-center justify-center">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z" fill="#4B5563" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Jeramy Doe</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">Watson.Robert@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 bg-gray-100 rounded flex items-center justify-between">
                            <select className="w-36 text-xs font-medium leading-3 text-gray-600 appearance-none bg-gray-100 focus:outline-none p-2">
                                <option className="text-xs font-medium leading-3 text-gray-600">Edit access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">View access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Comment access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Owner</option>
                            </select>
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 rounded w-6 h-7 ml-2 flex items-center justify-center">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z" fill="#4B5563" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Monica Geller</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">Watson.Robert@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 bg-gray-100 rounded flex items-center justify-between">
                            <select className="w-36 text-xs font-medium leading-3 text-gray-600 appearance-none bg-gray-100 focus:outline-none p-2">
                                <option className="text-xs font-medium leading-3 text-gray-600">View access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Edit access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Comment access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Owner</option>
                            </select>
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 rounded w-6 h-7 ml-2 flex items-center justify-center">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z" fill="#4B5563" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Keaton Will</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">Watson.Robert@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 bg-gray-100 rounded flex items-center justify-between">
                            <select className="w-36 text-xs font-medium leading-3 text-gray-600 appearance-none bg-gray-100 focus:outline-none p-2">
                                <option className="text-xs font-medium leading-3 text-gray-600">Comment access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">View access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Edit access</option>
                                <option className="text-xs font-medium leading-3 text-gray-600">Owner</option>
                            </select>
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 rounded w-6 h-7 ml-2 flex items-center justify-center">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z" fill="#4B5563" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 flex items-center justify-between">
                <div className="bg-indigo-100 rounded p-3">
                    <div className="flex items-center">
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.18213 7.76799L8.47513 7.05999L9.18213 6.35299C9.41594 6.12122 9.60168 5.84554 9.72866 5.54179C9.85565 5.23804 9.92139 4.9122 9.92211 4.58298C9.92283 4.25375 9.85852 3.92763 9.73286 3.62332C9.60721 3.31902 9.42268 3.04253 9.18989 2.80974C8.95709 2.57694 8.6806 2.39241 8.3763 2.26676C8.072 2.1411 7.74587 2.07679 7.41665 2.07751C7.08742 2.07823 6.76158 2.14397 6.45783 2.27096C6.15408 2.39795 5.8784 2.58368 5.64663 2.81749L4.93963 3.52499L4.23213 2.81799L4.94013 2.11099C5.59654 1.45458 6.48682 1.08582 7.41513 1.08582C8.34343 1.08582 9.23372 1.45458 9.89013 2.11099C10.5465 2.7674 10.9153 3.65769 10.9153 4.58599C10.9153 5.5143 10.5465 6.40458 9.89013 7.06099L9.18263 7.76799H9.18213ZM7.76813 9.18199L7.06063 9.88899C6.40422 10.5454 5.51393 10.9142 4.58563 10.9142C3.65732 10.9142 2.76704 10.5454 2.11063 9.88899C1.45422 9.23258 1.08545 8.3423 1.08545 7.41399C1.08545 6.48569 1.45422 5.59541 2.11063 4.93899L2.81813 4.23199L3.52513 4.93999L2.81813 5.64699C2.58431 5.87877 2.39858 6.15445 2.27159 6.4582C2.1446 6.76195 2.07886 7.08779 2.07814 7.41701C2.07742 7.74624 2.14173 8.07236 2.26739 8.37667C2.39305 8.68097 2.57757 8.95746 2.81037 9.19025C3.04317 9.42305 3.31965 9.60758 3.62396 9.73323C3.92826 9.85889 4.25438 9.9232 4.58361 9.92248C4.91284 9.92176 5.23868 9.85602 5.54243 9.72903C5.84618 9.60204 6.12185 9.41631 6.35363 9.18249L7.06063 8.47549L7.76813 9.18249V9.18199ZM7.41413 3.87849L8.12163 4.58599L4.58613 8.12099L3.87863 7.41399L7.41413 3.87899V3.87849Z" fill="#4338CA" />
                        </svg>
                        <p className="text-xs pl-3 pr-4 border-r border-indigo-300 leading-3 text-indigo-700">www.figma.com/ksif02984-1..</p>
                        <p className="text-xs font-semibold pl-3 leading-3 text-indigo-700 cursor-pointer">COPY</p>
                    </div>
                </div>
                <div>
                    <button className="text-xs font-semibold py-3 px-6 bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600 leading-3 text-white">Done</button>
                </div>
            </div>
        </div>
    );
};
export default Index;
