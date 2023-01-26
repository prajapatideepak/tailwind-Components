<template>
    <div class="py-10">
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
            <div class="justify-between flex-wrap hidden sm:block">
                <div class="xl:w-full xl:mx-0 rounded bg-gray-200 h-12 shadow">
                    <ul class="flex items-center h-full">
                        <li @click="activeTab($event)" class="text-sm text-white flex items-center h-full px-5 bg-indigo-700 py-4 rounded-md mr-10 font-normal">Active</li>
                        <li @click="activeTab($event)" class="text-sm text-gray-600 h-full flex items-center py-4 px-5 mr-10 rounded font-normal hover:text-gray-700 cursor-pointer">inactive</li>
                        <li @click="activeTab($event)" class="text-sm text-gray-600 h-full flex items-center py-4 px-5 mr-10 rounded font-normal hover:text-gray-700 cursor-pointer">inactive</li>
                        <li @click="activeTab($event)" class="text-sm text-gray-600 h-full flex items-center py-4 px-5 mr-10 rounded font-normal hover:text-gray-700 cursor-pointer">inactive</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndigoBlockGrayBg",
    methods: {
        activeTab(event) {
            let siblings = event.currentTarget.parentNode.querySelectorAll("li");
            for (let item of siblings) {
                item.classList.add("text-gray-600");
                item.classList.remove("text-white");
                item.classList.remove("bg-indigo-700");
                item.innerHTML = "Inactive";
            }
            event.currentTarget.classList.remove("text-gray-600");
            event.currentTarget.classList.add("bg-indigo-700");
            event.currentTarget.classList.add("text-white");
            event.currentTarget.innerHTML = "Active";
        },
    },
};
</script>
