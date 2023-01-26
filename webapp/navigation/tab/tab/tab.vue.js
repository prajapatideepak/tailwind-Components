<template>
    <div class="mx-auto container py-8 px-4 flex items-center justify-center w-full">
        <div class="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
            <a href="javascript:void(0)">
                <div class="py-2 px-4 bg-indigo-100 ease-in duration-150 rounded">
                    <p class="text-xs xl:text-sm leading-none text-center text-indigo-700">Timeline</p>
                </div>
            </a>
            <a href="javascript:void(0)">
                <div class="py-2 px-4 ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded">
                    <p class="text-xs xl:text-sm leading-none text-gray-600">Speakers</p>
                </div>
            </a>
            <a href="javascript:void(0)">
                <div class="py-2 px-4 ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded">
                    <p class="text-xs xl:text-sm leading-none text-gray-600">Sponsors</p>
                </div>
            </a>
            <a href="javascript:void(0)">
                <div class="py-2 px-4 ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded">
                    <p class="text-xs xl:text-sm leading-none text-gray-600">Additional Information</p>
                </div>
            </a>
        </div>
        <div class="flex w-full text-xs justify-between md:hidden my-10 items-center border-b border-gray-200">
            <p class="text-indigo-700 border-b-2 border-indigo-700 text-xs"><a href="javascript:void(0)">Timeline</a></p>
            <p class="text-gray-600 text-xs"><a href="javascript:void(0)">Speakers</a></p>
            <p class="text-gray-600 text-xs"><a href="javascript:void(0)">Sponsors</a></p>
            <p class="text-gray-600 text-xs"><a href="javascript:void(0)">Additional Information</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>
