import React, { useEffect } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="w-full sm:max-w-2xl bg-white dark:bg-gray-800 pt-6 pb-10 rounded-lg">
                    <p className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100 px-8">Top Browsers</p>
                    <div className="w-full mt-6 overflow-x-scroll sm:overflow-x-auto">
                        <table className="w-full">
                            <thead className="text-xs sm:text-base font-medium leading-none text-gray-500 dark:text-gray-400">
                                <tr className="border-b border-gray-200">
                                    <td className="pb-4 pl-8">Browser</td>
                                    <td className="pb-4 pl-4">Sessions</td>
                                    <td className="pl-14 pb-4">Bounce&nbsp;Rate</td>
                                    <td className="pl-14 pb-4">Transactions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-xs sm:text-base leading-none text-gray-800 dark:text-gray-100">
                                    <td className="pl-8 pt-6">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 border text-gray-500 dark:text-gray-400 dark:border-gray-400 border-gray-500 flex items-center justify-center rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M10.365 19.833L12.295 16.491C11.4423 16.5471 10.5912 16.3592 9.84137 15.9492C9.09155 15.5392 8.47401 14.9242 8.061 14.176L4.794 8.52C4.26563 9.61449 3.99349 10.8149 3.9982 12.0303C4.00292 13.2456 4.28437 14.4439 4.82122 15.5343C5.35806 16.6247 6.13619 17.5784 7.09657 18.3233C8.05695 19.0681 9.17435 19.5844 10.364 19.833H10.365ZM12.59 19.979C13.8021 19.8898 14.9779 19.5256 16.0282 18.9141C17.0786 18.3025 17.9757 17.4597 18.6516 16.4496C19.3275 15.4395 19.7644 14.2887 19.9291 13.0845C20.0937 11.8803 19.9819 10.6545 19.602 9.5H15.742C16.2374 10.2395 16.5013 11.1099 16.5 12C16.5013 12.8167 16.2793 13.6183 15.858 14.318L12.59 19.978V19.979ZM14.143 13.288L14.165 13.25C14.3834 12.8717 14.4988 12.4428 14.4998 12.006C14.5009 11.5693 14.3875 11.1398 14.1709 10.7605C13.9543 10.3812 13.6421 10.0653 13.2654 9.84416C12.8888 9.62304 12.4607 9.50447 12.024 9.50026C11.5872 9.49605 11.157 9.60634 10.7761 9.82015C10.3952 10.034 10.077 10.3438 9.85314 10.7189C9.62929 11.0939 9.50761 11.5211 9.50021 11.9578C9.49282 12.3945 9.59997 12.8256 9.811 13.208L9.835 13.25C10.0523 13.6271 10.3644 13.9409 10.7403 14.1604C11.1162 14.3798 11.5429 14.4973 11.9781 14.5011C12.4134 14.5049 12.8421 14.395 13.2218 14.1823C13.6015 13.9695 13.919 13.6612 14.143 13.288ZM6.035 6.668L7.964 10.008C8.33573 9.25502 8.91073 8.62107 9.62398 8.17785C10.3372 7.73463 11.1603 7.49983 12 7.5H18.615C17.8818 6.42103 16.8956 5.53795 15.7425 4.92786C14.5894 4.31776 13.3045 3.99921 12 4C10.8737 3.99873 9.75986 4.2359 8.73177 4.69591C7.70367 5.15592 6.78461 5.82836 6.035 6.669V6.668ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="ml-3">Chrome</p>
                                        </div>
                                    </td>
                                    <td className="pt-6 pl-4">5,894</td>
                                    <td className="pt-6 pl-14">85.67%</td>
                                    <td className="pt-6 pl-14">572</td>
                                </tr>
                                <tr className="text-xs sm:text-base leading-none text-gray-800 dark:text-gray-100">
                                    <td className="pl-8 pt-6">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 border text-gray-500 dark:text-gray-400 dark:border-gray-400 border-gray-500 flex items-center justify-center rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path d="M8.007 14.001C8.0024 14.0839 8.00006 14.167 8 14.25C8 16.632 9.753 19 13 19C15.373 19 17.528 18.345 19 17.447V20.797C17.211 21.564 15.113 22 13 22C7.498 22 5 18.53 5 14.25C5 11.019 7.041 8.25 9.943 7.086C8.539 8.663 8 10.341 8 10.996L18 11C18 7.594 15.452 5 12 5C7 5 3.999 8.988 3 10.999C3.29 6.237 7.01 2 12 2C17.2 2 21 6.03 21 11V14H8L8.007 14.001Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <p className="ml-3">Edge</p>
                                        </div>
                                    </td>
                                    <td className="pt-6 pl-4">4,296</td>
                                    <td className="pt-6 pl-14">54.61%</td>
                                    <td className="pt-6 pl-14">745</td>
                                </tr>
                                <tr className="text-xs sm:text-base leading-none text-gray-800 dark:text-gray-100">
                                    <td className="pl-8 pt-6">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 border text-gray-500 dark:text-gray-400 dark:border-gray-400 border-gray-500 flex items-center justify-center rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M17.812 6.503L13.414 13.414L6.503 17.812C7.73692 18.9821 9.31264 19.727 11 19.938V18H13V19.938C14.424 19.7606 15.7737 19.2016 16.906 18.32L15.536 16.95L16.95 15.536L18.32 16.906C19.2016 15.7737 19.7606 14.424 19.938 13H18V11H19.938C19.727 9.31264 18.9821 7.73692 17.812 6.503ZM17.497 6.188C16.2631 5.0179 14.6874 4.27297 13 4.062V6H11V4.062C9.57595 4.23938 8.22635 4.79843 7.094 5.68L8.464 7.05L7.05 8.464L5.68 7.094C4.79843 8.22635 4.23938 9.57595 4.062 11H6V13H4.062C4.27297 14.6874 5.0179 16.2631 6.188 17.497L10.586 10.586L17.497 6.188ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="ml-3">Safari</p>
                                        </div>
                                    </td>
                                    <td className="pt-6 pl-4">3.969</td>
                                    <td className="pt-6 pl-14">53.02%</td>
                                    <td className="pt-6 pl-14">653</td>
                                </tr>
                                <tr className="text-xs sm:text-base leading-none text-gray-800 dark:text-gray-100">
                                    <td className="pl-8 pt-6">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 border text-gray-500 dark:text-gray-400 dark:border-gray-400 border-gray-500 flex items-center justify-center rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.536 2.314 9.146 2.88 7.894C3.346 6.955 4.113 6.02 4.73 5.7C4.077 6.983 3.757 8.24 3.69 9.083C4.144 7.583 5.005 6.326 6.21 5.439C8.276 3.92 11.058 3.852 12.166 4.819C10.11 5.526 7.87 8.367 8.363 11.695C8.443 12.245 8.608 12.779 8.852 13.277C8.468 12.267 8.434 10.844 9.054 9.919C9.746 8.889 10.732 8.671 11.26 8.783C11.052 8.739 10.592 9.619 10.524 9.774C10.351 10.168 10.265 10.594 10.273 11.024C10.2879 11.9224 10.6583 12.7782 11.303 13.404C13.225 15.275 16.326 14.539 17.715 12.402C18.668 10.931 18.784 8.434 17.56 6.45C17.2546 5.96689 16.8905 5.52351 16.476 5.13C14.626 3.364 11.996 2.56 9.494 2.925C8.388 3.102 7.447 3.421 6.67 3.881C7.755 2.798 9.91 2 12 2ZM6.875 7.705C4.622 8.486 3.374 10.875 4.296 14.165C4.75724 15.8033 5.7287 17.2519 7.0693 18.3005C8.40991 19.349 10.0499 19.943 11.751 19.996L12 20C14.0359 20.0001 15.9953 19.224 17.4789 17.8297C18.9626 16.4355 19.8588 14.528 19.985 12.496L19.994 12.284C19.864 12.633 19.711 12.958 19.531 13.264L19.391 13.491C17.287 16.73 12.71 17.566 9.911 14.839C9.53024 14.4696 9.20609 14.046 8.949 13.582L8.843 13.381C7.107 12.994 6.259 12.055 6.3 10.564C6.327 9.573 6.53 8.604 6.875 7.704V7.705Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="ml-3">Mozilla&nbsp;Firefox</p>
                                        </div>
                                    </td>
                                    <td className="pt-6 pl-4">1,321</td>
                                    <td className="pt-6 pl-14">65.85%</td>
                                    <td className="pt-6 pl-14">320</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
