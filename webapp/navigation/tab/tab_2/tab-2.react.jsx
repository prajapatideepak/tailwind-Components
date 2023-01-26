import React from "react";

export default function index() {
    return (
        <>
            <div className="mx-auto container py-10 px-4">
                <div className="sm:flex items-center border-b border-gray-200 hidden">
                    <div className="flex items-center mr-16 group border-transparent border-b pb-5 cursor-pointer hover:border-indigo-700">
                        <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Notes</p>
                        <div className="bg-gray-100 group-hover:bg-indigo-100 rounded-sm flex items-center justify-center ml-2">
                            <p className="text-xs leading-3 p-0.5 text-gray-600 group-hover:text-indigo-700">8</p>
                        </div>
                    </div>
                    <div className="flex items-center mr-16 group border-indigo-700 border-b pb-5">
                        <p className="text-sm leading-none text-indigo-700">To Do</p>
                        <div className="bg-indigo-100 rounded-sm flex items-center justify-center ml-2">
                            <p className="text-xs leading-3 p-0.5 text-indigo-700">17</p>
                        </div>
                    </div>
                    <div className="flex items-center mr-16 group border-transparent hover:border-indigo-700 cursor-pointer border-b pb-5">
                        <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Pending</p>
                        <div className="bg-gray-100 group-hover:bg-indigo-100 rounded-sm flex items-center justify-center ml-2">
                            <p className="text-xs leading-3 p-0.5 text-gray-600 group-hover:text-indigo-700">47</p>
                        </div>
                    </div>
                    <div className="flex items-center mr-16 group border-transparent hover:border-indigo-700 cursor-pointer border-b pb-5">
                        <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Links</p>
                    </div>
                    <div className="flex items-center mr-16 group border-transparent hover:border-indigo-700 cursor-pointer border-b pb-5">
                        <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Files</p>
                    </div>
                </div>
                <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 9 12 5 16 9" />
                            <polyline points="16 15 12 19 8 15" />
                        </svg>
                    </div>
                    <select aria-label="Selected tab" className="form-select block w-full p-3  border rounded border-gray-200 text-gray-600 appearance-none bg-transparent relative z-10">
                        <option selected className="text-sm text-indigo-700">
                            To Do
                        </option>
                        <option className="text-sm text-gray-600">Notes</option>
                        <option className="text-sm text-gray-600">Pending</option>
                        <option className="text-sm text-gray-600">Link</option>
                        <option className="text-sm text-gray-600">Files</option>
                    </select>
                </div>
            </div>
        </>
    );
}
