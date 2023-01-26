import React, { useEffect } from "react";

export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="bg-white dark:bg-gray-800 md:w-96 rounded px-5 pt-4 pb-5 w-full shadow">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Recent Chats</p>
                    <div className="mt-6 flex items-center">
                        <img className="w-10 h-10 rounded-full shadow" src="https://i.ibb.co/D1J3VjY/card-1.png" alt="profile" />
                        <div className="flex justify-between w-full">
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">James Hart</p>
                                    <div className="w-1 h-1 bg-green-500 rounded-full ml-2" />
                                </div>
                                <p className="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Let’s catchup sometime later?</p>
                            </div>
                            <p className="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">04:43 PM</p>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <img className="w-10 h-10 rounded-full shadow" src="https://i.ibb.co/cLGvfw0/card-2.png" alt="profile" />
                        <div className="flex justify-between w-full">
                            <div className="ml-2">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Ronald McDonald</p>
                                <p className="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">How’d the meeting go?</p>
                            </div>
                            <p className="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">04:43 PM</p>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <img className="w-10 h-10 rounded-full shadow" src="https://i.ibb.co/GPkPY8S/card-3.png" alt="profile" />
                        <div className="flex justify-between w-full">
                            <div className="ml-2">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Amanda Mathison</p>
                                <p className="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Done with the workspace setting</p>
                            </div>
                            <p className="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">02:30 PM</p>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <img className="w-10 h-10 rounded-full shadow" src="https://i.ibb.co/XChV95g/card-4.png" alt="profile" />
                        <div className="flex justify-between w-full">
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Josh Cleveland</p>
                                    <div className="w-1 h-1 bg-green-500 rounded-full ml-2" />
                                </div>
                                <p className="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Lets’s discuss in an hour</p>
                            </div>
                            <p className="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">01:03 PM</p>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <img className="w-10 h-10 rounded-full shadow" src="https://i.ibb.co/C2PRFyK/card-5.png" alt="profile" />
                        <div className="flex justify-between w-full">
                            <div className="ml-2">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Randall Frank</p>
                                <p className="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">Client call in 10 mins, be ready</p>
                            </div>
                            <p className="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">09:40 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
