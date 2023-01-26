const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-80 w-full  rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
            <h1 className=" dark:text-gray-100 text-gray-800 font-bold text-lg">Move to Folder</h1>
            <p className="pt-6 text-xs font-semibold text-indigo-700 uppercase">FOLDER</p>
            <div>
                <div className="relative flex items-center justify-center ">
                    <select className=" rounded-lg bg-gray-100 py-3.5 bg-transparent outline-none font-medium text-base px-4 text-white my-6 appearance-none relative w-full  dark:text-gray-100 text-gray-800">
                        <option className="text-base font-medium  dark:text-gray-100 text-gray-800">General</option>
                        <option className="text-base font-medium  dark:text-gray-100 text-gray-800">Professional</option>
                    </select>
                    <div className="absolute right-0  mr-4 pointer-events-none">
                        <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4B5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between  ">
                <button className=" py-3.5 w-full   dark:text-gray-100 text-gray-600 focus:outline-none hover:opacity-90 text-sm font-semibold border border-gray-600 rounded">Cancel</button>
                <div className="pl-2 w-full">
                    <button className=" py-3.5 w-full   text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>
);
export default Index;
