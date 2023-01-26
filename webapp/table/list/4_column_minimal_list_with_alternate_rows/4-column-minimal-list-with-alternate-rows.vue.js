<template>
    <div class="w-full h-full bg-gray-200 dark:bg-gray-900 overflow-x-hidden">
        <div class="container mx-auto py-20">
            <table class="w-full shadow text-left bg-white dark:bg-gray-800">
                <thead>
                    <tr class="border-b border-gray-300 dark:border-gray-700">
                        <th class="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800 dark:text-gray-100">Name</th>
                        <th class="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100">Title</th>
                        <th class="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pl-20">Email</th>
                        <th class="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100 pr-2 sm:pr-10 text-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr class="bg-gray-200 dark:bg-gray-700">
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr>
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-red-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Inactive</td>
                    </tr>
                    <tr class="bg-gray-200 dark:bg-gray-700">
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-red-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Inactive</td>
                    </tr>
                    <tr>
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                    <tr class="bg-gray-200 dark:bg-gray-700">
                        <td class="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Andres Berlin</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">Director, Human Resources</td>
                        <td class="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm text-center">andresberlin@gmail.com</td>
                        <td class="py-5 text-green-400 pr-2 sm:pr-10 text-xs sm:text-sm text-right">Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "FourColumnMinimalListWithAlternateRows",
};
</script>
