<template>
    <div class="mx-auto py-6 bg-gray-200 dark:bg-gray-800">
        <div class="container flex justify-center mx-auto py-6">
            <div class="h-48">
                <div class="relative">
                    <div class="bg-indigo-700 border border-indigo-700 flex justify-between rounded w-40 cursor-pointer" data-menu>
                        <p class="pl-3 py-3 text-white text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                        <div class="bg-indigo-600 items-center flex rounded-r">
                            <div class="cursor-pointer text-white mx-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ul class="visible transition duration-300 opacity-100 ease-out bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Interface Settings</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Account Data</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Sign Out</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndigoWithSeperateChevron",
    mounted: function () {
        this.main();
    },
    methods: {
        main() {
            let elements = document.querySelectorAll("[data-menu]");
            for (let i = 0; i < elements.length; i++) {
                let main = elements[i];
                let andicators = main.querySelectorAll("svg");
                main.addEventListener("click", function () {
                    let element = main.parentElement.parentElement;
                    let child = element.querySelector("ul");
                    if (child.classList.contains("opacity-0")) {
                        child.classList.toggle("invisible");
                        child.classList.toggle("visible");
                        andicators[0].style.display = "block";
                        andicators[1].style.display = "none";
                    } else {
                        setTimeout(function () {
                            child.classList.toggle("invisible");
                            child.classList.toggle("visible");
                        }, 300);
                        andicators[0].style.display = "none";
                        andicators[1].style.display = "block";
                    }
                    child.classList.toggle("opacity-0");
                    child.classList.toggle("opacity-100");
                });
            }
        },
    },
};
</script>
