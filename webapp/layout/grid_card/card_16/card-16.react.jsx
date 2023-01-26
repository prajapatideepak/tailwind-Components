import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="bg-white dark:bg-gray-800 md:w-96 rounded px-5 py-4 shadow w-full">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Latest Posts</p>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <p className="text-sm font-medium leading-5 text-gray-800 dark:text-gray-100 w-9/12">Why design thinking is essential for building successful products?</p>
                            <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">3hrs ago</p>
                        </div>
                        <div className="flex items-center text-xs leading-3 text-gray-500 dark:text-gray-400 mt-2">
                            <p>3,281 views</p>
                            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1" />
                            <p>250 reactions</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <p className="text-sm font-medium leading-5 text-gray-800 dark:text-gray-100 w-8/12">How to get ahead in freelance with a beginner’s profile</p>
                            <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">6hrs ago</p>
                        </div>
                        <div className="flex items-center text-xs leading-3 text-gray-500 dark:text-gray-400 mt-2">
                            <p>35 views</p>
                            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1" />
                            <p>10 reactions</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <p className="text-sm font-medium leading-5 text-gray-800 dark:text-gray-100 w-8/12">Why forming relationships and building a network is essential?</p>
                            <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">7hrs ago</p>
                        </div>
                        <div className="flex items-center text-xs leading-3 text-gray-500 dark:text-gray-400 mt-2">
                            <p>3,281 views</p>
                            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1" />
                            <p>250 reactions</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <p className="text-sm font-medium leading-5 text-gray-800 dark:text-gray-100 w-8/12">What are variants and how to use them in Figma</p>
                            <p className="text-xs leading-4 text-gray-500 dark:text-gray-400">18hrs ago</p>
                        </div>
                        <div className="flex items-center text-xs leading-3 text-gray-500 dark:text-gray-400 mt-2">
                            <p>3,281 views</p>
                            <div className="w-1 h-1 bg-gray-500 rounded-full mx-1" />
                            <p>250 reactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
