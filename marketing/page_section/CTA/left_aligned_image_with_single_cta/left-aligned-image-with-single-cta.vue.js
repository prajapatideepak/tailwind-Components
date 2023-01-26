<template>
    <section class="max-w-8xl mx-auto container pt-16 bg-white">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 px-4 md:px-2 lg:px-12 py-10 flex items-center">
                <img class="rounded" v-bind:src="image" alt="" />
            </div>
            <div class="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
                <div class="pl-4">
                    <h3 class="text-xl xl:text-4xl font-bold lg:leading-tight text-gray-800">Beautiful Hand Crafted Library for busy devs</h3>
                    <p class="text-base xl:text-xl text-gray-600 xl:leading-normal pt-4">Icons are designed to work best with CSS components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.</p>
                    <button class="my-4 lg:my-8 lg:mb-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none rounded text-white py-2 px-4 xl:px-8 xl:py-4 text-base xl:text-xl">Get Started</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LeftCTA",
    data() {
        return {
            image: "https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3367&q=80",
        };
    },
};
</script>
