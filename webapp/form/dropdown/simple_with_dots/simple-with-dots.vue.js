<template>
    <div class="mx-auto py-6">
        <div class="container flex justify-center mx-auto my-6">
            <div class="h-56 mb-32 -ml-32">
                <!-- Code block starts -->
                <div class="relative">
                    <div class="cursor-pointer text-gray-600 dark:text-gray-400" data-menu>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                        </svg>
                    </div>
                    <ul class="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded py-1 w-48 absolute">
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                        <li><hr class="border-gray-200 dark:border-gray-700 my-1" /></li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Account Data</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Sign Out</li>
                        <li><hr class="border-gray-200 dark:border-gray-700 my-1" /></li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Account</li>
                    </ul>
                </div>
                <!-- Code block ends -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithDots",
    mounted: function () {
        this.main();
    },
    methods: {
        main() {
            let elements = document.querySelectorAll("[data-menu]");
            for (let i = 0; i < elements.length; i++) {
                let main = elements[i];
                main.addEventListener("click", function () {
                    let element = main.parentElement.parentElement;
                    let child = element.querySelector("ul");
                    if (child.classList.contains("opacity-0")) {
                        child.classList.toggle("invisible");
                        child.classList.toggle("visible");
                    } else {
                        setTimeout(function () {
                            child.classList.toggle("invisible");
                            child.classList.toggle("visible");
                        }, 300);
                    }
                    child.classList.toggle("opacity-0");
                    child.classList.toggle("opacity-100");
                });
            }
        },
    },
};
</script>
}
