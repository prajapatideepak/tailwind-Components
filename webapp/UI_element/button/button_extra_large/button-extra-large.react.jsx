import React from "react";
function Index() {
    return (
        <>
            <div className="mx-2 my-2 px-6 flex flex-wrap">
                {/* Code block for white alternative button starts */}
                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-16 py-4 text-xl">Button</button>
                {/* Code block for white alternative button ends */}
                {/* Code block for button with black outline starts */}
                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-16 py-4 text-xl">Button</button>
                {/* Code block for button with black outline ends */}
                {/* Code block for gray button starts */}
                <button className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-16 py-4 text-xl">Button</button>
                {/* Code block for gray button ends */}
                {/* Code block for gray alternative button starts */}
                <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-16 py-4 text-xl">Button</button>
                {/* Code block for gray alternative button ends */}
                {/* Code block for button with gray outline starts */}
                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 px-16 py-4 text-xl">Button</button>
                {/* Code block for button with gray outline ends */}
                {/* Code block for indigo grey button starts */}
                <button className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-16 py-4 text-xl">Button</button>
                {/* Code block for indigo grey button ends */}
                {/* Code block for button with indigo outline starts */}
                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-16 py-4 text-xl">Button</button>
                {/* Code block for button with indigo outline ends */}
                {/* Code block for primary button starts */}
                <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-16 py-4 text-xl">Button</button>
                {/* Code block for primary button ends */}
                {/* Code block for white button starts */}
                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-16 py-4 text-xl">Button</button>
                {/* Code block for white button ends */}
            </div>
        </>
    );
}
export default Index;
