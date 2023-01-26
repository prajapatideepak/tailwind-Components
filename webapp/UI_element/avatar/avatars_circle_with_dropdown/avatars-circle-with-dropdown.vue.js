<template>
    <div class="mx-auto flex justify-center py-20 bg-gray-100">
        <div class="px-6 flex flex-col items-start sm:items-center sm:flex-row">
            <!-- Code block starts -->
            <div class="flex items-center mb-4 lg:mb-0 mr-10">
                <div class="w-12 h-12 bg-cover rounded-md mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="" class="rounded-full h-full w-full overflow-hidden shadow" />
                </div>
                <div>
                    <p class="text-gray-800 dark:text-gray-100 text-base font-medium">Steve Doe</p>
                    <p class="text-gray-600 dark:text-gray-400 text-xs">View Profile</p>
                </div>
            </div>
            <!-- Code block ends -->

            <!-- Code block starts -->
            <div class="flex items-center mb-4 lg:mb-0 mr-10">
                <div class="w-12 h-12 bg-cover rounded mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="" class="rounded-full h-full w-full overflow-hidden shadow" />
                </div>
                <div class="flex relative items-center" @click="dropdownHandler($event, 1)">
                    <p class="text-gray-800 dark:text-gray-100 text-base font-medium">Steve Doe</p>
                    <ul class="p-2 w-40 border-r bg-white dark:bg-gray-800 dark:border-gray-800 absolute rounded z-40 right-0 shadow mt-16 hidden top-0">
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span class="ml-2">My Profile</span>
                            </div>
                        </li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="17" x2="12" y2="17.01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span class="ml-2">Help Center</span>
                        </li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span class="ml-2">Account Settings</span>
                        </li>
                    </ul>
                    <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                        <svg id="upIcon1" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                        <svg id="downIcon1" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </div>
            <!-- Code block ends -->

            <!-- Code block starts -->
            <div class="flex items-center mb-4 lg:mb-0 mr-10">
                <div class="w-12 h-12 bg-cover rounded-md mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="" class="rounded-full h-full w-full overflow-hidden shadow" />
                </div>
                <div class="flex relative items-center" @click="dropdownHandler($event, 2)">
                    <ul class="p-2 w-40 border-r bg-white dark:bg-gray-800 dark:border-gray-800 absolute rounded z-40 right-0 shadow mt-16 hidden top-0">
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span class="ml-2">My Profile</span>
                            </div>
                        </li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="17" x2="12" y2="17.01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span class="ml-2">Help Center</span>
                        </li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span class="ml-2">Account Settings</span>
                        </li>
                    </ul>
                    <div class="cursor-pointer text-gray-600 dark:text-gray-400">
                        <svg id="upIcon2" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                        <svg id="downIcon2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </div>
            <!-- Code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "AvatarsCircleWithDropdown",
    methods: {
        dropdownHandler(event, flag) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            let upIcon;
            let downIcon;
            single.classList.toggle("hidden");
            if (flag === 1) {
                upIcon = document.getElementById("upIcon1");
                downIcon = document.getElementById("downIcon1");
                upIcon.classList.toggle("hidden");
                downIcon.classList.toggle("hidden");
            } else {
                upIcon = document.getElementById("upIcon2");
                downIcon = document.getElementById("downIcon2");
                upIcon.classList.toggle("hidden");
                downIcon.classList.toggle("hidden");
            }
        },
    },
};
</script>
