import react from "react";
const index = (props) => {
    return (
        <>
            <div className="flex items-center justify-center py-8">
                <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                    <div className="p-4 md:p-6">
                        <div className="flex items-center">
                            <img src="https://i.ibb.co/Wxb9VYc/DP.png" alt="dp" className="w-16 h-16 rounded-full" />
                            <div className="pl-4 sm:pl-5">
                                <p className="sm:text-xl text-lg font-semibold text-gray-800 dark:text-gray-100">Tolu Arowoselu</p>
                                <p className="sm:text-lg text-base text-gray-500 dark:text-gray-400 mt-1">Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="sm:mt-7 mt-4">
                            <p className="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">DESCRIPTION</p>
                            <p className="sm:text-base text-sm leading-5 text-gray-500 dark:text-gray-400 mt-2">I'm an experienced Skilled Webflow, WordPress, User Experience, User Interface and Graphics designer with a demonstrated history of working in the design industry.</p>
                        </div>
                        <div className="mt-4">
                            <p className="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">FOCUS AREA</p>
                            <div className="flex items-center mt-5">
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-10 flex items-center justify-center">
                                    <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">Full Time</p>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-10 flex items-center justify-center ml-4 sm:ml-8">
                                    <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">2 years</p>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-10 flex items-center justify-center ml-4 sm:ml-8">
                                    <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">2 years</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 mt-6">
                            <button className="bg-indigo-700 hover:bg-indigo-600 w-full rounded py-2">
                                <p className="sm:text-base text-sm font-semibold leading-9 text-center text-white">Invite For Job</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default index;
