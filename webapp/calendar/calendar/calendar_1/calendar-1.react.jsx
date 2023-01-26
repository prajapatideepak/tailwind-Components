import React from "react";

export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full   rounded-xl shadow-lg  md:p-16 p-5 bg-white dark:bg-gray-800">
                    <div className="px-4 flex items-center justify-between leading-8">
                        <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100">October 2020</h1>
                        <div className="flex items-center text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-12 overflow-x-auto ">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">1</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">2</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">3</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-full h-full">
                                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <p className="text-2xl w-14 h-14 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-4 py-4  cursor-pointer flex w-full justify-center">
                                            <p className="text-2xl text-gray-500 dark:text-gray-100 font-medium">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
