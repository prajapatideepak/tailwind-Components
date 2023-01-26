<template>
    <div class="max-w-8xl mx-auto container py-8">
        <div class="flex justify-center items-center">
            <ul class="flex">
                <li class="flex flex-col justify-center">
                    <span @click="changeValue(false)" class="cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </span>
                </li>
                <li>
                    <input id="page_number" class="w-8 h-8 pl-2 rounded text-indigo-700 text-base mx-2 shadow focus:outline-none" value="23" />
                </li>
                <li class="flex flex-col justify-center">
                    <span @click="changeValue(true)" class="cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </span>
                </li>
            </ul>
            <div class="flex ml-8 shadow rounded">
                <span class="cursor-pointer text-gray-500 text-base leading-tight p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
                <span class="cursor-pointer text-gray-500 text-base leading-tight p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stepper.vue",
    methods: {
        changeValue(flag) {
            let input = document.getElementById("page_number");
            input.value = parseInt(input.value) + (flag ? +1 : -1);
        },
    },
};
</script>
