import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="bg-white dark:bg-gray-800 md:w-96 rounded px-5 pt-3 pb-4 w-full shadow flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co/3k97G48/card-1.png" alt="empty" />
                    <p className="text-sm leading-4 mt-3 text-center text-gray-800">Looks kinda empty here</p>
                    <button className="flex items-center justify-center px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded mt-5">
                        <p className="text-sm font-medium leading-none text-center text-white">Add Widget</p>
                    </button>
                </div>
            </div>
        </>
    );
}
