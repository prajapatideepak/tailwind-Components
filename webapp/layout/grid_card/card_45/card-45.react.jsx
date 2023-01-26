import React, { useEffect } from "react";

export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="w-80 bg-white dark:bg-gray-800 rounded py-4">
                    <p className="text-xl font-semibold leading-5 px-8 text-gray-800 dark:text-gray-100 ">Personal Details</p>
                    <hr className="w-full border-gray-200 mt-4 mb-6" />
                    <div className="px-8">
                        <div className="flex items-center">
                            <div className="text-gray-500 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">Walter Hartwell White</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="text-gray-500 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                </svg>
                            </div>
                            <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">heisenberg@gmail.com</p>
                        </div>
                        <div className="flex items-start mt-6">
                            <div className="text-gray-500 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <div>
                                <div className="flex">
                                    <p className="text-base font-medium leading-4 px-6 text-gray-800 dark:text-gray-400">0900-78601</p>
                                    <p className="text-base font-medium leading-4 text-indigo-700">work</p>
                                </div>
                                <div className="flex mt-3">
                                    <p className="text-base font-medium leading-4 px-6 text-gray-800 dark:text-gray-400">0900-78601</p>
                                    <p className="text-base font-medium leading-4 text-indigo-700">home</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="text-gray-500 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={12} cy={11} r={3} />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                            </div>
                            <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">Alberquerque, New Mexico</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <div className="text-gray-500 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M8 6V9.999H11V6H13V9.999H16V6H18V9.999L19 10C19.7652 9.99996 20.5015 10.2923 21.0583 10.8173C21.615 11.3422 21.9501 12.0601 21.995 12.824L22 13V14C22 15.014 21.623 15.94 21.001 16.645L21 21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V16.64C2.46267 16.0278 2.12374 15.2669 2.028 14.458L2.006 14.205L2 14V13C1.99996 12.2348 2.29233 11.4985 2.81728 10.9417C3.34224 10.385 4.06011 10.0499 4.824 10.005L5 10L6 9.999V6H8ZM9.002 16.641L8.948 16.704C8.2925 17.4197 7.39883 17.8722 6.434 17.977L6.204 17.995L6 18C5.655 18 5.32 17.956 5 17.874V20H19V17.874C18.3454 18.0423 17.6588 18.0422 17.0042 17.8739C16.3496 17.7055 15.7482 17.3743 15.256 16.911L15.106 16.761L15 16.644L14.893 16.762C14.2446 17.4428 13.3765 17.8727 12.442 17.976L12.2 17.996L12 18C10.9535 18.0015 9.9485 17.5905 9.203 16.856L9.053 16.699L9.002 16.641ZM19 12H5C4.75507 12 4.51866 12.09 4.33563 12.2527C4.15259 12.4155 4.03566 12.6397 4.007 12.883L4 13V13.971L4.003 14.118C4.0331 14.6272 4.25661 15.1057 4.62783 15.4555C4.99905 15.8053 5.48991 16.0001 6 16C6.47895 16.0008 6.94229 15.8297 7.30568 15.5177C7.66907 15.2057 7.90836 14.7736 7.98 14.3L7.995 14.147L8 13.971C8.036 12.723 9.827 12.678 9.989 13.837L9.999 13.971L10.003 14.118C10.031 14.6259 10.2515 15.1041 10.6196 15.4553C10.9877 15.8064 11.4757 16.004 11.9844 16.008C12.4931 16.0119 12.9842 15.8219 13.3577 15.4765C13.7313 15.1312 13.9591 14.6564 13.995 14.149L14.007 13.867C14.131 12.711 15.869 12.711 15.993 13.867L16.005 14.149C16.0408 14.6537 16.2665 15.1261 16.6367 15.471C17.0069 15.8159 17.494 16.0077 18 16.0077C18.506 16.0077 18.9931 15.8159 19.3633 15.471C19.7335 15.1261 19.9592 14.6537 19.995 14.149L20 14V13C20 12.7551 19.91 12.5187 19.7473 12.3356C19.5845 12.1526 19.3603 12.0357 19.117 12.007L19 12ZM7 1C8.32 1.871 8.663 3.088 8.449 3.888C8.3461 4.2723 8.09474 4.59998 7.75024 4.79895C7.40574 4.99793 6.9963 5.0519 6.612 4.949C6.2277 4.8461 5.90002 4.59474 5.70105 4.25024C5.50207 3.90574 5.4481 3.4963 5.551 3.112C5.85 2.002 7 2.5 7 1ZM12 1C13.32 1.871 13.663 3.088 13.449 3.888C13.3461 4.2723 13.0947 4.59998 12.7502 4.79895C12.4057 4.99793 11.9963 5.0519 11.612 4.949C11.2277 4.8461 10.9 4.59474 10.701 4.25024C10.5021 3.90574 10.4481 3.4963 10.551 3.112C10.85 2.002 12 2.5 12 1ZM17 1C18.32 1.871 18.663 3.088 18.449 3.888C18.3461 4.2723 18.0947 4.59998 17.7502 4.79895C17.4057 4.99793 16.9963 5.0519 16.612 4.949C16.2277 4.8461 15.9 4.59474 15.701 4.25024C15.5021 3.90574 15.4481 3.4963 15.551 3.112C15.85 2.002 17 2.5 17 1Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">29th Feb, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
