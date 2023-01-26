<template>
    <body class="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div class="lg:flex items-center justify-between">
            <div class="lg:w-1/2 w-full">
                <p class="text-base leading-4 text-gray-600">Choose your plan</p>
                <h1 role="heading" class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">Our pricing plan</h1>
                <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-600">We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think</p>
                <div class="w-56">
                    <div class="bg-gray-100 shadow rounded-full flex items-center mt-10">
                        <button @click="toggle = true" :class="toggle === true ? 'bg-indigo-700 text-white' : 'text-gray-600'" class="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-6 mr-1" id="monthly">Monthly</button>
                        <button @click="toggle = false" :class="toggle === false ? 'bg-indigo-700 text-white' : 'text-gray-600'" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">Annually</button>
                    </div>
                </div>
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" />
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">Starter</h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">FREE</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                    <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div class="w-full p-8">
                        <div class="md:flex items-center justify-between">
                            <h2 class="text-2xl font-semibold leading-6 text-gray-800">Personal</h2>
                            <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">$18<span class="font-normal text-base">/mo</span></p>
                        </div>
                        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                    </div>
                </div>
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">Team</h2>
                        <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">$18<span class="font-normal text-base">/mo</span></p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import Velocity from "velocity-animate";

export default {
    name: "MyComponent",
    data() {
        return {
            toggle: false,
        };
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0;
            el.style.transformOrigin = "left";
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 900 });
            Velocity(el, { fontSize: "1em" }, { complete: done });
        },
    },
};
</script>

<style scoped>
.top-100 {
    animation: slideDown 0.5s ease-in-out;
}
</style>
