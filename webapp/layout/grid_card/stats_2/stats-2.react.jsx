import React from "react";
export default function Index() {
    return (
        <div className="mx-auto dark:bg-gray-900 container flex items-center justify-center h-full w-full py-8 px-4">
            <div className="w-96 bg-indigo-700 rounded-lg">
                <div className="inline-flex flex-col items-start justify-end px-10 py-6 w-full ">
                    <div className="text-base sm:text-xl  text-white">
                        <p>Total Invitations</p>
                        <p>Sent</p>
                    </div>
                    <p className="text-2xl sm:text-4xl  text-center mt-4 text-white">12.6 K</p>
                    <div className="flex mt-8 justify-between w-full items-center">
                        <p className="text-xs sm:text-base font-bold leading-normal text-indigo-400">Invitations Pending</p>
                        <p className="text-sm sm:text-2xl font-black leading-normal text-right text-white">6.3 K</p>
                    </div>
                    <div className="flex mt-4 justify-between w-full items-center">
                        <p className="text-xs sm:text-base font-bold leading-normal text-indigo-400">Invitations Accepted</p>
                        <p className="text-sm sm:text-2xl font-black leading-normal text-right text-white">4.3 K</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
