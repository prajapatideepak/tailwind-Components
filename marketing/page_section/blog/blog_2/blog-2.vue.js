<template>
    <body class="2xl:px-20 sm:px-12 sm:px-0 px-4 2xl:mx-auto 2xl:container pb-12">
        <div class="w-full md:flex items-center justify-between md:pt-0 pt-12">
            <div class="md:w-5/12 w-full">
                <h1 role="heading" class="lg:text-6xl text-3xl font-extrabold leading-tight text-gray-800">The best destinations!</h1>
                <p role="contentinfo" class="text-base leading-6 pt-4 text-gray-600">Join us for a trip that you won’t be forgettig anytime soon, a world tour that spans from across your living room to the end of your driveway, because thats what it’s all about.</p>
                <button class="xl:pt-7 pt-4 text-base flex items-center p-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:text-indigo-600 focus:outline-none font-medium leading-4 text-indigo-700">
                    Read more
                    <svg class="ml-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33301 8H12.6663" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.66699 12L12.667 8" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.66699 4L12.667 8" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div class="md:w-1/2 w-full">
                <img src="https://i.ibb.co/DYQx3sr/blogg.png" class="md:w-full w-9/12" alt="hot air ballons" />
            </div>
        </div>
        <div class="pt-16 relative">
            <div class="h-72 w-full bg-gray-100 absolute z-0 mt-4"></div>
            <h2 role="heading" class="text-2xl font-semibold leading-6 text-gray-800 relative z-20">Top Picks</h2>
            <div class="relative z-40 flex w-full sm:flex-row flex-col sm:flex-wrap items-center sm:justify-between justify-center pt-6">
                <div class="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 sm:pb-0 pb-8">
                    <div class="relative w-full">
                        <div class="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Music</div>
                        <img class="w-full" src="https://i.ibb.co/6W2Yvdj/muzik.png" alt="music keyboard" />
                    </div>
                    <p class="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">How playing music every morning can boost your creativity?</p>
                    <div class="flex items-center pt-4">
                        <img class="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                        <p class="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
                    </div>
                </div>
                <div class="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 lg:px-0 px-1">
                    <div class="relative w-full">
                        <div class="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Art</div>
                        <img class="w-full" src="https://i.ibb.co/yVdVvgd/art.png" alt="arts" />
                    </div>
                    <p class="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">10 tips for creating a successful business from your art</p>
                    <div class="flex items-center pt-4">
                        <img class="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                        <p class="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
                    </div>
                </div>
                <div class="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 md:pt-0 pt-8">
                    <div class="relative w-full">
                        <div class="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Photography</div>
                        <img class="w-full" src="https://i.ibb.co/0B96c7y/photograph.png" alt="image of a person" />
                    </div>
                    <p class="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">How can you learn professional photography by only watching videos?</p>
                    <div class="flex items-center pt-4">
                        <img class="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                        <p class="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
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
            menu: true,
            tool: false,
        };
    },
};
</script>
