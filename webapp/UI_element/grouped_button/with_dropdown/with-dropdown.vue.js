<template>
    <div class="mx-auto bg-gray-200 flex justify-center py-6 h-64">
        <!-- Code block starts -->
        <div class="flex items-start relative" @click="dropdownFunction($event, 1)">
            <button class="border bg-white text-gray-500 flex items-center justify-center shadow rounded text-xs focus:outline-none">
                <span class="py-3 pl-3">Save Changes</span>
                <span class="py-3 bg-white text-gray-500 rounded-r px-2">
                    <svg id="downIcon1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <svg id="upIcon1" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                    </svg>
                </span>
            </button>
            <ul class="bg-white shadow rounded py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content hidden">
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
            </ul>
        </div>
        <!-- Code block ends -->
        <!-- Code block starts -->
        <div class="flex items-start ml-4 relative" @click="dropdownFunction($event, 2)">
            <button class="bg-indigo-700 text-white flex items-center justify-center shadow rounded text-xs focus:outline-none">
                <span class="p-3">Save Changes</span>
                <span class="py-3 bg-indigo-600 border border-indigo-600 rounded-r px-2">
                    <svg id="downIcon2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <svg id="upIcon2" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                    </svg>
                </span>
            </button>
            <ul class="bg-white shadow rounded py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content hidden">
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
            </ul>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "WithDropdown",
    methods: {
        dropdownFunction(event, flag) {
            // event.currentTarget.nextSibling.classList.toggle("hidden");
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
