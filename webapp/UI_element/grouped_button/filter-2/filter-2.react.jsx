import { useState } from "react";
const Index = () => {
    const [filterType, setFilterType] = useState("html");
    const setDefault = (value) => {
        if (!value) {
            setFilterType("html");
        }
    };

    const setValues = (value) => {
        setFilterType(value);
        setDefault(value);
    };

    return (
        <>
            <div className="flex justify-center w-full py-12">
                <div className="flex flex-col items-center px-8 xl:px-24 w-full">
                    <div className="border rounded-lg border-gray-200 dark:border-gray-700 flex flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between p-4 items-center lg:items-center 2xl:items-start w-full">
                        <div className="hidden lg:flex items-center w-full 2xl:w-2/3 lg:justify-center 2xl:justify-start">
                            <button onClick={() => setFilterType("html")} className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none hover:text-gray-50 focus:text-gray-50 uppercase px-5 py-4 dark:focus:bg-brand dark:hover:bg-brand focus:bg-brand hover:bg-brand rounded-md flex justify-center items-center mr-16 ${filterType === "html" ? "bg-brand text-gray-50 dark:text-gray-50" : "text-gray-800 dark:text-gray-300"}`}>
                                All Templates
                            </button>
                            <button onClick={() => setFilterType("react")} className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none hover:text-gray-50 focus:text-gray-50 uppercase px-5 py-4 dark:focus:bg-brand dark:hover:bg-brand focus:bg-brand hover:bg-brand rounded-md flex justify-center items-center mr-16 ${filterType === "react" ? "bg-brand text-gray-50 dark:text-gray-50" : "text-gray-800 dark:text-gray-300"}`}>
                                React
                            </button>
                            <button onClick={() => setFilterType("angular")} className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none hover:text-gray-50 focus:text-gray-50 uppercase px-5 py-4 dark:focus:bg-brand dark:hover:bg-brand focus:bg-brand hover:bg-brand rounded-md flex justify-center items-center mr-16 ${filterType === "angular" ? "bg-brand text-gray-50 dark:text-gray-50" : "text-gray-800 dark:text-gray-300"}`}>
                                Angular
                            </button>
                            <button onClick={() => setFilterType("vue")} className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none hover:text-gray-50 focus:text-gray-50 uppercase px-5 py-4 dark:focus:bg-brand dark:hover:bg-brand focus:bg-brand hover:bg-brand rounded-md flex justify-center items-center mr-16 ${filterType === "vue" ? "bg-brand text-gray-50 dark:text-gray-50" : "text-gray-800 dark:text-gray-300"}`}>
                                Vue
                            </button>
                            <button disabled className={" focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none text-gray-400 uppercase px-5 py-4 rounded-md flex justify-center items-center "}>
                                Wordpress
                            </button>
                        </div>
                        <div className="relative py-2 lg:py-4 px-5 bg-gray-100 dark:bg-gray-800 rounded w-full sm:w-10/12 md:w-1/3 block lg:hidden">
                            <select value={filterType} onChange={(event) => setValues(event.target.value)} className="text-sm md:text-base w-full h-full bg-transparent focus:outline-none uppercase text-gray-800 dark:bg-gray-800 dark:text-white">
                                <option className="md:text-xs lg:text-sm 2xl:text-base leading-none" value="">
                                    All Templates
                                </option>
                                <option className="md:text-xs lg:text-sm 2xl:text-base leading-none" value="react">
                                    React
                                </option>
                                <option className="md:text-xs lg:text-sm 2xl:text-base leading-none" value="angular">
                                    Angular
                                </option>
                                <option className="md:text-xs lg:text-sm 2xl:text-base leading-none" value="vue">
                                    Vue
                                </option>
                                <option disabled className="md:text-xs lg:text-sm 2xl:text-base leading-none text-gray-400">
                                    Wordpress
                                </option>
                            </select>
                        </div>
                        <div class="mt-4 md:mt-0 lg:mt-4 md:ml-4 lg:ml-0 flex flex-col md:flex-row items-center w-full sm:w-10/12 md:w-2/3 2xl:w-1/3 2xl:mt-0">
                            <div class="relative text-gray-800 dark:text-white md:mr-4 w-full lg:w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto ml-3 icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="10" cy="10" r="7"></circle>
                                    <line x1="21" y1="21" x2="15" y2="15"></line>
                                </svg>
                                <label class="absolute pointer-events-none opacity-0">Search</label>
                                <input class="text-sm md:text-base w-full focus:outline-none px-5 py-2 lg:py-3 bg-gray-100 rounded pl-10 placeholder-gray-800 dark:placeholder-white dark:bg-gray-800" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
