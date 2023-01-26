<template>
    <div class="py-6 w-full h-full bg-gray-200">
        <div class="container mx-auto">
            <!-- Card code block starts -->
            <dh-component>
                <div class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md">
                    <p class="text-lg text-gray-800 font-semibold pb-3">Manage Your Subscription</p>
                    <p class="text-sm text-gray-600 pb-3 font-normal">Enter your email address to receive a link to manage your subscription.</p>
                    <div class="flex justify-end">
                        <button class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-2 text-xs">Manage Plan</button>
                    </div>
                </div>
            </dh-component>
            <!-- Card code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithRightAlignedButton",
};
</script>
