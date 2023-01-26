import React, { useState } from "react";
const Index = () => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            <div className="sm:hidden relative w-11/12 mx-auto rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    <option className="text-sm text-gray-600">inactive </option>
                    <option className="text-sm text-gray-600">inactive </option>
                    <option selected className="text-sm text-gray-600">
                        Active{" "}
                    </option>
                    <option className="text-sm text-gray-600">inactive </option>
                    <option className="text-sm text-gray-600">inactive </option>
                </select>
            </div>
            <div className="justify-between flex-wrap hidden sm:block bg-white rounded shadow">
                <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                    <ul className="flex">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 1 ? "Active" : "Inactive"}</span>
                            {activeStatus == 1 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 2 ? "Active" : "Inactive"}</span>
                            {activeStatus == 2 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 3 ? "Active" : "Inactive"}</span>
                            {activeStatus == 3 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 4 ? "Active" : "Inactive"}</span>
                            {activeStatus == 4 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Index;
