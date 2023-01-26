import React, { useEffect, useState } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function Index() {
    const [show, setshow] = useState();
    useEffect(() => {
        const myBarChart = new Chart(document.getElementById("chartjs-1"), {
            type: "bar",
            data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{ data: [25, 55, 100, 75, 60, 60, 120, 150, 40, 0], fill: false, backgroundColor: "#4338CA" }] },
            options: {
                scales: [{ yAxes: [{ ticks: { beginAtZero: true } }] }],
                legend: {
                    position: false,
                },
            },
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div>
                <div className="flex items-center justify-center w-full h-full py-8 px-4">
                    <div className="sm:w-1/2 2xl:flex w-11/12">
                        <div className="w-full">
                            <div className="flex w-full justify-between relative md:static">
                                <h4 className="text-gray-600 dark:text-gray-400 font-bold text-base md:text-xl">Registrations</h4>
                                <div className="static sm:relative">
                                    <div onClick={() => setshow(!show)} className="py-2 px-3 cursor-pointer flex items-center flex-no-wrap bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 ease-in duration-150 hover:bg-gray-200 relative w-auto">
                                        <p className="text-gray-600 dark:text-gray-400 mr-2 text-xs">12 Aug - 19 Aug</p>
                                        <div>
                                            <button className="text-indigo-700 dark:text-indigo-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <rect x="2.66666" y="3.33337" width="10.6667" height="10.6667" rx="1.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10.6667 2V4.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5.33333 2V4.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.66666 7.33333H13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.33334 9.99996H8.00001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.99999 10V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="popup_calender" className={show ? "w-full h-full " : "hidden "}>
                                        <div onClick={() => setshow(!show)} className="fixed w-full h-full inset-0  bg-transparent  z-40" />
                                        <div className="bg-white dark:bg-gray-800 absolute -ml-44 sm:-ml-64 xl:ml-0 px-6 py-6 z-50 shadow-xl">
                                            <p className="text-base text-gray-700 dark:text-gray-400">June</p>
                                            <table className="mt-6 ">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Mon</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Tue</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Wed</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Thu</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Fri</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Sat</p>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="w-full flex justify-center">
                                                                <p className="opacity-50 text-xs font-bold text-center text-gray-600 dark:text-gray-400">Sun</p>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center" />
                                                        </td>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center" />
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center" />
                                                        </td>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">1</p>
                                                            </div>
                                                        </td>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">2</p>
                                                            </div>
                                                        </td>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-indigo-600">3</p>
                                                            </div>
                                                        </td>
                                                        <td className="pt-6">
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-indigo-600">4</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-gray-700 ">5</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-gray-700 ">6</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-gray-700 ">7</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-300">
                                                                <p className="text-sm text-gray-700 ">8</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="w-full h-full">
                                                                <div className="w-12 h-12 flex w-full rounded-full justify-center items-center cursor-pointer bg-indigo-500">
                                                                    <p className="text-sm font-bold text-white">9</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">10</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">11</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">12</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">13</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">14</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">15</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="px-4 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">16</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">17</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">18</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">19</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">20</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">21</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">22</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="px-4 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">23</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">24</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-indigo-600">25</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">26</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">27</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">28</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="sm:px-4 px-2 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">29</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="px-4 py-2 flex w-full justify-center">
                                                                <p className="text-sm text-gray-700 dark:text-gray-400">30</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-9">
                                <canvas id="chartjs-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {"{"}" "{"}"}
            </div>
        </>
    );
}
