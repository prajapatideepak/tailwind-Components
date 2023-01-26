const Index = () => {
    return (
        <div className="py-8 w-full flex items-center justify-center">
            <div className="lg:w-4/12 md:w-7/12 w-full bg-white shadow rounded">
                <div className="border-b border-gray-200 p-6 md:flex items-center justify-between">
                    <p className="text-2xl font-medium leading-6 text-gray-800">Shift Monitor</p>
                    <div className=" md:pt-0 pt-4">
                        <button className="text-sm leading-none text-indigo-700 p-3 bg-indigo-100 rounded focus:outline-none">Pending</button>
                        <button className="text-sm leading-none text-gray-600 p-3 bg-transparent hover:bg-indigo-100 focus:bg-indigo-100 hover:text-indigo-700 focus:text-indigo-700 rounded focus:outline-none ml-4">Completed</button>
                    </div>
                </div>
                <div className="p-6 border-b border-gray-200">
                    <div className="md:flex justify-between">
                        <div className="w-1/2">
                            <p className="text-sm leading-normal text-gray-500">Name</p>
                            <div className="pt-5 flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                                <div className="pl-4">
                                    <p className="text-sm font-medium leading-5 text-gray-800">Richard Dawn</p>
                                    <p className="text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div className="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p className="text-sm leading-normal text-gray-500">Time &amp; Place</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p className="text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p className="text-sm font-bold leading-normal text-green-500 pt-5">Active</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-b border-gray-200">
                    <div className="md:flex justify-between">
                        <div className="w-1/2">
                            <p className="text-sm leading-normal text-gray-500">Name</p>
                            <div className="pt-5 flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                                <div className="pl-4">
                                    <p className="text-sm font-medium leading-5 text-gray-800">Saul Bandon</p>
                                    <p className="text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div className="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p className="text-sm leading-normal text-gray-500">Time &amp; Place</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p className="text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p className="text-sm font-bold leading-normal text-yellow-500 pt-5">Waiting</p>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <div className="md:flex justify-between">
                        <div className="w-1/2">
                            <p className="text-sm leading-normal text-gray-500">Name</p>
                            <div className="pt-5 flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                                <div className="pl-4">
                                    <p className="text-sm font-medium leading-5 text-gray-800">Saul Bandon</p>
                                    <p className="text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div className="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p className="text-sm leading-normal text-gray-500">Time &amp; Place</p>
                            <p className="text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p className="text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p className="text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p className="text-sm font-bold leading-normal text-red-500 pt-5">Cancelled</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
