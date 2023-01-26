<template>
  <body class="flex items-center justify-center py-8 px-4">
    <div class="xl:w-3/4 2xl:w-4/5 w-full bg-white rounded-lg shadow">
      <div class="border rounded-lg border-gray-100">
        <div class="py-4 md:py-6 pl-8">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              md:text-lg
              lg:text-xl
              font-bold
              leading-tight
              text-gray-800
            "
          >
            Orders
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr
                class="
                  bg-gray-50
                  h-16
                  w-full
                  text-sm
                  leading-none
                  text-gray-800
                "
              >
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left pl-8"
                >
                  Date
                </th>
                <th
                  tabindex="0"
                  class="
                    focus:outline-none
                    font-normal
                    text-left
                    px-10
                    lg:px-6
                    xl:px-0
                  "
                >
                  Product
                </th>
                <th
                  tabindex="0"
                  class="
                    focus:outline-none
                    font-normal
                    text-left
                    px-10
                    lg:px-6
                    xl:px-0
                  "
                >
                  Amount
                </th>
                <th
                  tabindex="0"
                  class="
                    focus:outline-none
                    font-normal
                    text-left
                    px-10
                    lg:px-6
                    xl:px-0
                  "
                >
                  Customer
                </th>
                <th
                  tabindex="0"
                  class="
                    focus:outline-none
                    font-normal
                    text-left
                    px-10
                    lg:px-6
                    xl:px-0
                  "
                >
                  Order #
                </th>
                <th
                  tabindex="0"
                  class="
                    focus:outline-none
                    font-normal
                    text-left
                    px-10
                    lg:px-6
                    xl:px-0
                  "
                >
                  Status
                </th>
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left"
                >
                  Confirmation
                </th>
              </tr>
            </thead>
            <tbody class="w-full">
              <tr
                class="
                  h-20
                  text-sm
                  leading-none
                  text-gray-800
                  border-b border-gray-100
                "
              >
                <td tabindex="0" class="focus:outline-none pl-8">06/02/2020</td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Apple Macbook 2020
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    PID: 982 0192
                  </p>
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none px-10 lg:px-6 xl:px-0"
                >
                  $2200
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Samantha Smith
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    samantha@gmail.com
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <p
                    tabindex="0"
                    class="focus:outline-none underline text-blue-700"
                  >
                    WMC0191
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      w-20
                      h-6
                      bg-yellow-100
                      rounded-full
                    "
                  >
                    <p
                      tabindex="0"
                      class="
                        focus:outline-none
                        text-xs
                        leading-3
                        text-yellow-700
                      "
                    >
                      Pending
                    </p>
                  </div>
                </td>
                <td>
                  <button
                    class="
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
                      flex
                      items-center
                      justify-center
                      px-4
                      py-3
                      w-32
                      h-9
                      bg-indigo-50
                      hover:bg-indigo-100
                      rounded
                      focus:outline-none
                    "
                  >
                    <p class="text-sm leading-none text-indigo-700">
                      Confirm Order
                    </p>
                  </button>
                </td>
              </tr>
              <tr
                class="
                  h-20
                  text-sm
                  leading-none
                  text-gray-800
                  border-b border-gray-100
                "
              >
                <td tabindex="0" class="focus:outline-none pl-8">06/02/2020</td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Apple Macbook 2020
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    PID: 982 0192
                  </p>
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none px-10 lg:px-6 xl:px-0"
                >
                  $2200
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Samantha Smith
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    samantha@gmail.com
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <p class="underline text-blue-700">WMC0191</p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      w-20
                      h-6
                      bg-yellow-100
                      rounded-full
                    "
                  >
                    <p
                      tabindex="0"
                      class="
                        focus:outline-none
                        text-xs
                        leading-3
                        text-yellow-700
                      "
                    >
                      Pending
                    </p>
                  </div>
                </td>
                <td>
                  <button
                    class="
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
                      flex
                      items-center
                      justify-center
                      px-4
                      py-3
                      w-32
                      h-9
                      bg-indigo-50
                      hover:bg-indigo-100
                      rounded
                      focus:outline-none
                    "
                  >
                    <p class="text-sm leading-none text-indigo-700">
                      Confirm Order
                    </p>
                  </button>
                </td>
              </tr>
              <tr
                class="
                  h-20
                  text-sm
                  leading-none
                  text-gray-800
                  border-b border-gray-100
                "
              >
                <td tabindex="0" class="focus:outline-none pl-8">06/02/2020</td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Apple Macbook 2020
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    PID: 982 0192
                  </p>
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none px-10 lg:px-6 xl:px-0"
                >
                  $2200
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Samantha Smith
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    samantha@gmail.com
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <p
                    tabindex="0"
                    class="focus:outline-none underline text-blue-700"
                  >
                    WMC0191
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      w-20
                      h-6
                      bg-green-100
                      rounded-full
                    "
                  >
                    <p
                      tabindex="0"
                      class="
                        focus:outline-none
                        text-xs
                        leading-3
                        text-green-700
                      "
                    >
                      Shipped
                    </p>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr class="h-20 text-sm leading-none text-gray-800">
                <td tabindex="0" class="focus:outline-none pl-8">06/02/2020</td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Apple Macbook 2020
                  <p
                    tabindex="0"
                    class="focus:outline-none text-gray-600 font-normal mt-2"
                  >
                    PID: 982 0192
                  </p>
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none px-10 lg:px-6 xl:px-0"
                >
                  $2200
                </td>
                <td
                  tabindex="0"
                  class="focus:outline-none font-medium px-10 lg:px-6 xl:px-0"
                >
                  Samantha Smith
                  <p class="text-gray-600 font-normal mt-2">
                    samantha@gmail.com
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <p
                    tabindex="0"
                    class="focus:outline-none underline text-blue-700"
                  >
                    WMC0191
                  </p>
                </td>
                <td class="px-10 lg:px-6 xl:px-0">
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      w-20
                      h-6
                      bg-red-100
                      rounded-full
                    "
                  >
                    <p
                      tabindex="0"
                      class="focus:outline-none text-xs leading-3 text-red-700"
                    >
                      Cancelled
                    </p>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
    };
  },
  methods: {    
  },
};
</script>

<style>
</style>
