const Index = (props) => (
    <div>
        <div className="flex items-center justify-center py-8 px-4">
            <div className="md:w-80 max-w-xs rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
                <h1 className=" dark:text-gray-100 text-gray-800 font-bold text-lg">Choose Plan</h1>
                <p className="pt-6 text-xs font-semibold text-indigo-700 uppercase">
                    Current Plan:<span className="font-extrabold"> 10GB</span>
                </p>
                <p className="pb-6 text-sm pt-4 font-normal  dark:text-gray-100 text-gray-600">Select one of the following options for your storage needs</p>
                <div className=" flex items-center">
                    <div className=" dark:bg-gray-800 bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input defaultChecked type="radio" name="radio" className="checkbox appearance-none focus:outline-none  rounded-full border-gray-400 absolute cursor-pointer w-full h-full border-4 checked:border-none" />
                        <div className="check-icon hidden border-4 border-indigo-700 flex items-center justify-center  rounded-full w-full h-full z-1">
                            <div className="bg-indigo-700 rounded-full w-2 h-2" />
                        </div>
                    </div>
                    <p className="ml-3 text-base font-medium leading-4  dark:text-gray-100 text-gray-800">20GB, individual storage</p>
                </div>
                <div className="pb-7 pt-10 flex items-center">
                    <div className=" dark:bg-gray-800 bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input defaultChecked type="radio" name="radio" className="checkbox appearance-none focus:outline-none  rounded-full border-gray-400 absolute cursor-pointer w-full h-full border-4 checked:border-none" />
                        <div className="check-icon hidden border-4 border-indigo-700 flex items-center justify-center  rounded-full w-full h-full z-1">
                            <div className="bg-indigo-700 rounded-full w-2 h-2" />
                        </div>
                    </div>
                    <p className="ml-3 text-base font-medium leading-4  dark:text-gray-100 text-gray-800">50GB, shared storage</p>
                </div>
                <div className="flex items-center justify-between  ">
                    <button className=" py-3.5 w-full   dark:text-gray-100 text-gray-600 focus:outline-none hover:opacity-90 text-sm font-semibold border border-gray-600 rounded">Dismiss</button>
                    <div className="pl-2 w-full">
                        <button className=" py-3.5 w-full   text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            {` .checkbox:checked {
                border: none;
            }
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
    </div>
);
export default Index;
