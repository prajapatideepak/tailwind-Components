<template>
    <body class="h-screen relative" style="height: 500px">
        <div class="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full">
            <div class="md:px-20 px-4 py-8">
                <div class="flex items-center justify-between">
                    <div>
                        <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.539773 3.63636H4.91477V15H8.80682V3.63636H13.1818V0.454545H0.539773V3.63636ZM16.2802 15.1705C17.7006 15.1705 18.7731 14.6875 19.4336 13.4659H19.5188V15H23.1836V7.52841C23.1836 5.51136 21.2731 3.94886 18.1552 3.94886C14.8952 3.94886 13.2901 5.65341 13.1552 7.64205H16.7631C16.8555 6.96733 17.3526 6.64773 18.0984 6.64773C18.7802 6.64773 19.2631 6.96023 19.2631 7.52841V7.55682C19.2631 8.18892 18.5671 8.38778 16.7347 8.52273C14.4833 8.68608 12.729 9.59517 12.729 11.9886C12.729 14.1619 14.1921 15.1705 16.2802 15.1705ZM17.5586 12.6989C16.891 12.6989 16.4222 12.3722 16.4222 11.7614C16.4222 11.2003 16.82 10.767 17.729 10.625C18.354 10.5256 18.8796 10.3977 19.2915 10.2273V11.1364C19.2915 12.1307 18.4464 12.6989 17.5586 12.6989ZM28.9773 8.86364C28.9844 7.78409 29.5952 7.13068 30.5682 7.13068C31.5554 7.13068 32.1378 7.78409 32.1307 8.86364V15H36.0511V8.03977C36.0582 5.66761 34.5597 3.94886 32.2443 3.94886C30.6392 3.94886 29.3679 4.78693 28.892 6.16477H28.7784V4.09091H25.0568V15H28.9773V8.86364ZM37.9865 15H41.907V11.9034L42.4964 11.1577L44.7195 15H49.2081L45.3871 8.87074L49.0945 4.09091H44.6911L42.049 7.75568H41.907V0.454545H37.9865V15ZM57.8995 5H61.6779C61.6637 2.14489 59.462 0.255681 55.9393 0.255681C52.4805 0.255681 50.0373 2.11648 50.0586 4.88636C50.0515 7.15909 51.6282 8.4233 54.2063 8.97727L55.6552 9.28977C57.2745 9.64489 57.8285 10.0497 57.8427 10.7102C57.8285 11.4276 57.1751 11.9318 55.9109 11.9318C54.3981 11.9318 53.5032 11.2216 53.4393 9.88636H49.6893C49.7035 13.5369 52.1751 15.1705 55.9677 15.1705C59.6538 15.1705 61.8626 13.5795 61.8768 10.7102C61.8626 8.49432 60.5415 6.93892 57.3313 6.25L56.1381 5.99432C54.7603 5.70312 54.1424 5.2983 54.1779 4.60227C54.185 3.96307 54.7177 3.49432 55.9393 3.49432C57.2177 3.49432 57.8214 4.0554 57.8995 5ZM67.3562 8.86364C67.3633 7.78409 67.9883 7.13068 68.9471 7.13068C69.9485 7.13068 70.5167 7.78409 70.5096 8.86364V15H74.43V8.03977C74.4371 5.65341 72.9315 3.94886 70.6232 3.94886C69.011 3.94886 67.8178 4.77273 67.3278 6.16477H67.2141V0.454545H63.4357V15H67.3562V8.86364ZM81.6211 15.1989C85.1722 15.1989 87.2745 12.9261 87.2745 9.57386C87.2745 6.22159 85.1722 3.94886 81.6211 3.94886C78.07 3.94886 75.9677 6.22159 75.9677 9.57386C75.9677 12.9261 78.07 15.1989 81.6211 15.1989ZM81.6495 12.3011C80.5984 12.3011 79.9734 11.2571 79.9734 9.54545C79.9734 7.83381 80.5984 6.78977 81.6495 6.78977C82.6438 6.78977 83.2688 7.83381 83.2688 9.54545C83.2688 11.2571 82.6438 12.3011 81.6495 12.3011ZM95.3711 4.09091H93.4961V1.47727H89.5756V4.09091H88.1836V6.93182H89.5756V11.8608C89.5472 14.1477 90.9606 15.3054 93.6665 15.1562C94.5543 15.1065 95.2148 14.9219 95.57 14.8153L95.0018 12.0597C94.8526 12.0952 94.4691 12.1733 94.2347 12.1733C93.7234 12.1733 93.4961 11.946 93.4961 11.4915V6.93182H95.3711V4.09091Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div class="hidden lg:flex items-center">
                        <p tabindex="0" role="button" class="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white">Home</p>
                        <p tabindex="0" role="button" class="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">About</p>
                        <p tabindex="0" role="button" class="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">Pages</p>
                        <p tabindex="0" role="button" class="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">Doc</p>
                        <p tabindex="0" role="button" class="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">Contact</p>
                        <button class="text-base font-medium leading-none text-indigo-700 py-4 px-5 bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-gray-300">Get it now</button>
                    </div>
                    <div class="lg:hidden text-white">
                        <svg id="open" @click="menu = true" v-if="!menu" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <line x1="4" y1="8" x2="20" y2="8"></line>
                            <line x1="4" y1="16" x2="20" y2="16"></line>
                        </svg>
                        <div id="close" v-if="menu" class="close-m-menu" @click="menu = false">
                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                </div>
                <nav class="lg:hidden relative z-40">
                    <div class="w-full">
                        <div class="visible flex items-center">
                            <ul id="list" v-if="menu" class="p-2 bg-white absolute rounded top-0 left-0 right-0 shadow mt-6">
                                <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span class="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="menu = false">
                                    <a href="javascript:void(0)">
                                        <span class="ml-2 font-bold">About</span>
                                    </a>
                                </li>
                                <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span class="ml-2 font-bold">Page</span>
                                    </a>
                                </li>
                                <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="menu = false">
                                    <a href="javascript:void(0)">
                                        <span class="ml-2 font-bold">Doc</span>
                                    </a>
                                </li>
                                <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="menu = false">
                                    <a href="javascript:void(0)">
                                        <span class="ml-2 font-bold">Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="w-full flex items-center justify-center my-12">
                <div class="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                    <div class="md:flex items-center mt-12">
                        <div class="md:w-72 flex flex-col">
                            <label class="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabindex="0" arial-label="Please input name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabindex="0" arial-label="Please input email address" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="md:w-72 flex flex-col">
                            <label class="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input tabindex="0" role="input" arial-label="Please input company name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input company name" />
                        </div>
                        <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input tabindex="0" arial-label="Please input country name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"></textarea>
                        </div>
                    </div>
                    <p class="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            menu: false,
        };
    },
    methods: {},
};
</script>
