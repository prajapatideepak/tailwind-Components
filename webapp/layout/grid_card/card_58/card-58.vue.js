<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <div class="bg-white max-w-5xl w-full dark:bg-gray-800 shadow rounded py-6">
                <p class="text-xl px-8 font-semibold leading-tight text-gray-800 dark:text-gray-100">Transaction History</p>
                <div class="w-full mt-6 overflow-x-scroll md:overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="h-4 border-b border-gray-200 text-xs md:text-base font-medium leading-none text-gray-500 dark:text-gray-400">
                                <td class="pl-8 pb-4">Payment</td>
                                <td class="pb-4 pl-12">Order ID</td>
                                <td class="pb-4 pl-9">Date&Time</td>
                                <td class="pb-4 pl-8">Amount</td>
                                <td class="pb-4 pl-12 pr-16">Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-xs md:text-base leading-3 dark:text-gray-100 text-gray-800">
                                <td class="pl-8 pt-6">
                                    <div class="flex items-center">
                                        <div class="flex items-center justify-center p-1 w-8 h-8 bg-green-100 border rounded-sm border-green-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM7.8 14.4H14.4C14.5591 14.4 14.7117 14.3368 14.8243 14.2243C14.9368 14.1117 15 13.9591 15 13.8C15 13.6409 14.9368 13.4883 14.8243 13.3757C14.7117 13.2632 14.5591 13.2 14.4 13.2H9.6C8.80435 13.2 8.04129 12.8839 7.47868 12.3213C6.91607 11.7587 6.6 10.9957 6.6 10.2C6.6 9.40435 6.91607 8.64129 7.47868 8.07868C8.04129 7.51607 8.80435 7.2 9.6 7.2H10.8V4.8H13.2V7.2H16.2V9.6H9.6C9.44087 9.6 9.28826 9.66321 9.17574 9.77574C9.06321 9.88826 9 10.0409 9 10.2C9 10.3591 9.06321 10.5117 9.17574 10.6243C9.28826 10.7368 9.44087 10.8 9.6 10.8H14.4C15.1957 10.8 15.9587 11.1161 16.5213 11.6787C17.0839 12.2413 17.4 13.0044 17.4 13.8C17.4 14.5956 17.0839 15.3587 16.5213 15.9213C15.9587 16.4839 15.1957 16.8 14.4 16.8H13.2V19.2H10.8V16.8H7.8V14.4Z"
                                                    fill="#047857"
                                                />
                                            </svg>
                                        </div>
                                        <p class="pl-3">Amount&nbsp;Recieved</p>
                                    </div>
                                </td>
                                <td class="pt-6 pl-12">ID&nbsp;:&nbsp;1421412P&nbsp;-&nbsp;24SGE2&nbsp;-&nbsp;876TBJK</td>
                                <td class="pt-6 pl-9">28th&nbsp;Feb,&nbsp;2021|&nbsp;03:52&nbsp;a.m</td>
                                <td class="pt-6 pl-8">
                                    <p class="text-xs md:text-base leading-none text-green-700">+ $130</p>
                                </td>
                                <td class="pl-12 pr-16 pt-6">
                                    <div class="flex items-center justify-center w-20 h-5 bg-green-100 rounded-full">
                                        <p class="text-xs font-medium leading-3 text-green-700">completed</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="text-xs md:text-base leading-3 dark:text-gray-100 text-gray-800">
                                <td class="pl-8 pt-9">
                                    <div class="flex items-center">
                                        <div class="flex items-center justify-center p-1 w-8 h-8 bg-yellow-100 border rounded-sm border-yellow-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C9.20219 24.0041 6.49159 23.0265 4.34041 21.2376L4.04761 20.9868L5.13001 18.7044C6.67559 20.2885 8.72103 21.2899 10.9201 21.5392C13.1193 21.7884 15.337 21.2702 17.1979 20.0722C19.0588 18.8742 20.4486 17.07 21.1321 14.9649C21.8155 12.8599 21.7507 10.5834 20.9485 8.52072C20.1463 6.45802 18.6561 4.73584 16.73 3.64568C14.8039 2.55552 12.5603 2.16434 10.379 2.53835C8.19762 2.91237 6.21248 4.0286 4.75958 5.69812C3.30667 7.36763 2.47524 9.48788 2.40601 11.7L2.40001 12H5.40001L2.15281 18.8592C0.747868 16.8481 -0.0037839 14.4532 1.43241e-05 12C1.43241e-05 5.3724 5.37241 0 12 0ZM13.2 4.8V7.2H16.2V9.59999H9.60001C9.45007 9.59972 9.30547 9.65559 9.19467 9.75661C9.08387 9.85762 9.01491 9.99646 9.00136 10.1458C8.98781 10.2951 9.03066 10.4441 9.12147 10.5634C9.21228 10.6827 9.34447 10.7637 9.49201 10.7904L9.60001 10.8H14.4C15.1957 10.8 15.9587 11.1161 16.5213 11.6787C17.0839 12.2413 17.4 13.0043 17.4 13.8C17.4 14.5956 17.0839 15.3587 16.5213 15.9213C15.9587 16.4839 15.1957 16.8 14.4 16.8H13.2V19.2H10.8V16.8H7.80001V14.4H14.4C14.5499 14.4003 14.6945 14.3444 14.8053 14.2434C14.9161 14.1424 14.9851 14.0035 14.9987 13.8542C15.0122 13.7049 14.9694 13.5559 14.8785 13.4366C14.7877 13.3173 14.6555 13.2363 14.508 13.2096L14.4 13.2H9.60001C8.80436 13.2 8.0413 12.8839 7.47869 12.3213C6.91608 11.7587 6.60001 10.9956 6.60001 10.2C6.60001 9.40435 6.91608 8.64128 7.47869 8.07868C8.0413 7.51607 8.80436 7.2 9.60001 7.2H10.8V4.8H13.2Z"
                                                    fill="#B45309"
                                                />
                                            </svg>
                                        </div>
                                        <p class="pl-3">Amount Refund</p>
                                    </div>
                                </td>
                                <td class="pt-9 pl-12">ID : 1421412P - 24SGE2 - 876TBJK</td>
                                <td class="pt-9 pl-9">27th&nbsp;Feb,2021&nbsp;|&nbsp;08:48&nbsp;p.m</td>
                                <td class="pt-9 pl-8">
                                    <p class="text-xs md:text-base leading-none text-green-700">+ $280</p>
                                </td>
                                <td class="pl-12 pr-16 pt-9">
                                    <div class="flex items-center justify-center w-20 h-5 bg-green-100 rounded-full">
                                        <p class="text-xs font-medium leading-3 text-green-700">completed</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="text-xs md:text-base leading-3 dark:text-gray-100 text-gray-800">
                                <td class="pl-8 pt-9">
                                    <div class="flex items-center">
                                        <div class="flex items-center justify-center p-1 w-8 h-8 bg-blue-100 border rounded-sm border-blue-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M8.965 18C8.84612 18.8343 8.43021 19.5977 7.79368 20.1499C7.15714 20.7022 6.34272 21.0063 5.5 21.0063C4.65728 21.0063 3.84286 20.7022 3.20632 20.1499C2.56979 19.5977 2.15388 18.8343 2.035 18H1V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8H20L23 12.056V18H20.965C20.8461 18.8343 20.4302 19.5977 19.7937 20.1499C19.1571 20.7022 18.3427 21.0063 17.5 21.0063C16.6573 21.0063 15.8429 20.7022 15.2063 20.1499C14.5698 19.5977 14.1539 18.8343 14.035 18H8.965ZM15 7H3V15.05C3.39456 14.6472 3.8806 14.3457 4.41675 14.1711C4.9529 13.9966 5.52329 13.9541 6.07938 14.0474C6.63546 14.1407 7.16077 14.3669 7.61061 14.7069C8.06044 15.0469 8.42148 15.4905 8.663 16H14.337C14.505 15.647 14.73 15.326 15 15.05V7ZM17 13H21V12.715L18.992 10H17V13ZM17.5 19C17.898 19 18.2796 18.8419 18.561 18.5605C18.8424 18.2791 19.0005 17.8975 19.0005 17.4995C19.0005 17.1015 18.8424 16.7199 18.561 16.4385C18.2796 16.1571 17.898 15.999 17.5 15.999C17.102 15.999 16.7204 16.1571 16.439 16.4385C16.1576 16.7199 15.9995 17.1015 15.9995 17.4995C15.9995 17.8975 16.1576 18.2791 16.439 18.5605C16.7204 18.8419 17.102 19 17.5 19ZM7 17.5C7 17.303 6.9612 17.108 6.88582 16.926C6.81044 16.744 6.69995 16.5786 6.56066 16.4393C6.42137 16.3001 6.25601 16.1896 6.07403 16.1142C5.89204 16.0388 5.69698 16 5.5 16C5.30302 16 5.10796 16.0388 4.92597 16.1142C4.74399 16.1896 4.57863 16.3001 4.43934 16.4393C4.30005 16.5786 4.18956 16.744 4.11418 16.926C4.0388 17.108 4 17.303 4 17.5C4 17.8978 4.15804 18.2794 4.43934 18.5607C4.72064 18.842 5.10218 19 5.5 19C5.89782 19 6.27936 18.842 6.56066 18.5607C6.84196 18.2794 7 17.8978 7 17.5Z"
                                                    fill="#0369A1"
                                                />
                                            </svg>
                                        </div>
                                        <p class="pl-3">Delivery Fee</p>
                                    </div>
                                </td>
                                <td class="pt-9 pl-12">ID : 1421412P - 24SGE2 - 876TBJK</td>
                                <td class="pt-9 pl-9">26th Feb, 2021 | 02:10 p.m</td>
                                <td class="pt-9 pl-8">
                                    <p class="text-xs md:text-base leading-none text-red-600">- $50</p>
                                </td>
                                <td class="pl-12 pr-16 pt-9">
                                    <div class="flex items-center justify-center w-20 h-5 bg-yellow-100 rounded-full">
                                        <p class="text-xs font-medium leading-3 text-yellow-700">ready</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="text-xs md:text-base leading-3 dark:text-gray-100 text-gray-800">
                                <td class="pl-8 pt-9">
                                    <div class="flex items-center">
                                        <div class="flex items-center justify-center p-1 w-8 h-8 bg-red-200 border rounded-sm border-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="#B91C1C" />
                                            </svg>
                                        </div>
                                        <p class="pl-3">Cancellation&nbsp;Refund</p>
                                    </div>
                                </td>
                                <td class="pt-9 pl-12">ID : 1421412P - 24SGE2 - 876TBJK</td>
                                <td class="pt-9 pl-9">26th&nbsp;Feb,&nbsp;2021&nbsp;|&nbsp;02:10&nbsp;p.m</td>
                                <td class="pt-9 pl-8">
                                    <p class="text-xs md:text-base leading-none text-red-600">- $95</p>
                                </td>
                                <td class="pl-12 pr-16 pt-9">
                                    <div class="flex items-center justify-center w-20 h-5 bg-red-100 rounded-full">
                                        <p class="text-xs font-medium leading-3 text-red-700">refund</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
