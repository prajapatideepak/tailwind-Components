<template>
    <div class="bg-gray-200 py-10">
        <div class="container mx-auto">
            <div class="sm:hidden relative w-11/12 mx-auto rounded">
                <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    <option class="text-sm text-gray-600">inactive</option>
                    <option class="text-sm text-gray-600">inactive</option>
                    <option selected class="text-sm text-gray-600">Active</option>
                    <option class="text-sm text-gray-600">inactive</option>
                    <option class="text-sm text-gray-600">inactive</option>
                </select>
            </div>
            <div class="xl:w-full xl:mx-0 h-12 hidden sm:block bg-white rounded shadow">
                <ul class="flex border-b px-5">
                    <li @click="activeTab($event)" class="text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-8 font-normal cursor-pointer">
                        <span class="mb-3">Active</span>
                        <div class="w-full h-1 bg-indigo-700 rounded-t-md"></div>
                    </li>
                    <li @click="activeTab($event)" class="text-sm text-gray-600 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-8 font-normal cursor-pointer">
                        <span class="mb-3">Inactive</span>
                        <div class="w-full h-1 bg-indigo-700 rounded-t-md hidden"></div>
                    </li>
                    <li @click="activeTab($event)" class="text-sm text-gray-600 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-8 font-normal cursor-pointer">
                        <span class="mb-3">Inactive</span>
                        <div class="w-full h-1 bg-indigo-700 rounded-t-md hidden"></div>
                    </li>
                    <li @click="activeTab($event)" class="text-sm text-gray-600 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-8 font-normal cursor-pointer">
                        <span class="mb-3">Inactive</span>
                        <div class="w-full h-1 bg-indigo-700 rounded-t-md hidden"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ActiveIndigo",
    methods: {
        activeTab(event) {
            let siblings = event.currentTarget.parentNode.querySelectorAll("li");
            for (let item of siblings) {
                item.children[0].innerHTML = "Inactive";
                item.children[1].classList.add("hidden");
                item.classList.add("text-gray-600");
                item.classList.remove("text-indigo-700");
            }
            event.currentTarget.children[0].innerHTML = "Active";
            event.currentTarget.children[1].classList.remove("hidden");
            event.currentTarget.classList.remove("text-gray-600");
            event.currentTarget.classList.add("text-indigo-700");
        },
    },
};
</script>
