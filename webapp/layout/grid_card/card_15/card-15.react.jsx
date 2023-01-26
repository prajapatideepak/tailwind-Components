import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 shadow-lg w-full">
                    <div className="px-5 py-6 bg-indigo-700 rounded-t">
                        <p className="text-2xl font-bold leading-normal text-white">Get the latest news</p>
                        <p className="pt-3 text-xs leading-4 text-white">Subscribe to our newsletter and receive weekly updates and free components each week</p>
                        <p className="text-xs py-5  leading-3 text-white">Unsubscribe anytime.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-5 py-6 rounded-b">
                        <lable className="text-sm font-bold leading-none text-gray-800 ">Email</lable>
                        <div className="flex items-center border-gray-200 border px-3 rounded mt-2">
                            <input className="w-full  py-3 focus:outline-none  text-gray-900 text-xs bg-transparent leading-3 w-full placeholder-gray-900 dark:placeholder-white" placeholder="Enter your email" />
                            <p className="text-xs font-semibold leading-3 text-indigo-700 dark:text-gray-100 ">SUBMIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
