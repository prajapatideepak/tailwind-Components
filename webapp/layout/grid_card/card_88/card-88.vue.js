<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex justify-center py-12 px-6">
            <div class="max-w-sm rounded bg-white dark:bg-gray-800 shadow sm:py-8 py-4 sm:px-6 px-4">
                <div class="flex items-center">
                    <p class="text-lg font-semibold leading-4 text-gray-800 dark:text-gray-100 sm:pr-44 pr-28">Transactions</p>
                    <div class="cursor-pointer relative">
                        <svg @click="toggle" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical text-gray-500 dark:text-gray-400" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                            <circle cx="12" cy="5" r="1" />
                        </svg>
                        <ul v-if="active" class="-ml-10 mt-1 bg-gray-200 rounded shadow-xl absolute">
                            <li @click="toggle" class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                            <li @click="toggle" class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal">Add</li>
                            <li @click="toggle" class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                        </ul>
                    </div>
                </div>
                <div class="pt-9">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.6666 0.666504H3.33325C1.91659 0.666504 0.833252 1.74984 0.833252 3.1665V8.1665C0.833252 13.2498 4.91658 17.3332 9.99992 17.3332C15.0833 17.3332 19.1666 13.2498 19.1666 8.1665V3.1665C19.1666 1.74984 18.0833 0.666504 16.6666 0.666504ZM17.4999 8.1665C17.4999 12.3332 14.1666 15.6665 9.99992 15.6665C5.83325 15.6665 2.49992 12.3332 2.49992 8.1665V3.1665C2.49992 2.6665 2.83325 2.33317 3.33325 2.33317H16.6666C17.1666 2.33317 17.4999 2.6665 17.4999 3.1665V8.1665ZM13.9166 7.9165C14.2499 7.58317 14.2499 7.08317 13.9166 6.74984C13.5833 6.4165 13.0833 6.4165 12.7499 6.74984L9.99992 9.49984L7.24992 6.74984C6.91658 6.4165 6.41658 6.4165 6.08325 6.74984C5.74992 7.08317 5.74992 7.58317 6.08325 7.9165L9.41658 11.2498C9.58325 11.4165 9.74992 11.4998 9.99992 11.4998C10.2499 11.4998 10.4166 11.4165 10.5833 11.2498L13.9166 7.9165Z"
                                        fill="#1D4ED8"
                                    />
                                </svg>
                            </div>
                            <div class="pl-2">
                                <p class="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Wallet</p>
                                <p class="text-xs leading-3 pt-3 text-gray-500 dark:text-gray-400">Starbucks</p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold leading-none text-right text-red-600 dark:text-red-400">- $74</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.25 6.41667L8.08333 15.5833C7.91667 15.75 7.75 15.8333 7.5 15.8333C7.25 15.8333 7.08333 15.75 6.91667 15.5833L2.75 11.4167C2.41667 11.0833 2.41667 10.5833 2.75 10.25C3.08333 9.91667 3.58333 9.91667 3.91667 10.25L7.5 13.8333L16.0833 5.25C16.4167 4.91667 16.9167 4.91667 17.25 5.25C17.5833 5.58333 17.5833 6.08333 17.25 6.41667Z" fill="#047857" />
                                </svg>
                            </div>
                            <div class="pl-2">
                                <p class="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Bank Transfer</p>
                                <p class="text-xs leading-3 pt-3 text-gray-500 dark:text-gray-400">Add Money</p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold leading-none text-right text-green-700 dark:text-green-400">+ $480</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.0834 9.16667H10.8334V5H14.1667C14.6667 5 15.0001 4.66667 15.0001 4.16667C15.0001 3.66667 14.6667 3.33333 14.1667 3.33333H10.8334V0.833333C10.8334 0.333333 10.5001 0 10.0001 0C9.50008 0 9.16675 0.333333 9.16675 0.833333V3.33333H7.91675C5.83341 3.33333 4.16675 5 4.16675 7.08333C4.16675 9.16667 5.83341 10.8333 7.91675 10.8333H9.16675V15H5.00008C4.50008 15 4.16675 15.3333 4.16675 15.8333C4.16675 16.3333 4.50008 16.6667 5.00008 16.6667H9.16675V19.1667C9.16675 19.6667 9.50008 20 10.0001 20C10.5001 20 10.8334 19.6667 10.8334 19.1667V16.6667H12.0834C14.1667 16.6667 15.8334 15 15.8334 12.9167C15.8334 10.8333 14.1667 9.16667 12.0834 9.16667ZM7.91675 9.16667C6.75008 9.16667 5.83341 8.25 5.83341 7.08333C5.83341 5.91667 6.75008 5 7.91675 5H9.16675V9.16667H7.91675ZM10.8334 15H12.0834C13.2501 15 14.1667 14.0833 14.1667 12.9167C14.1667 11.75 13.2501 10.8333 12.0834 10.8333H10.8334V15Z"
                                        fill="#DC2626"
                                    />
                                </svg>
                            </div>
                            <div class="pl-2">
                                <p class="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Pay Pal</p>
                                <p class="text-xs leading-3 pt-3 text-gray-500 dark:text-gray-400">Add Money</p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold leading-none text-right text-green-700 dark:text-green-400">+ $580</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 2.5H2.5C1.08333 2.5 0 3.58333 0 5V15C0 16.4167 1.08333 17.5 2.5 17.5H17.5C18.9167 17.5 20 16.4167 20 15V5C20 3.58333 18.9167 2.5 17.5 2.5ZM2.5 4.16667H17.5C18 4.16667 18.3333 4.5 18.3333 5V7.5H1.66667V5C1.66667 4.5 2 4.16667 2.5 4.16667ZM2.5 15.8333H17.5C18 15.8333 18.3333 15.5 18.3333 15V9.16667H1.66667V15C1.66667 15.5 2 15.8333 2.5 15.8333Z" fill="#6D28D9" />
                                </svg>
                            </div>
                            <div class="pl-2">
                                <p class="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Master Card</p>
                                <p class="text-xs leading-3 pt-3 text-gray-500 dark:text-gray-400">Ordered Food</p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold leading-none text-right text-red-600 dark:text-red-600">- $23</p>
                    </div>
                    <div class="flex items-center justify-between pt-5">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-pink-100 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M20 4.99984V9.99984C20 10.4998 19.6667 10.8332 19.1667 10.8332C18.6667 10.8332 18.3333 10.4998 18.3333 9.99984V6.99984L11.8333 13.4998C11.5 13.8332 11 13.8332 10.6667 13.4998L7.08333 9.9165L1.41667 15.5832C1.25 15.7498 1.08333 15.8332 0.833333 15.8332C0.583333 15.8332 0.416667 15.7498 0.25 15.5832C-0.0833333 15.2498 -0.0833333 14.7498 0.25 14.4165L6.5 8.1665C6.83333 7.83317 7.33333 7.83317 7.66667 8.1665L11.25 11.7498L17.1667 5.83317H14.1667C13.6667 5.83317 13.3333 5.49984 13.3333 4.99984C13.3333 4.49984 13.6667 4.1665 14.1667 4.1665H19.1667C19.25 4.1665 19.4167 4.1665 19.5 4.24984C19.6667 4.33317 19.8333 4.49984 19.9167 4.6665C20 4.74984 20 4.9165 20 4.99984Z"
                                        fill="#A21CAF"
                                    />
                                </svg>
                            </div>
                            <div class="pl-2">
                                <p class="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Transfer</p>
                                <p class="text-xs leading-3 pt-3 text-gray-500 dark:text-gray-400">Refund</p>
                            </div>
                        </div>
                        <p class="text-sm font-semibold leading-none text-right text-green-700 dark:text-green-400">+ $98</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            active: false,
        };
    },
    mounted() {},
    methods: {
        toggle() {
            this.active = !this.active;
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
