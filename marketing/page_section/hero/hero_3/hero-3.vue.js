<template>
  <body style="height: 600px">
    <div class="border-b-2 shadow-md">
      <div class="mx-auto container relative px-6 xl:px-0">
        <nav class="">
          <div class="lg:flex justify-between w-full py-8 hidden">
            <a
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              role="banner"
              href="javascript:void(0)"
              ><img src="https://i.ibb.co/vYhW86Y/Logo.png" alt="Logo"
            /></a>

            <div class="mt-2 lg:w-2/3 xl:w-1/2">
              <ul
                class="font-normal text-lg flex justify-between items-center text-black font-medium"
              >
                <li class="hover:text-indigo-600 cursor-pointer">
                  <a
                    class="focus:outline-none focus:underline focus:text-indigo-700"
                    href="javascript:void(0)"
                    >Home</a
                  >
                </li>
                <li class="hover:text-indigo-600 cursor-pointer">
                  <a
                    class="focus:outline-none focus:underline focus:text-indigo-700"
                    href="javascript:void(0)"
                    >About</a
                  >
                </li>
                <li class="hover:text-indigo-600 cursor-pointer">
                  <a
                    class="focus:outline-none focus:underline focus:text-indigo-700"
                    href="javascript:void(0)"
                    >Products</a
                  >
                </li>
                <li
                  class="hover:text-indigo-600 cursor-pointer underline font-bold"
                >
                  <a
                    class="focus:outline-none focus:text-indigo-700"
                    href="javascript:void(0)"
                    >Join the club today!</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav class="lg:hidden py-4">
          <div class="flex py-2 justify-between items-center">
            <div>
              <a class="" href="javascript:void(0)"
                ><img src="https://i.ibb.co/vYhW86Y/Logo.png" alt="Logo"
              /></a>
            </div>
            <div class="visible flex items-center">
              <ul
                id="list"
                v-if="menu"
                class="py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20"
              >
                <li
                  class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <a href="javascript:void(0)">
                    <span class="ml-2 font-bold">Home</span>
                  </a>
                </li>
                <li
                  class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                >
                  <a href="javascript:void(0)">
                    <span class="ml-2 font-bold">About</span>
                  </a>
                </li>
                <li
                  class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                >
                  <a href="javascript:void(0)">
                    <span class="ml-2 font-bold">Products</span>
                  </a>
                </li>
                <li
                  class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                >
                  <a href="javascript:void(0)">
                    <span class="ml-2 font-bold underline"
                      >Join the club today!</span
                    >
                  </a>
                </li>
              </ul>
              <div class="xl:hidden">
                <svg
                  id="open"
                  @click="menu=true"
                  v-if="!menu"
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  class="show-m-menu icon icon-tabler icon-tabler-menu"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
                <div
                  id="close"
                  class="close-m-menu"
                  @click="menu=false"
                  v-if="menu"
                >
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="mx-auto container relative px-6 py-7 xl:px-0">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center pb-40"
      >
        <div class="xl:mt-8">
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-sm lg:text-base font-medium text-indigo-600 p-2 lg:p-2 bg-indigo-100 rounded-md"
          >
            Checkout updates
            <svg
              class="ml-5"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="17"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
          <div
            class="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold"
          >
            <h1 class="lg:text-7xl leading-tight mt-3 lg:mt-4">
              Experience Life from home
            </h1>
          </div>
          <h2
            class="text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700"
          >
            The best experiences, without leaving your home. VR provides
            everything you need to stay sane and safe during the pandemic
          </h2>
          <div class="my-2">
            <button
              class="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-indigo-700 text-base leading-none text-white hover:bg-indigo-600 p-4 rounded"
            >
              Take me home
            </button>
          </div>
        </div>
        <div class="w-full custom-height mt-8 lg:mt-0 rounded-3xl relative">
          <a tabindex="-1" href="javascript:void(0)"
            ><img src="https://i.ibb.co/dLsYS9C/Group-1.png" alt="Group-1"
          /></a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {},
};
</script>
