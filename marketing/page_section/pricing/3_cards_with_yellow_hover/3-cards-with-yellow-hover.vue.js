<template>
    <section class="px-6 xl:px-0">
        <div class="mt-52 mx-auto container">
            <div class="flex flex-col lg:items-center justify-center w-full">
                <h1 class="font-semibold text-gray-800 text-3xl md:text-4xl">The Right Plan for your business</h1>
                <p class="mt-2.5 lg:w-1/2 lg:text-center text-2xl text-gray-800">We have several plans to showcase your Business. Get everything you need</p>
            </div>
            <div class="flex items-center justify-center w-full">
                <div class="pt-14">
                    <div class="container mx-auto">
                        <div class="xl:w-4/5 w-11/12 mx-auto mb-28">
                            <div class="flex justify-center items-center" role="button">
                                <p id="monthly" class="mr-3 text-lg text-gray-600 font-bold">Bill Monthly</p>
                                <div class="cursor-pointer w-12 h-6 rounded-full relative shadow-sm">
                                    <input type="checkbox" name="toggle" id="toggle2" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-indigo-700 transition duration-150 ease-in-out absolute m-1 shadow-sm appearance-none cursor-pointer" @click="toggle()" />
                                    <label for="toggle2" class="toggle-label block w-12 h-6 overflow-hidden rounded-full border border-indigo-700 cursor-pointer"></label>
                                </div>
                                <p id="yearly" class="ml-3 text-lg font-normal text-gray-800">Bill Anually</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                            <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                <div class="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                                    <h4 class="text-2xl text-indigo-700 font-semibold pb-8">Basic</h4>
                                    <ul class="flex flex-col mb-6">
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">24/7 access</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Order labs + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="opacity-0 mr-4" alt="check-mark" />
                                            <p class="text-gray-400 text-base font-normal">Radiology tests + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="opacity-0 mr-4" alt="check-mark" />
                                            <p class="text-gray-400 text-base font-normal">Partnership + Discounts</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="opacity-0 mr-4" alt="check-mark" />
                                            <p class="text-gray-400 text-base font-normal">Direct doctor phone number</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="opacity-0 mr-4" alt="check-mark" />
                                            <p class="text-gray-400 text-base font-normal">Specialists appoinments</p>
                                        </li>
                                    </ul>
                                    <p class="text-base text-indigo-700 relative pl-3">
                                        <span class="font-light text-lg">$</span>
                                        <span class="text-2xl font-semibold">20</span>
                                        <span class="font-light text-lg">/month</span>
                                    </p>
                                    <button class="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">Choose</button>
                                </div>
                            </div>
                            <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                <div class="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
                                    <h4 class="text-2xl text-white font-semibold pb-8">Pro</h4>
                                    <ul class="flex flex-col mb-6">
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                                            <p class="text-white text-base font-normal">24/7 access</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                                            <p class="text-white text-base font-normal">Order labs + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                                            <p class="text-white text-base font-normal">Radiology tests + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png" class="mr-4" alt="check-mark" />
                                            <p class="text-white text-base font-normal">Partnership + Discounts</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4 opacity-0" alt="check-mark" />
                                            <p class="text-indigo-700 text-base font-normal">Direct doctor phone number</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4 opacity-0" alt="check-mark" />
                                            <p class="text-indigo-700 text-base font-normal">Specialists appoinments</p>
                                        </li>
                                    </ul>
                                    <p class="text-base text-white relative pl-3">
                                        <span class="font-light text-lg">$</span>
                                        <span class="text-2xl font-semibold">100</span>
                                        <span class="font-light text-lg">/month</span>
                                    </p>
                                    <button class="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">Try</button>
                                </div>
                            </div>
                            <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                                <div class="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                                    <h4 class="text-2xl text-indigo-700 font-semibold pb-8">Enterprise</h4>
                                    <ul class="flex flex-col mb-6">
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">24/7 access</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Order labs + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Radiology tests + Results</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Partnership + Discounts</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Direct doctor phone number</p>
                                        </li>
                                        <li class="flex items-center mb-2.5">
                                            <img src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png" class="mr-4" alt="check-mark" />
                                            <p class="text-gray-800 text-base font-normal">Specialists appoinments</p>
                                        </li>
                                    </ul>
                                    <p class="text-base text-indigo-700 relative pl-3">
                                        <span class="font-light text-lg">$</span>
                                        <span class="text-2xl font-semibold">200</span>
                                        <span class="font-light text-lg">/month</span>
                                    </p>
                                    <button class="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">Choose</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            optionOne: true,
            optionTwo: false,
        };
    },
    methods: {
        toggle() {
            this.optionOne = !this.optionOne;
            let billMonthly = document.getElementById("monthly");
            let billAnnually = document.getElementById("yearly");

            billMonthly.classList.toggle("font-bold");
            billMonthly.classList.toggle("text-gray-600");
            billMonthly.classList.toggle("text-gray-800");

            billAnnually.classList.toggle("font-bold");
            billAnnually.classList.toggle("text-gray-600");
            billAnnually.classList.toggle("text-gray-800");
        },
    },
};
</script>
<style>
.checkbox:checked {
    right: 0;
    background-color: #4338ca;
}
</style>
