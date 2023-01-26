<template>
    <div class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style="font-family: 'Lato', sans-serif">
        <div class="flex md:flex-row flex-col items-center py-8 px-4">
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16">
                <label for="password1" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Password</label>
                <input id="password1" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm text-red-400 border-red-400 rounded border dark:bg-gray-800 bg-white shadow" value="12345" />
                <div class="flex items-center justify-between mt-2 text-red-400">
                    <p class="text-xs leading-3 tracking-normal">Incorrect combination, weak!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                    </svg>
                </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col my-8 lg:my-0 xl:my-0">
                <label for="password2" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Password</label>
                <input id="password2" class="dark:bg-gray-800 bg-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm text-green-400 border-green-400 rounded border shadow" value="Correct_234" />
                <div class="flex items-center justify-between mt-2 text-green-400">
                    <p class="text-xs leading-3 tracking-normal">Your passowrd is strong!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                    </svg>
                </div>
            </div>
            <!-- Code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "InputWithErrorSuccess",
};
</script>
