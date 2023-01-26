import React from "react";
const Index = () => {
    return (
        <div className="py-20 container mx-auto overflow-x-auto">
            <table className="w-full shadow text-left bg-white dark:bg-gray-800">
                <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-200">
                        <th className="py-5 pl-2 sm:pl-10 w-1/4 text-base dark:text-gray-100 text-gray-800">Name</th>
                        <th className="py-5 w-1/4 text-base dark:text-gray-100 text-gray-800 text-center pr-8">Title</th>
                        <th className="py-5 w-1/4 text-base dark:text-gray-100 text-gray-800 text-center">Status</th>
                        <th className="py-5 w-1/4 text-base dark:text-gray-100 text-gray-800 text-right pr-2 sm:pr-10">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200">
                        <td className="pl-2 sm:pl-10 pr-2 py-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12">
                                    <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt className="w-full h-full object-cover rounded shadow" />
                                </div>
                                <div className="pl-4">
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm">Andres Berlin</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">andresberlin@gmail.com</span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
                            <div className="xl:pl-32 flex flex-col">
                                <div>
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm pb-1">Director</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Talent Management </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text-green-400 text-xs sm:text-sm text-center">Active</td>
                        <td className="pt-4 pb-5 dark:text-gray-100 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Owner</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="pl-2 sm:pl-10 pr-2 py-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12">
                                    <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt className="w-full h-full object-cover rounded shadow" />
                                </div>
                                <div className="pl-4">
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm">Ashley Wilson</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">ashleywilson@gmail.com </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
                            <div className="xl:pl-32 flex flex-col">
                                <div>
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm pb-1">Senior Manager</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Digital Design </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text-red-400 text-xs sm:text-sm text-center">Inactive</td>
                        <td className="pt-4 pb-5 dark:text-gray-100 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Owner</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="pl-2 sm:pl-10 pr-2 py-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12">
                                    <img src="https://cdn.tuk.dev/assets/beautiful-woman-medium-shot-with-pink-background_23-2148316670.jpg" alt className="w-full h-full object-cover rounded shadow" />
                                </div>
                                <div className="pl-4">
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm">Hannah Geller</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">hannahgeller@gmail.com </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
                            <div className="xl:pl-32 flex flex-col">
                                <div>
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm pb-1">VP Engineering</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Engineering &amp; Development </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text-green-400 text-xs sm:text-sm text-center">Active</td>
                        <td className="pt-4 pb-5 dark:text-gray-100 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Owner</td>
                    </tr>
                    <tr>
                        <td className="pl-2 sm:pl-10 pr-2 py-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12">
                                    <img src="https://cdn.tuk.dev/assets/photo-1575978108872-9b1429a19a0f.jfif" alt className="w-full h-full object-cover rounded shadow" />
                                </div>
                                <div className="pl-4">
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm">Jonathan Stark</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">jonathanstark@gmail.com </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
                            <div className="xl:pl-32 flex flex-col">
                                <div>
                                    <p className="dark:text-gray-100 text-gray-800 text-xs sm:text-sm pb-1">Lead Developer</p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Engineering &amp; Development </span>
                                </div>
                            </div>
                        </td>
                        <td className="pr-2 pt-4 pb-5 text-red-400 text-xs sm:text-sm text-center">Inactive</td>
                        <td className="pt-4 pb-5 dark:text-gray-100 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Owner</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Index;
