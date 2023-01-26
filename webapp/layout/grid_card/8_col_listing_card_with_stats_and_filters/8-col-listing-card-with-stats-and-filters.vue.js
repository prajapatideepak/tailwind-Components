<template>
    <!-- Card is full width. Use in 8 col grid for best view. -->
    <!-- Card code block start -->
    <div class="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div class="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
            <p class="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">23 December, <span class="text-gray-500">Sunday</span></p>
            <div class="relative">
                <div data-menu @click="filterResults()" class="relative z-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-between w-full cursor-pointer text-xs form-select text-gray-600 dark:text-gray-400 md:p-3 p-2 rounded bg-transparent">
                    <p class="leading-3 tracking-normal font-normal text-sm">
                        Show:
                        <span class="text-indigo-700 dark:text-indigo-600 mr-2">This week</span>
                    </p>
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
                <ul class="invisible z-10 transition duration-300 opacity-0 bg-white dark:bg-gray-700 shadow rounded mt-2 w-40 py-1 absolute">
                    <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Previous week</li>
                    <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Next week</li>
                </ul>
            </div>
        </div>
        <div class="xl:px-8 lg:px-8 md:px-8 px-4 py-4 bg-white dark:bg-gray-800">
            <div class="xl:flex lg:flex md:flex sm:flex">
                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Scheduled: 24</p>
                </div>
                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Pending: 15</p>
                </div>
                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Completed: 09</p>
                </div>
            </div>
        </div>
        <div class="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                <div class="w-3/5">
                    <p class="mb-2 text-sm font-bold text-gray-800 dark:text-gray-100">UX Team Skype Session</p>
                    <ul>
                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                    </ul>
                </div>
                <div class="w-3/12 flex flex-col items-end justify-between">
                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                    <div class="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Meeting</span>
                    </div>
                </div>
            </div>
            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                <div class="w-3/5">
                    <p class="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">UX Team Skype Session</p>
                    <ul class="mb-5">
                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                    </ul>
                    <div class="flex flex-wrap items-center">
                        <div class="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg" alt="" />
                        </div>
                        <div class="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg" alt="" />
                        </div>
                        <div class="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg" alt="" />
                        </div>
                        <p class="text-xs ml-1 text-gray-600 dark:text-gray-400">+3 attendees</p>
                    </div>
                </div>
                <div class="w-3/12 flex flex-col items-end justify-between">
                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                    <div class="bg-red-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <span class="text-xs text-red-500 font-normal">Urgent</span>
                    </div>
                </div>
            </div>
            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                <div class="w-3/5">
                    <p class="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">UX Team Skype Session</p>
                    <ul class="mb-5">
                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                    </ul>
                    <div class="flex flex-wrap items-center">
                        <div class="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg" alt="" />
                        </div>
                        <div class="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg" alt="" />
                        </div>
                        <div class="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg" alt="" />
                        </div>
                        <p class="text-xs ml-1 text-gray-600 dark:text-gray-400">+3 attendees</p>
                    </div>
                </div>
                <div class="w-3/12 flex flex-col items-end justify-between">
                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                    <div class="bg-yellow-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <span class="text-xs text-yellow-600 font-normal">Personal</span>
                    </div>
                </div>
            </div>
            <div class="p-5 flex justify-between rounded bg-gray-100 dark:bg-gray-700">
                <div class="w-3/5">
                    <p class="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">UX Team Skype Session</p>
                    <ul class="mb-5">
                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                    </ul>
                </div>
                <div class="w-3/12 flex flex-col items-end justify-between">
                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                    <div class="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Meeting</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Card code block end -->
</template>
<script>
export default {
    name: "EightColListingCardWithStatsAndFilters",
    methods: {
        filterResults() {
            let elements = document.querySelectorAll("[data-menu]");
            for (let i = 0; i < elements.length; i++) {
                let main = elements[i];
                let element = main.parentElement.parentElement;
                let andicators = main.querySelectorAll("svg");
                let child = element.querySelector("ul");
                if (child.classList.contains("opacity-0")) {
                    child.classList.remove("invisible");
                    child.classList.add("visible");
                    child.classList.add("opacity-100");
                    child.classList.remove("opacity-0");
                    andicators[0].style.display = "block";
                    andicators[1].style.display = "none";
                } else {
                    child.classList.add("invisible");
                    child.classList.remove("visible");
                    child.classList.remove("opacity-100");
                    child.classList.add("opacity-0");
                    andicators[0].style.display = "none";
                    andicators[1].style.display = "block";
                }
                // });
            }
        },
    },
};
</script>
