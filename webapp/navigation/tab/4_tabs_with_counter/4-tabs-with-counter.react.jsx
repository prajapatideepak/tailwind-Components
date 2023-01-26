const Index = (props) => (
    <div>
        <div className="mx-auto container py-20 px-6">
            <div className="mb-20  px-4 xl:px-0">
                <ul className="hidden text-lg md:flex items-center">
                    <li className="border-b-4 border-indigo-700 pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs mr-2 flex items-center justify-center">05</div>
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Todos</a>
                        </p>
                    </li>
                    <li className="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs mr-2 flex items-center justify-center">05</div>
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Notes</a>
                        </p>
                    </li>
                    <li className="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Links</a>
                        </p>
                    </li>
                    <li className="cursor-pointer pb-3 text-yellow-600 mr-16 px-5 flex items-center ml-4">
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Files</a>
                        </p>
                    </li>
                </ul>
                <hr className="hidden md:block border-t-4 border-gray-300 -mt-1" />
            </div>
            <div className="flex w-full justify-between md:hidden my-10 items-center border-b border-gray-500">
                <p className="text-yellow-600 border-b-2 border-indigo-700  text-xs">
                    <a href="javascript:void(0)">Todos</a>
                </p>
                <p className="text-gray-700 text-xs">
                    <a href="javascript:void(0)">Notes</a>
                </p>
                <p className="text-gray-700 text-xs">
                    <a href="javascript:void(0)">Links</a>
                </p>
                <p className="text-gray-700 text-xs">
                    <a href="javascript:void(0)">Files</a>
                </p>
            </div>
        </div>
    </div>
);
export default Index;
