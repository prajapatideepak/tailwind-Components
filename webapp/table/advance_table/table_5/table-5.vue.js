<template>
  <body class="flex items-center justify-center bg-gray-50 px-8 py-16">
    <div class="mx-8 lg:w-11/12 w-full overflow-x-auto">
      <table class="w-full whitespace-nowrap border-gray-100 border rounded-lg">
        <thead class="bg-gray-100">
          <tr class="">
            <th class="text-left py-5 pl-4 rounded-tl-lg">
              <p class="text-sm font-medium leading-none text-gray-900">Date</p>
            </th>
            <th class="text-left py-5">
              <p class="text-sm font-medium leading-none text-gray-900">
                Customer name/number
              </p>
            </th>
            <th class="text-left py-5 pl-5 border-l border-gray-200">
              <p class="text-sm font-medium leading-none text-gray-900">
                Order #
              </p>
            </th>

            <th class="text-left py-5 pr-16">
              <div class="flex items-center">
                <p
                  class="text-sm font-medium pr-0.5 leading-none text-gray-900"
                >
                  Units per order
                </p>
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.57309 5.19695L8.66924 9.65726C8.75138 9.72912 8.85328 9.7868 8.96794 9.82634C9.0826 9.86589 9.20731 9.88636 9.33351 9.88636C9.45971 9.88636 9.58442 9.86589 9.69908 9.82634C9.81374 9.7868 9.91563 9.72912 9.99778 9.65726L15.0939 5.19695C15.5803 4.77121 15.1771 4.11359 14.4297 4.11359H4.2359C3.4885 4.11359 3.08527 4.77121 3.57309 5.19695Z"
                    fill="#4A5568"
                  />
                </svg>
              </div>
            </th>
            <th class="text-left py-5 pr-16">
              <div class="flex items-center">
                <p
                  class="text-sm font-medium pr-0.5 leading-none text-gray-900"
                >
                  Cost per order
                </p>
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.57309 5.19695L8.66924 9.65726C8.75138 9.72912 8.85328 9.7868 8.96794 9.82634C9.0826 9.86589 9.20731 9.88636 9.33351 9.88636C9.45971 9.88636 9.58442 9.86589 9.69908 9.82634C9.81374 9.7868 9.91563 9.72912 9.99778 9.65726L15.0939 5.19695C15.5803 4.77121 15.1771 4.11359 14.4297 4.11359H4.2359C3.4885 4.11359 3.08527 4.77121 3.57309 5.19695Z"
                    fill="#4A5568"
                  />
                </svg>
              </div>
            </th>
            <th class="text-left py-5">
              <p class="text-sm font-medium leading-none text-gray-900">
                Unit Cost
              </p>
            </th>
            <th class="flex items-end justify-end rounded-tr-lg">
              <button
                role="button"
                aria-label="add a column"
                class="rounded-tr-lg py-5 px-4 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-indigo-700 flex items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11.75H5.5M12.25 5V18.5V5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="text-sm font-medium leading-none text-white pl-2">
                  Add Column
                </p>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="pb-5 pt-8 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="pb-5 pt-8 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 pb-5 pt-8">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="pb-5 pt-8 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="pb-5 pt-8 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="pb-5 pt-8 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="pb-5 pt-8"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-5 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-5 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-5">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-5 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-5"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-5 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-5 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-5">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-5 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-5"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-5 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-5 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-5">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-5 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-5"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-5 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-5 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-5">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-5 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-5"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-5 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-5 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-5">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-5 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-5 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-5"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="py-3 pr-20 pl-4">
              <p class="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td class="py-3 pr-12">
              <p class="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-3">
              <p class="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">541</p>
            </td>
            <td class="py-3 pr-16">
              <p class="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            <td class="py-3 pr-10">
              <p class="text-sm leading-none text-gray-900">$2,471</p>
            </td>
            <td class="py-3"></td>
          </tr>
          <tr>
            <td class="py-2 pr-20 pl-4"></td>
            <td class="py-2 pr-12"></td>
            <td class="border-l pl-5 pr-20 border-gray-200 py-2"></td>
            <td class="py-2 pr-16"></td>
            <td class="py-2 pr-16"></td>
            <td class="py-2 pr-10"></td>
            <td class="py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  border-radius: 4;
  background-color: white;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 4px;
  width: 326px;
}
</style>
