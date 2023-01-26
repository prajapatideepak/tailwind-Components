import React from "react";
export default function Index() {
    return (
        <div className="flex items-center justify-center py-8 px-4">
            <div className="lg:w-10/12 md:w-11/12 xl:w-1/2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-sm hidden lg:flex">
                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-12.png" className="object-cover object-center" alt="Profile" />
                    <div className="pl-4 pt-4">
                        <p className="text-base font-bold leading-none text-gray-700">James Iverson</p>
                        <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Freelance Artist</p>
                        <p className="text-xs leading-tight text-gray-600 dark:text-gray-400 mt-3 w-full md:w-9/12">“Widely acknowledged as one of Australia's busiest &amp; best MC's and a global authority on Industry, James Iverson shares his expertise and insights into this fascinating Professional Speaking niche, lessons that he has learned and experienced.”</p>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-sm py-4 lg:hidden ">
                    <div className="flex items-center px-4">
                        <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-12.png" className="object-cover object-center h-20" alt="Profile" />
                        <div className="pl-4">
                            <p className="text-base font-bold leading-none text-gray-700">James Iverson</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Freelance Artist</p>
                        </div>
                    </div>
                    <div className="px-4 pt-2">
                        <p className="text-xs leading-tight text-gray-600 dark:text-gray-400 w-full md:w-9/12">“Widely acknowledged as one of Australia's busiest &amp; best MC's and a global authority on Industry, James Iverson shares his expertise and insights into this fascinating Professional Speaking niche, lessons that he has learned and experienced.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
