const Index = () => (
    <div className="py-14 px-6  md:flex items-center w-full justify-between">
        <div className="flex md:w-1/2 justify-between items-center">
            <div className="rounded relative w-8/12 md:w-8/12 lg:w-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 absolute ml-4 inset-0 m-auto icon icon-tabler icon-tabler-search" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
                <input className="border border-gray-100 focus:outline-none focus:border-brand rounded-full w-full text-sm bg-gray-100 text-gray-500 pl-12 sm:pl-10 md:pl-12 py-3 pr-4" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center md:hidden ml-6 md:ml-0">
                <div className="mr-2 md:mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                        <path d="M11.6667 5.83333C11.6667 4.54467 12.7113 3.5 14 3.5C15.2887 3.5 16.3333 4.54467 16.3333 5.83333C19.0635 7.12431 20.8584 9.81662 21 12.8333V16.3333C21.178 17.8043 22.044 19.1032 23.3333 19.8333H4.66666C5.95596 19.1032 6.82195 17.8043 7 16.3333V12.8333C7.14159 9.81662 8.93647 7.12431 11.6667 5.83333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 19.8333V21C10.5 22.933 12.067 24.5 14 24.5C15.933 24.5 17.5 22.933 17.5 21V19.8333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <img className src="https://cdn.tuk.dev/assets/components/todos/profile.png" alt="profile" srcSet />
            </div>
        </div>
        <div className="flex flex-col flex-col-reverse mt-5 md:mt-0 md:flex-row md:items-center">
            <div className="relative w-full sm:w-1/2 md:w-auto">
                <select className="focus:outline-none border border-gray-400 rounded-lg appearance-none cursor-pointer text-sm py-3 pl-4 pr-10 text-gray-700">
                    <option>Notebook: UX Design brainstorming</option>
                    <option>Notebook: UX Design brainstorming</option>
                    <option>Notebook: UX Design brainstorming</option>
                </select>
                <div className="w-4 h-4 absolute m-auto inset-0 mr-4 pointer-events-none cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
            <div className="ml-4 lg:ml-12 hidden md:flex items-center">
                <div className="mr-2 lg:mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                        <path d="M11.6667 5.83333C11.6667 4.54467 12.7113 3.5 14 3.5C15.2887 3.5 16.3333 4.54467 16.3333 5.83333C19.0635 7.12431 20.8584 9.81662 21 12.8333V16.3333C21.178 17.8043 22.044 19.1032 23.3333 19.8333H4.66666C5.95596 19.1032 6.82195 17.8043 7 16.3333V12.8333C7.14159 9.81662 8.93647 7.12431 11.6667 5.83333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 19.8333V21C10.5 22.933 12.067 24.5 14 24.5C15.933 24.5 17.5 22.933 17.5 21V19.8333" stroke="#718096" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <img className src="https://cdn.tuk.dev/assets/components/todos/profile.png" alt="profile" srcSet />
            </div>
        </div>
    </div>
);
export default Index;
