import React from "react";
export default function Index() {
    return (
        <div className="flex items-center justify-center py-8 dark:bg-gray-900">
            <div className="cursor-pointer rounded-md shadow-lg bg-white dark:bg-gray-800 relative">
                <div className="py-5">
                    <div className="px-6">
                        <p className="text-xs text-gray-400">Event</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">New Year Costume Party</p>
                    </div>
                    <div className="mt-5 px-6">
                        <p className="text-xs text-gray-400">Day</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">Tuesday, 9:00pm - 11:00pm</p>
                    </div>
                    <div className="mt-5 px-6">
                        <p className="text-xs text-gray-400">Date</p>
                        <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">14th September 2020</p>
                    </div>
                    <div className="mt-5 px-6 flex items-center w-full">
                        <div>
                            <p className="text-xs text-gray-400">Tickets Sold</p>
                            <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">857</p>
                        </div>
                        <div className="ml-14">
                            <p className="text-xs text-gray-400">Revenue Earned</p>
                            <p className="text-sm leading-none text-justify text-gray-800 dark:text-gray-100 mt-1">$7698</p>
                        </div>
                    </div>
                    <div className="mt-5 px-6 flex items-center text-gray-700 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="ml-2 text-xs leading-3 text-gray-600 dark:text-gray-400">Veevents.com/cosutmeparty</p>
                        <p />
                        <svg className="ml-3.5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <rect x="5.33331" y="5.33301" width={8} height={8} rx="1.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.6667 5.33366V4.00033C10.6667 3.26395 10.0697 2.66699 9.33335 2.66699H4.00002C3.26364 2.66699 2.66669 3.26395 2.66669 4.00033V9.33366C2.66669 10.07 3.26364 10.667 4.00002 10.667H5.33335" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="pt-6 flex justify-between relative items-center w-full">
                        <div className="w-3 h-5  dark:bg-gray-400 rounded-r-3xl" />
                        <div className="w-full border-b-2 border-dashed border-gray-100 dark:border-gray-400" />
                        <div className="w-3 h-5  dark:bg-gray-400 rounded-l-3xl" />
                    </div>
                    <div className="mt-4 px-6 flex flex-col w-full justify-center items-center">
                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/barCode.png" alt="barcode" />
                        <p className="text-sm font-bold leading-none text-gray-700 dark:text-gray-400 mt-2">253704938890287467</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
