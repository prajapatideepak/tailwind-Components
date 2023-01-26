<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex justify-center py-12 sm:px-6 px-4">
            <div class="max-w-2xl rounded shadow bg-white dark:bg-gray-800 py-6 pl-6 pr-12">
                <div class="flex items-center">
                    <p class="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">Statistics</p>
                    <p class="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400">Updated 1 month ago</p>
                </div>
                <div class="md:flex items-center justify-between pt-8">
                    <div class="flex items-center">
                        <div class="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z" fill="#6D28D9"></path>
                            </svg>
                        </div>
                        <div class="pl-4">
                            <p class="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">230k</p>
                            <p class="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Sales</p>
                        </div>
                    </div>
                    <div class="flex items-center md:pt-0 pt-4 md:pl-10">
                        <div class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.71688 7C7.71688 4.2 9.91344 2 12.7091 2C15.5047 2 17.7012 4.2 17.7012 7C17.7012 9.8 15.5047 12 12.7091 12C9.91344 12 7.71688 9.8 7.71688 7ZM21.695 19V21C21.695 21.6 21.2956 22 20.6965 22C20.0975 22 19.6981 21.6 19.6981 21V19C19.6981 17.3 18.4001 16 16.7028 16H8.71532C7.01798 16 5.72001 17.3 5.72001 19V21C5.72001 21.6 5.32064 22 4.72158 22C4.12252 22 3.72314 21.6 3.72314 21V19C3.72314 16.2 5.9197 14 8.71532 14H16.7028C19.4984 14 21.695 16.2 21.695 19ZM12.7091 10C11.0117 10 9.71375 8.7 9.71375 7C9.71375 5.3 11.0117 4 12.7091 4C14.4064 4 15.7044 5.3 15.7044 7C15.7044 8.7 14.4064 10 12.7091 10Z"
                                    fill="#1D4ED8"
                                ></path>
                            </svg>
                        </div>
                        <div class="pl-4">
                            <p class="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">8.549k</p>
                            <p class="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Customers</p>
                        </div>
                    </div>
                    <div class="flex items-center md:pt-0 pt-4 md:pl-10">
                        <div class="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.7297 0.599805L21.7172 4.5998C22.8155 5.0998 23.4145 6.0998 23.4145 7.1998V16.6998C23.4145 17.8998 22.7156 18.8998 21.7172 19.3998L13.7297 23.3998C13.3303 23.5998 12.931 23.6998 12.4318 23.6998C12.0324 23.6998 11.5332 23.5998 11.1338 23.3998L3.14631 19.3998C2.04804 18.8998 1.44897 17.7998 1.44897 16.6998V7.1998C1.44897 6.0998 2.04804 5.0998 3.04647 4.5998L11.0339 0.599805C11.9325 0.199805 12.931 0.199805 13.7297 0.599805ZM12.4302 2.1998C12.3303 2.1998 12.1307 2.1998 12.0308 2.2998L4.6424 5.9998L12.4302 9.89981L20.218 5.9998L12.8296 2.2998C12.7297 2.1998 12.6299 2.1998 12.4302 2.1998ZM3.9435 17.6998C3.64397 17.4998 3.44428 17.0998 3.44428 16.7998V7.5998L11.4318 11.5998V21.3998L3.9435 17.6998ZM13.4286 21.3998L20.817 17.6998C21.2164 17.4998 21.4161 17.1998 21.4161 16.7998V7.5998L13.4286 11.5998V21.3998Z"
                                    fill="#DC2626"
                                ></path>
                            </svg>
                        </div>
                        <div class="pl-4">
                            <p class="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">1.423k</p>
                            <p class="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Products</p>
                        </div>
                    </div>
                    <div class="flex items-center md:pt-0 pt-4 md:pl-10">
                        <div class="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.6529 11H13.1552V6H17.1489C17.748 6 18.1474 5.6 18.1474 5C18.1474 4.4 17.748 4 17.1489 4H13.1552V1C13.1552 0.4 12.7558 0 12.1568 0C11.5577 0 11.1583 0.4 11.1583 1V4H9.66068C7.16459 4 5.16772 6 5.16772 8.5C5.16772 11 7.16459 13 9.66068 13H11.1583V18H6.16616C5.5671 18 5.16772 18.4 5.16772 19C5.16772 19.6 5.5671 20 6.16616 20H11.1583V23C11.1583 23.6 11.5577 24 12.1568 24C12.7558 24 13.1552 23.6 13.1552 23V20H14.6529C17.1489 20 19.1458 18 19.1458 15.5C19.1458 13 17.1489 11 14.6529 11ZM9.66068 11C8.26287 11 7.16459 9.9 7.16459 8.5C7.16459 7.1 8.26287 6 9.66068 6H11.1583V11H9.66068ZM13.1552 18H14.6529C16.0507 18 17.1489 16.9 17.1489 15.5C17.1489 14.1 16.0507 13 14.6529 13H13.1552V18Z"
                                    fill="#047857"
                                ></path>
                            </svg>
                        </div>
                        <div class="pl-4">
                            <p class="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">$9745</p>
                            <p class="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
