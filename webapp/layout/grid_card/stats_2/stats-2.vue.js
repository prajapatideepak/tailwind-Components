<template>
    <div class="mx-auto dark:bg-gray-900 container flex items-center justify-center h-full w-full py-8 px-4">
        <div class="xl:w-1/4 md:w-1/2 w-full bg-indigo-700 rounded-lg">
            <div class="inline-flex flex-col items-start justify-end px-10 py-6 w-full">
                <div class="xl:block hidden text-xl text-white">
                    <p>Total Invitations</p>
                    <p>Sent</p>
                </div>
                <div class="xl:hidden block text-xl leading-loose text-white">
                    <p>Total Invitations Sent</p>
                </div>
                <p class="text-2xl md:text-4xl text-center mt-2 md:mt-4 text-white">12.6 K</p>
                <div class="flex mt-4 md:mt-8 justify-between w-full items-center">
                    <p class="text-sm 2xl:text-base font-bold leading-normal text-indigo-400">Invitations Pending</p>
                    <p class="text-xl md:text-2xl font-black leading-normal text-right text-white">6.3 K</p>
                </div>
                <div class="flex mt-2 md:mt-4 justify-between w-full items-center">
                    <p class="text-sm 2xl:text-base font-bold leading-normal text-indigo-400">Invitations Accepted</p>
                    <p class="text-xl md:text-2xl font-black leading-normal text-right text-white">4.3 K</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>
