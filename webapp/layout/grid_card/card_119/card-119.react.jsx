import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-center py-6 sm:px-6 px-4 w-full">
                <div className="max-w-6xl w-full bg-white shadow">
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-sm font-semibold leading-none text-indigo-700">Front End Developer</h1>
                            <div className="p-1 bg-green-50">
                                <p className="text-sm font-medium leading-none text-green-700">Full-time</p>
                            </div>
                        </div>
                        <div className="mt-3 sm:flex items-center justify-between">
                            <div className="sm:flex items-center">
                                <div className="flex items-center">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75 8C5.99264 8 7 6.99264 7 5.75C7 4.50736 5.99264 3.5 4.75 3.5C3.50736 3.5 2.5 4.50736 2.5 5.75C2.5 6.99264 3.50736 8 4.75 8Z" fill="#4B5563" />
                                            <path d="M7.3125 9.25C6.4325 8.80312 5.46125 8.625 4.75 8.625C3.35687 8.625 0.5 9.47938 0.5 11.1875V12.5H5.1875V11.9978C5.1875 11.4041 5.4375 10.8087 5.875 10.3125C6.22406 9.91625 6.71281 9.54844 7.3125 9.25Z" fill="#4B5563" />
                                            <path d="M10.625 9C8.99781 9 5.75 10.005 5.75 12V13.5H15.5V12C15.5 10.005 12.2522 9 10.625 9Z" fill="#4B5563" />
                                            <path d="M10.625 8C12.1438 8 13.375 6.76878 13.375 5.25C13.375 3.73122 12.1438 2.5 10.625 2.5C9.10622 2.5 7.875 3.73122 7.875 5.25C7.875 6.76878 9.10622 8 10.625 8Z" fill="#4B5563" />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Engineering</p>
                                </div>
                                <div className="flex items-center sm:mt-0 mt-4 sm:ml-6">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={10} height={14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 0C2.23969 0 0 2.01594 0 4.5C0 8.5 5 14 5 14C5 14 10 8.5 10 4.5C10 2.01594 7.76031 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Los Angeles, California</p>
                                </div>
                            </div>
                            <p className="text-sm leading-none text-gray-600 sm:mt-0 mt-4">Closing on 23 July,2021</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-sm font-semibold leading-none text-indigo-700">Back End Developer</h1>
                            <div className="p-1 bg-green-50">
                                <p className="text-sm font-medium leading-none text-green-700">Full-time</p>
                            </div>
                        </div>
                        <div className="mt-3 sm:flex items-center justify-between">
                            <div className="sm:flex items-center">
                                <div className="flex items-center">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75 8C5.99264 8 7 6.99264 7 5.75C7 4.50736 5.99264 3.5 4.75 3.5C3.50736 3.5 2.5 4.50736 2.5 5.75C2.5 6.99264 3.50736 8 4.75 8Z" fill="#4B5563" />
                                            <path d="M7.3125 9.25C6.4325 8.80312 5.46125 8.625 4.75 8.625C3.35687 8.625 0.5 9.47938 0.5 11.1875V12.5H5.1875V11.9978C5.1875 11.4041 5.4375 10.8087 5.875 10.3125C6.22406 9.91625 6.71281 9.54844 7.3125 9.25Z" fill="#4B5563" />
                                            <path d="M10.625 9C8.99781 9 5.75 10.005 5.75 12V13.5H15.5V12C15.5 10.005 12.2522 9 10.625 9Z" fill="#4B5563" />
                                            <path d="M10.625 8C12.1438 8 13.375 6.76878 13.375 5.25C13.375 3.73122 12.1438 2.5 10.625 2.5C9.10622 2.5 7.875 3.73122 7.875 5.25C7.875 6.76878 9.10622 8 10.625 8Z" fill="#4B5563" />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Engineering</p>
                                </div>
                                <div className="flex items-center sm:mt-0 mt-4 sm:ml-6">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={10} height={14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 0C2.23969 0 0 2.01594 0 4.5C0 8.5 5 14 5 14C5 14 10 8.5 10 4.5C10 2.01594 7.76031 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Los Angeles, California</p>
                                </div>
                            </div>
                            <p className="text-sm leading-none text-gray-600 sm:mt-0 mt-4">Closing on 23 July,2021</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-sm font-semibold leading-none text-indigo-700">Graphic Designer</h1>
                            <div className="p-1 bg-green-50">
                                <p className="text-sm font-medium leading-none text-green-700">Full-time</p>
                            </div>
                        </div>
                        <div className="mt-3 sm:flex items-center justify-between">
                            <div className="sm:flex items-center">
                                <div className="flex items-center">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75 8C5.99264 8 7 6.99264 7 5.75C7 4.50736 5.99264 3.5 4.75 3.5C3.50736 3.5 2.5 4.50736 2.5 5.75C2.5 6.99264 3.50736 8 4.75 8Z" fill="#4B5563" />
                                            <path d="M7.3125 9.25C6.4325 8.80312 5.46125 8.625 4.75 8.625C3.35687 8.625 0.5 9.47938 0.5 11.1875V12.5H5.1875V11.9978C5.1875 11.4041 5.4375 10.8087 5.875 10.3125C6.22406 9.91625 6.71281 9.54844 7.3125 9.25Z" fill="#4B5563" />
                                            <path d="M10.625 9C8.99781 9 5.75 10.005 5.75 12V13.5H15.5V12C15.5 10.005 12.2522 9 10.625 9Z" fill="#4B5563" />
                                            <path d="M10.625 8C12.1438 8 13.375 6.76878 13.375 5.25C13.375 3.73122 12.1438 2.5 10.625 2.5C9.10622 2.5 7.875 3.73122 7.875 5.25C7.875 6.76878 9.10622 8 10.625 8Z" fill="#4B5563" />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Arts</p>
                                </div>
                                <div className="flex items-center sm:mt-0 mt-4 sm:ml-6">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={10} height={14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 0C2.23969 0 0 2.01594 0 4.5C0 8.5 5 14 5 14C5 14 10 8.5 10 4.5C10 2.01594 7.76031 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Los Angeles, California</p>
                                </div>
                            </div>
                            <p className="text-sm leading-none text-gray-600 sm:mt-0 mt-4">Closing on 23 July,2021</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-sm font-semibold leading-none text-indigo-700">Web Designer</h1>
                            <div className="p-1 bg-green-50">
                                <p className="text-sm font-medium leading-none text-green-700">Full-time</p>
                            </div>
                        </div>
                        <div className="mt-3 sm:flex items-center justify-between">
                            <div className="sm:flex items-center">
                                <div className="flex items-center">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.75 8C5.99264 8 7 6.99264 7 5.75C7 4.50736 5.99264 3.5 4.75 3.5C3.50736 3.5 2.5 4.50736 2.5 5.75C2.5 6.99264 3.50736 8 4.75 8Z" fill="#4B5563" />
                                            <path d="M7.3125 9.25C6.4325 8.80312 5.46125 8.625 4.75 8.625C3.35687 8.625 0.5 9.47938 0.5 11.1875V12.5H5.1875V11.9978C5.1875 11.4041 5.4375 10.8087 5.875 10.3125C6.22406 9.91625 6.71281 9.54844 7.3125 9.25Z" fill="#4B5563" />
                                            <path d="M10.625 9C8.99781 9 5.75 10.005 5.75 12V13.5H15.5V12C15.5 10.005 12.2522 9 10.625 9Z" fill="#4B5563" />
                                            <path d="M10.625 8C12.1438 8 13.375 6.76878 13.375 5.25C13.375 3.73122 12.1438 2.5 10.625 2.5C9.10622 2.5 7.875 3.73122 7.875 5.25C7.875 6.76878 9.10622 8 10.625 8Z" fill="#4B5563" />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Arts</p>
                                </div>
                                <div className="flex items-center sm:mt-0 mt-4 sm:ml-6">
                                    <div role="img" aria-label="Engineering">
                                        <svg width={10} height={14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 0C2.23969 0 0 2.01594 0 4.5C0 8.5 5 14 5 14C5 14 10 8.5 10 4.5C10 2.01594 7.76031 0 5 0ZM5 7C4.60444 7 4.21776 6.8827 3.88886 6.66294C3.55996 6.44318 3.30362 6.13082 3.15224 5.76537C3.00087 5.39991 2.96126 4.99778 3.03843 4.60982C3.1156 4.22186 3.30608 3.86549 3.58579 3.58579C3.86549 3.30608 4.22186 3.1156 4.60982 3.03843C4.99778 2.96126 5.39991 3.00087 5.76537 3.15224C6.13082 3.30362 6.44318 3.55996 6.66294 3.88886C6.8827 4.21776 7 4.60444 7 5C6.99942 5.53026 6.78852 6.03863 6.41357 6.41357C6.03863 6.78852 5.53026 6.99942 5 7Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Los Angeles, California</p>
                                </div>
                            </div>
                            <p className="text-sm leading-none text-gray-600 sm:mt-0 mt-4">Closing on 23 July,2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
