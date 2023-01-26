<template>
    <div class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style="font-family: 'Lato', sans-serif">
        <div class="flex md:flex-row flex-col items-center py-8 px-4">
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16">
                <label for="password3" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Password</label>
                <div class="relative">
                    <div onclick="changeView()" class="absolute right-0 text-gray-600 dark:text-gray-400 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                            <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                        </svg>
                    </div>
                    <input id="password3" type="password" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:bg-gray-800 bg-white dark:border-gray-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col md:py-0 py-4">
                <label for="id" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Organization ID</label>
                <div class="relative">
                    <div class="absolute right-0 text-gray-600 dark:text-gray-400 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                    <input id="id" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:bg-gray-800 bg-white dark:border-gray-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                </div>
            </div>
            <!-- Code block ends -->
            <script>
                function changeView() {
                    let input = document.getElementById("password3");
                    input.type = input.type === "text" ? "password" : "text";
                }
            </script>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputWithIconAtEnd",
    methods: {
        changeView() {
            let input = document.getElementById("password3");
            input.type = input.type === "text" ? "password" : "text";
        },
    },
};
</script>
