<template>
    <div class="h-full w-full bg-gray-100 py-16">
        <div class="container mx-auto flex justify-center">
            <div class="md:w-1/4 w-11/12 mx-auto">
                <div class="flex justify-between">
                    <div class="flex flex-col items-center">
                        <div class="h-64 w-1 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" class="h-56 w-1 rounded bg-indigo-700"></div>
                        </div>
                        <p class="text-sm text-gray-600">Ideation</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="h-64 w-1 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" class="h-48 w-1 rounded bg-indigo-700"></div>
                        </div>
                        <p class="text-sm text-gray-600">UX</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="h-64 w-1 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" class="h-24 w-1 rounded bg-indigo-700"></div>
                        </div>
                        <p class="text-sm text-gray-600">UI</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="h-64 w-1 bg-gray-200 rounded flex items-end">
                            <div aria-orientation="vertical" class="h-32 w-1 rounded bg-indigo-700"></div>
                        </div>
                        <p class="text-sm text-gray-600">Testing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThinVerticalGrouped",
};
</script>
