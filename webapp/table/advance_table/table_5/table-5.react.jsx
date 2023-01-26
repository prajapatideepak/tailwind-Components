import React from "react";

function MyApp() {
    return (
        <div className="mx-8 lg:w-11/12 w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap border-gray-100 border rounded-lg">
                <thead className="bg-gray-100">
                    <tr className>
                        <th className="text-left py-5 pl-4 rounded-tl-lg">
                            <p className="text-sm font-medium leading-none text-gray-900">Date</p>
                        </th>
                        <th className="text-left py-5">
                            <p className="text-sm font-medium leading-none text-gray-900">Customer name/number</p>
                        </th>
                        <th className="text-left py-5 pl-5 border-l border-gray-200 ">
                            <p className="text-sm font-medium leading-none text-gray-900">Order #</p>
                        </th>
                        <th className="text-left py-5 pr-16">
                            <div className="flex items-center">
                                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">Units per order</p>
                                <svg width={19} height={14} viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.57309 5.19695L8.66924 9.65726C8.75138 9.72912 8.85328 9.7868 8.96794 9.82634C9.0826 9.86589 9.20731 9.88636 9.33351 9.88636C9.45971 9.88636 9.58442 9.86589 9.69908 9.82634C9.81374 9.7868 9.91563 9.72912 9.99778 9.65726L15.0939 5.19695C15.5803 4.77121 15.1771 4.11359 14.4297 4.11359H4.2359C3.4885 4.11359 3.08527 4.77121 3.57309 5.19695Z" fill="#4A5568" />
                                </svg>
                            </div>
                        </th>
                        <th className="text-left py-5 pr-16">
                            <div className="flex items-center">
                                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">Cost per order</p>
                                <svg width={19} height={14} viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.57309 5.19695L8.66924 9.65726C8.75138 9.72912 8.85328 9.7868 8.96794 9.82634C9.0826 9.86589 9.20731 9.88636 9.33351 9.88636C9.45971 9.88636 9.58442 9.86589 9.69908 9.82634C9.81374 9.7868 9.91563 9.72912 9.99778 9.65726L15.0939 5.19695C15.5803 4.77121 15.1771 4.11359 14.4297 4.11359H4.2359C3.4885 4.11359 3.08527 4.77121 3.57309 5.19695Z" fill="#4A5568" />
                                </svg>
                            </div>
                        </th>
                        <th className="text-left py-5">
                            <p className="text-sm font-medium leading-none text-gray-900">Unit Cost</p>
                        </th>
                        <th className="flex items-end justify-end rounded-tr-lg">
                            <button role="button" aria-label="add a column" className="rounded-tr-lg py-5 px-4 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-700 flex items-center">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11.75H5.5M12.25 5V18.5V5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm font-medium leading-none text-white pl-2">Add Column</p>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="pb-5 pt-8 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="pb-5 pt-8 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 pb-5 pt-8">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="pb-5 pt-8 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="pb-5 pt-8 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="pb-5 pt-8 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="pb-5 pt-8" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-5 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-5 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-5">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-5 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-5" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-5 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-5 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-5">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-5 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-5" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-5 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-5 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-5">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-5 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-5" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-5 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-5 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-5">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-5 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-5" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-5 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-5 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-5">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-5 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-5 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-5" />
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="py-3 pr-20 pl-4">
                            <p className="text-sm leading-none text-gray-900">20/04/2020</p>
                        </td>
                        <td className="py-3 pr-12">
                            <p className="text-sm leading-none text-gray-900">Jon Strak &nbsp; 0381 9201716</p>
                        </td>
                        <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                            <p className="text-sm leading-none text-gray-900">#41523</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">541</p>
                        </td>
                        <td className="py-3 pr-16">
                            <p className="text-sm leading-none text-gray-900">$6,471</p>
                        </td>
                        <td className="py-3 pr-10">
                            <p className="text-sm leading-none text-gray-900">$2,471</p>
                        </td>
                        <td className="py-3" />
                    </tr>
                    <tr>
                        <td className="py-2 pr-20 pl-4" />
                        <td className="py-2 pr-12" />
                        <td className="border-l pl-5 pr-20 border-gray-200 py-2" />
                        <td className="py-2 pr-16" />
                        <td className="py-2 pr-16" />
                        <td className="py-2 pr-10" />
                        <td className="py-2" />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyApp;
