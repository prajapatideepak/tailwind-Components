<template>
    <div class="mx-auto py-12 flex justify-center">
        <dh-component>
            <div class="flex flex-col items-start">
                <!-- Code block starts -->
                <div class="py-4 flex items-center">
                    <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p class="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Off</p>
                </div>
                <!-- Code block ends -->
                <!-- Code block starts -->
                <div class="py-4 flex items-center">
                    <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input checked type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p class="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">On</p>
                </div>
                <!-- Code block ends -->
                <!-- Code block starts -->
                <div class="py-4 flex items-center">
                    <div class="bg-gray-200 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input disabled type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p class="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Disabled</p>
                </div>
                <!-- Code block ends -->
                <!-- Code block starts -->
                <div class="py-4 flex items-center">
                    <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input checked type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </div>
                    </div>
                    <p class="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Indeterminate</p>
                </div>
                <!-- Code block ends -->
            </div>
        </dh-component>
    </div>
</template>

<script>
export default {
    name: "CheckboxLarge",
};
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>
