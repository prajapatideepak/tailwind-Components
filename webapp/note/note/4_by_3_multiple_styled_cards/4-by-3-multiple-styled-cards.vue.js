<template>
    <div class="mx-auto container py-20 px-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="rounded">
                <div v-for="(card, idx) in cards" v-bind:key="idx" class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4" v-bind:class="[card.theme, card.border]">
                    <div>
                        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">{{ card.title }}</h4>
                        <p class="text-gray-800 dark:text-gray-100 text-sm">{{ card.desc }}</p>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">{{ card.date }}</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-100 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
                    <div>
                        <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
                        <p class="text-gray-800 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari</p>
                    </div>
                    <div class="w-full flex flex-col items-start">
                        <div class="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="12" cy="13" r="7"></circle>
                                <polyline points="12 10 12 13 14 13"></polyline>
                                <line x1="7" y1="4" x2="4.25" y2="6"></line>
                                <line x1="17" y1="4" x2="19.75" y2="6"></line>
                            </svg>
                            <p class="ml-2">7 Sept, 23:00</p>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 w-full">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded">
                <div class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="mb-3 flex items-center">
                            <div class="border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-gray-600 dark:text-gray-400 text-xs flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="13" r="7"></circle>
                                    <polyline points="12 10 12 13 14 13"></polyline>
                                    <line x1="7" y1="4" x2="4.25" y2="6"></line>
                                    <line x1="17" y1="4" x2="19.75" y2="6"></line>
                                </svg>
                                <p class="ml-2">7 Sept, 23:00</p>
                            </div>
                            <div class="p-1 bg-gray-800 dark:bg-gray-100 rounded-full ml-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="mb-3 flex items-center flex-no-wrap">
                            <div class="w-6 h-6 bg-cover bg-center rounded-md">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                            <div class="w-6 h-6 bg-cover rounded-md -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                            <div class="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded">
                <div class="w-full h-64 flex flex-col justify-between items-start bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                        <p class="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari</p>
                    </div>
                    <div class="w-full flex flex-col items-start">
                        <div class="mb-3 border border-gray-800 dark:border-gray-700 dark:text-gray-400 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="12" cy="13" r="7"></circle>
                                <polyline points="12 10 12 13 14 13"></polyline>
                                <line x1="7" y1="4" x2="4.25" y2="6"></line>
                                <line x1="17" y1="4" x2="19.75" y2="6"></line>
                            </svg>
                            <p class="ml-2">7 Sept, 23:00</p>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="(card, idx) in cardsTwo" v-bind:key="idx" class="w-full h-64 flex flex-col justify-between rounded-lg border mb-6 py-5 px-4" v-bind:class="[card.theme, card.border]">
                    <div>
                        <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
                        <p class="text-gray-800 text-sm">Our interior design experts work with you to create the space that you have been dreaming about.</p>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-gray-800">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded">
                <div class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="mb-3 flex items-center">
                            <div class="p-1 bg-gray-800 dark:bg-gray-100 rounded-full text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 flex flex-col justify-between bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="mb-3 flex items-center flex-no-wrap">
                            <div class="w-6 h-6 bg-cover bg-center rounded-md">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                            <div class="w-6 h-6 bg-cover rounded-md -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                            <div class="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt="" class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 flex flex-col justify-between bg-red-300 rounded-lg border border-red-300 mb-6 py-5 px-4">
                    <div>
                        <h3 class="text-gray-800 leading-7 font-semibold w-11/12">What does success as a UX designer look like and how to get there systematically</h3>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-gray-800">
                            <p class="text-sm">March 28, 2020</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "13 things to work on",
                    desc: "Our interior design experts work with you to create the space that you have been dreaming about. ",
                    date: "March 28, 2020",
                },
                {
                    title: "13 things to work on",
                    desc: "Our interior design experts work with you to create the space that you have been dreaming about. ",
                    date: "March 28, 2020",
                    theme: "bg-pink-300",
                    border: "border-pink-300",
                },
            ],
            cardsTwo: [
                {
                    title: "13 things to work on",
                    desc: "Our interior design experts work with you to create the space that you have been dreaming about. ",
                    date: "March 28, 2020",
                    border: "border-gray-300 dark:border-gray-700",
                    theme: "bg-gray-300 dark:bg-gray-700",
                },
                {
                    title: "13 things to work on",
                    desc: "Our interior design experts work with you to create the space that you have been dreaming about. ",
                    date: "March 28, 2020",
                    theme: "bg-yellow-400",
                    border: "border-yellow-400",
                },
            ],
        };
    },
};
</script>

<style scoped>
body {
    font-family: "Lato", sans-serif;
}
</style>
