import React from "react";
const Index = () => {
    return (
        <div className="mx-auto py-12 flex flex-col items-center">
            {/* Code block starts */}
            <div className="cursor-pointer my-5 rounded-full relative shadow-sm">
                <input type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                <label htmlFor="toggle1" className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="cursor-pointer my-5 w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm">
                <input defaultChecked type="checkbox" name="toggle" id="toggle2" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                <label htmlFor="toggle2" className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
            </div>
            {/* Code block ends */}

            <style>
                {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
            </style>
        </div>
    );
};
export default Index;
