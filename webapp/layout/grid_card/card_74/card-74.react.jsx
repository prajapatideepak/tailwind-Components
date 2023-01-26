import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                <div className="max-w-3xl w-full bg-white shadow-md  dark:bg-gray-800 shadow rounded px-6 py-8">
                    <div className="flex bg-gray-100 py-6 rounded items-center justify-between px-10 sm:px-14 mb-7">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={9} height={15} viewBox="0 0 9 15" fill="none">
                            <path d="M7.90137 1.42871L2 7.71443L7.90137 14.0001" stroke="#1F2937" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                        <p className="text-2xl font-medium leading-6 text-center text-gray-800 dark:text-gray-100">May 2020</p>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={9} height={15} viewBox="0 0 9 15" fill="none">
                            <path d="M1 14L6.90137 7.71429L1 1.42857" stroke="#1F2937" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="w-full overflow-x-scroll md:overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
                                    <td className="text-red-600 px-10 pb-10">S</td>
                                    <td className="px-10 pb-10">M</td>
                                    <td className="px-10 pb-10">T</td>
                                    <td className="px-10 pb-10">W</td>
                                    <td className="px-10 pb-10">T</td>
                                    <td className="px-10 pb-10">F</td>
                                    <td className="text-red-600 px-10 pb-10">S</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-2xl font-medium w-full leading-normal text-center text-gray-800">
                                    <td className="text-red-600">1</td>
                                    <td className="text-white bg-gradient-to-tl from-yellow-300 to-red-400 rounded-tl-lg rounded-bl-lg">2</td>
                                    <td className="text-white bg-gradient-to-tr from-yellow-300 to-red-400">3</td>
                                    <td className="text-white bg-gradient-to-tl from-yellow-300 to-red-400 rounded-tr-lg rounded-br-lg">4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td className="text-red-600">7</td>
                                </tr>
                                <tr className="h-11" />
                                <tr className="text-2xl font-medium leading-normal text-center text-gray-800">
                                    <td className="text-red-600">8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td className="text-red-600">14</td>
                                </tr>
                                <tr className="h-11" />
                                <tr className="text-2xl font-medium leading-normal text-center text-gray-800">
                                    <td className="text-red-600">15</td>
                                    <td>16</td>
                                    <td className="bg-gradient-to-tr from-indigo-400 to-purple-500 text-white rounded-tl-lg rounded-bl-lg">17</td>
                                    <td className="bg-gradient-to-tl from-indigo-400 to-purple-500 text-white ">18</td>
                                    <td className="bg-gradient-to-tr from-indigo-400 to-purple-500 text-white ">19</td>
                                    <td className="bg-gradient-to-tl from-indigo-400 to-purple-500 text-white rounded-tr-lg rounded-br-lg">20</td>
                                    <td className="text-red-600">21</td>
                                </tr>
                                <tr className="h-11" />
                                <tr className="text-2xl font-medium leading-normal text-center text-gray-800">
                                    <td className="text-red-600">22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td className="text-red-600">28</td>
                                </tr>
                                <tr className="h-11" />
                                <tr className="text-2xl font-medium leading-normal text-center text-gray-800">
                                    <td className="text-red-600">29</td>
                                    <td>30</td>
                                    <td className="text-gray-500 dark:text-gray-400">31</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
