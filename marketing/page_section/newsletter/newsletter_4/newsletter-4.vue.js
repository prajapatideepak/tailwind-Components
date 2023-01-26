<template>
    <body style="overflow: hidden">
        <div class="grid place-content-center">
            <div class="relative bg-indigo-700 border rounded-md my-12 mx-4 overflow-hidden">
                <div class="z-0 absolute bottom-0 right-0">
                    <img src="https://i.ibb.co/pzpth1G/Vector-1-1.png" />
                </div>
                <div class="z-0 absolute bottom-0 left-0">
                    <img src="https://i.ibb.co/W3HTXFv/Vector-1.png" />
                </div>
                <div class="relative z-20 text-white mx-8 md:mx-12 py-12 text-center">
                    <h1 class="font-bold text-2xl md:text-4xl lg:text-5xl">Get Notified by Signing Up</h1>
                    <p class="pt-8">Sign up for our newsletter and get weekly updates. We only send emails about our latest products on the market once a week every Friday.</p>
                    <div class="mt-8 place-items-center flex flex-col justify-center lg:flex-row lg:gap-8">
                        <input type="email" placeholder="Your Email" class="w-full md:w-3/4 lg:w-auto bg-transparent placeholder-white p-4 grid place-items-center border rounded-md focus:outline-none" />
                        <button class="mt-4 lg:mt-0 w-full md:w-3/4 lg:w-auto bg-white text-gray-900 py-4 px-8 border rounded-md hover:bg-gray-200 grid place-items-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-semibold">Subscribe</button>
                    </div>
                    <div class="grid place-items-center mt-8 md:flex justify-center md:gap-8">
                        <div class="flex justify-start gap-2">
                            <div class="grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <p>End to end encrypted</p>
                        </div>
                        <div class="lg:mt-0 flex justify-start gap-2">
                            <div class="grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <p>10% Signin Discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {            
        }
    },
    methods: {        
    },
    mounted() {}
};
</script>

<style scoped>

</style>
