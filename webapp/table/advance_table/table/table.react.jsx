import React from "react";

function Index() {
    return (
        <>
            <div className="xl:w-3/4 2xl:w-4/5 w-full bg-white rounded-lg shadow">
                <div className="border rounded-lg border-gray-100">
                    <div className="py-4 md:py-6 pl-8">
                        <p className="text-base md:text-lg lg:text-xl font-bold leading-tight text-gray-800">Orders</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50 h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-8">Date</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Product</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Amount</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Customer</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Order #</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Status</th>
                                    <th className="font-normal text-left">Confirmation</th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">06/02/2020</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Apple Macbook 2020
                                        <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Samantha Smith
                                        <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="underline text-blue-500">WMC0191</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="flex items-center justify-center w-20 h-6 bg-yellow-100 rounded-full">
                                            <p className="text-xs leading-3 text-yellow-600">Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                            <p className="text-sm leading-none text-indigo-700">Confirm Order</p>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">06/02/2020</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Apple Macbook 2020
                                        <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Samantha Smith
                                        <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="underline text-blue-500">WMC0191</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="flex items-center justify-center w-20 h-6 bg-yellow-100 rounded-full">
                                            <p className="text-xs leading-3 text-yellow-600">Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                            <p className="text-sm leading-none text-indigo-700">Confirm Order</p>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">06/02/2020</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Apple Macbook 2020
                                        <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Samantha Smith
                                        <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="underline text-blue-500">WMC0191</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="flex items-center justify-center w-20 h-6 bg-green-100 rounded-full">
                                            <p className="text-xs leading-3 text-green-600">Shipped</p>
                                        </div>
                                    </td>
                                    <td />
                                </tr>
                                <tr className="h-20 text-sm leading-none text-gray-800">
                                    <td className="pl-8">06/02/2020</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Apple Macbook 2020
                                        <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        Samantha Smith
                                        <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="underline text-blue-500">WMC0191</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="flex items-center justify-center w-20 h-6 bg-red-100 rounded-full">
                                            <p className="text-xs leading-3 text-red-600">Cancelled</p>
                                        </div>
                                    </td>
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
