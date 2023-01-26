<template>
    <div class="h-full w-full bg-gray-100 py-16">
        <div class="container mx-auto">
            <div class="w-11/12 lg:w-2/6 mx-auto">
                <div class="flex justify-between items-center pb-2 flex-col">
                    <p class="text-xs text-indigo-700 font-bold">63% Complete</p>
                    <p class="text-xs font-bold text-gray-800">Please wait while your transaction is processed</p>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 bg-indigo-700 h-1 rounded-tl rounded-bl mr-1"></div>
                    <div class="w-1/3 bg-gray-200 h-1 mr-1 relative">
                        <div class="h-1 w-1/6 bg-indigo-700"></div>
                    </div>
                    <div class="w-1/3 bg-gray-200 h-1 rounded-tr rounded-br"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThinWithSubText",
};
</script>
