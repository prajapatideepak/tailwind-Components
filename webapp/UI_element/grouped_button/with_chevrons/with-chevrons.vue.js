<template>
    <div class="mx-auto bg-gray-200 flex items-center justify-center py-6">
        <!-- Code block starts -->
        <div class="flex items-start">
            <div class="flex bg-indigo-700 text-white shadow rounded border border-indigo-700 p-2">
                <button class="text-base focus:outline-none" aria-label="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </button>
                <button class="ml-2 text-base focus:outline-none" aria-label="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- Code block ends -->
        <!-- Code block starts -->
        <div class="flex items-start ml-4">
            <div class="flex shadow rounded border border-gray-300 p-2">
                <button class="text-gray-500 text-base focus:outline-none" aria-label="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </button>
                <button class="ml-2 text-gray-500 text-base focus:outline-none" aria-label="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "WithChevrons",
};
</script>
