<template>
    <div class="bg-gray-200 py-10">
        <div class="container mx-auto bg-white shadow rounded">
            <div class="xl:w-full border-b border-gray-300 py-5">
                <div class="flex items-center w-11/12 mx-auto">
                    <div class="container mx-auto">
                        <div class="mx-auto xl:w-full">
                            <p class="text-lg text-gray-800 font-bold">Alerts</p>
                            <p class="text-sm text-gray-500 pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                        </div>
                    </div>
                </div>
            </div>
            <form id="form" v-on:submit.prevent>
                <div class="container mx-auto bg-white dark:bg-gray-800 py-6 w-11/12">
                    <div class="flex items-center mb-8 text-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <p class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Via Email</p>
                    </div>

                    <div class="flex justify-between items-center mb-8">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="email_comments" id="toggle1" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle1" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-8">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="email_job_application" id="toggle2" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle2" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="email_product_update" id="toggle3" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle3" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <div class="flex items-center mb-8 mt-12 text-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        <p class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Push Notifications</p>
                    </div>
                    <div class="flex justify-between items-center mb-8">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="notification_comment" id="toggle4" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle4" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-8">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="notification_application" id="toggle5" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle5" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mb-8">
                        <div class="w-9/12">
                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                        </div>
                        <div class="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="notification_updates" id="toggle6" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label for="toggle6" class="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>
                <div class="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 flex justify-end rounded-bl rounded-br">
                    <button class="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Restore</button>
                    <button class="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormCardWithToggles",
};
</script>

<style>
.checkbox:checked {
    /* Apply class right-0*/
    right: 0;
}
.checkbox:checked + .toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>
