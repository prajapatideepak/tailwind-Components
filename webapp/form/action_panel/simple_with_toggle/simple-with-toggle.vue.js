<template>
    <div class="py-6 w-full h-full bg-gray-200">
        <div class="container mx-auto">
            <div class="py-6 w-full h-full bg-gray-200">
                <div class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md">
                    <p class="text-lg text-gray-800 font-semibold pb-3">Automatically Update My Subscription</p>
                    <p class="text-sm text-gray-600 pb-3 font-normal">You can cancel the subscription at any time However, when the license subscription will be cancelled, you will no longer be able to receive emails or updates.</p>
                    <div class="w-12 h-6 cursor-pointer rounded-full relative shadow-sm">
                        <input type="checkbox" name="toggle" id="toggle1" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                        <label for="toggle1" class="toggle-label bg-gray-300 block w-12 h-6 overflow-hidden rounded-full cursor-pointer"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithToggle",
};
</script>

<style>
.checkbox:checked {
    /* Apply class right-0*/
    right: 0;
}
.checkbox:checked + .toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>
