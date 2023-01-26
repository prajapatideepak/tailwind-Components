import React, { useState } from "react";
import Head from "next/head";

function Index() {
   
    return (
        <>
            <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
                <div onclick="popuphandler(false)" className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full px-4 sm:px-0">
                        <div className="bg-white rounded-md shadow max-w-md w-full fixed z-20">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-8 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">Select Range</p>
                                <button onclick="popuphandler(false)" className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-8 py-5">
                                <div className="flex items-center justify-between">
                                    <button className="focus:outline-none">
                                        <svg width={7} height={13} viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.2 11.814L1 6.657L5.2 1.5" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <p className="text-lg font-bold text-gray-900">February</p>
                                    <button className="focus:outline-none">
                                        <svg width={7} height={13} viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11.814L5.2 6.657L1 1.5" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="min-w-full overflow-x-auto mt-9">
                                    <table className="w-full">
                                        <thead className="text-sm text-indigo-700 w-full">
                                            <tr>
                                                <th>S</th>
                                                <th>M</th>
                                                <th>T</th>
                                                <th>W</th>
                                                <th>T</th>
                                                <th>F</th>
                                                <th>S</th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full target-body2">
                                            <tr className="text-sm font-medium text-center">
                                                <td>
                                                    <p className="py-1 text-gray-200">27</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-200">28</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-200">29</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-200">30</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-200">31</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-800">1</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 text-gray-800">2</p>
                                                </td>
                                            </tr>
                                            <tr className="text-center text-gray-800">
                                                <td>
                                                    <p className="py-1 bg-indigo-700 rounded-tl-full rounded-bl-full text-white">3</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 bg-indigo-700 text-white -mx-1">4</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 bg-indigo-700 text-white -mx-1">5</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 bg-indigo-700 text-white -mx-1">6</p>
                                                </td>
                                                <td>
                                                    <p className="py-1 bg-indigo-700 rounded-tr-full rounded-br-full text-white">7</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">8</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">9</p>
                                                </td>
                                            </tr>
                                            <tr className="text-center text-gray-800">
                                                <td>
                                                    <p className="py-1">10</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">11</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">12</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">13</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">14</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">15</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">16</p>
                                                </td>
                                            </tr>
                                            <tr className="text-center text-gray-800">
                                                <td>
                                                    <p className="py-1">17</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">18</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">19</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">20</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">21</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">22</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">23</p>
                                                </td>
                                            </tr>
                                            <tr className="text-center text-gray-800">
                                                <td>
                                                    <p className="py-1">24</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">25</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">26</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">27</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">28</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">29</p>
                                                </td>
                                                <td>
                                                    <p className="py-1">30</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-11">
                                    <div className="flex items-center justify-center">
                                        <div className="flex flex-col items-center w-full">
                                            <p className="text-xl font-bold leading-tight text-gray-900">Increment</p>
                                            <div className="flex flex-wrap items-center justify-center mt-4 -ml-2 w-full">
                                                <div className="m-2 flex items-center">
                                                    <div className="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm leading-none text-gray-900 ml-2">Day</p>
                                                </div>
                                                <div className="m-2 flex items-center">
                                                    <div className="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm leading-none text-gray-900 ml-2">Week</p>
                                                </div>
                                                <div className="m-2 flex items-center">
                                                    <div className="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm leading-none text-gray-900 ml-2">Month</p>
                                                </div>
                                                <div className="m-2 flex items-center">
                                                    <div className="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm leading-none text-gray-900 ml-2">Entire Range</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-9">
                                    <button onclick="popuphandler(false)" className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                        Cancel
                                    </button>
                                    <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
           {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
        </>
    );
}

export default Index;
