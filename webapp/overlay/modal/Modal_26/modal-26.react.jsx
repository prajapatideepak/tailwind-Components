import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div class="relative w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                    <p class="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Submit a question</p>
                    <form class="mt-5">
                        <div>
                            <label class="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100"> Subject </label>
                            <div class="py-1 rounded-lg px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 mt-2">
                                <select class="text-xs focus:outline-none font-medium leading-3 text-gray-600 dark:text-gray-100 bg-transparent w-full">
                                    <option disabled selected>
                                        Select a subject
                                    </option>
                                    <option>withdraw</option>
                                    <option>Payment</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-4 flex flex-col">
                            <label class="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100"> Question </label>
                            <textarea placeholder="Ask your question here..." class="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 resize-none h-20 bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2"></textarea>
                        </div>
                        <div class="mt-4 flex flex-col">
                            <label class="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100"> Email </label>
                            <input placeholder="Enter your email" class="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 resize-none bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2" />
                        </div>
                        <button id="submit" onclick="modalHandler()" class="mt-5 focus:outline-none px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100">
                            Submit
                        </button>
                    </form>
                    <div class="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
