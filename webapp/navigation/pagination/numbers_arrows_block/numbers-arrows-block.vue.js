<template>
    <div class="max-w-8xl mx-auto container py-10">
        <ul class="flex justify-center items-center">
            <li>
                <span class="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </span>
            </li>
            <li>
                <span class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
            </li>
            <li>
                <span class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">2</span>
            </li>
            <li>
                <span class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">...</span>
            </li>
            <li>
                <span class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">6</span>
            </li>
            <li>
                <span class="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">7</span>
            </li>
            <li>
                <span class="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NumberArrowsBlock",
};
</script>
