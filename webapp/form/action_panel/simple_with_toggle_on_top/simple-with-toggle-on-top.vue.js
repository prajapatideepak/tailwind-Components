<template>
    <div class="py-6 w-full h-full bg-gray-200">
        <div class="container mx-auto">
            <!-- Card code block starts -->
            <dh-component>
                <div class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md">
                    <div class="lg:flex justify-between items-center">
                        <p class="text-lg text-gray-800 font-semibold">Automatically Update My Subscription</p>
                        <div class="lg:mt-0 mt-4">
                            <div class="w-12 h-6 cursor-pointer rounded-full relative shadow-sm">
                                <input type="checkbox" name="toggle" id="toggle1" class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                                <label for="toggle1" class="toggle-label block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 pb-4 font-normal mt-3">Subscription will be updated automatically as long as you don't want to change this option. Are you sure you want this?</p>
                </div>
            </dh-component>
            <!-- Card code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithToggleOnTop",
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
