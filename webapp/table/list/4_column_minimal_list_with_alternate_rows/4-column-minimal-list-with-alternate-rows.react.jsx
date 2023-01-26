import React from "react";
const Index = () => {
    return (
        <div>
            <table className="w-full shadow text-left bg-white dark:bg-gray-800">
                <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                        <th className="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800 dark:text-gray-100">Name</th>
                        <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100">Title</th>
                        <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pl-20">Email</th>
                        <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr>
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-red-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Inactive</td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-red-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Inactive</td>
                    </tr>
                    <tr>
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                        <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td className="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Index;
