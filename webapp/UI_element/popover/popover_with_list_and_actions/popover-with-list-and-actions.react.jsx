import React from "react";
function Index() {
    return (
        <>
            {/* Code block starts */}
            <div id="popover" className="transition duration-150 ease-in-out -mt-16 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
                <div className="w-full bg-white rounded shadow-2xl">
                    <div className="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
                        <svg className="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                        <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                            <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className="text-base text-gray-800 font-normal leading-normal tracking-normal opacity-50">Search for people to invite</p>
                    </div>
                    <div className="w-full h-full px-4 xl:px-8 py-5">
                        <div className="flex items-center justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                            </div>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif" alt="avatar" />
                            </div>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1586349425880-ab91652eae47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                            </div>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                            </div>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                            </div>
                            <div className="w-10 h-10 rounded-full shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                        <hr className="my-5 border border-gray-200" />
                        <div className="w-full h-full pb-5 lg:pb-10">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="mr-4 w-12 h-12 rounded-full shadow">
                                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Carry Mathison</h3>
                                        <p className="text-gray-600 text-xs leading-3">carry.mt@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-start md:items-center">
                                    <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-red-500 font-normal">Pending</span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="mr-4 w-12 h-12 rounded-full shadow">
                                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Ronald McDonald</h3>
                                        <p className="text-gray-600 text-xs leading-3">ronald.md@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-start md:items-center">
                                    <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-green-500 font-normal">Going</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="mr-4 w-12 h-12 rounded-full shadow">
                                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1586349425880-ab91652eae47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Linda Johnson</h3>
                                        <p className="text-gray-600 text-xs leading-3">linda.jh@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-start md:items-center">
                                    <div className="bg-gray-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-gray-600 font-normal">Cancelled</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Code block ends */}
        </>
    );
}
export default Index;
