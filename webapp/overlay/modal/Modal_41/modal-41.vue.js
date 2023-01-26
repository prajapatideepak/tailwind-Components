<template>
  <body style="min-height: 540px">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" ref="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                <div class="relative w-11/12 sm:w-10/12 bg-gradient-to-br from-gray-300 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-800 shadow rounded">
                    <div class="pt-8 px-6">
                        <p class="text-base sm:text-xl md:text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100">New Collection 2021</p>
                        <p class="text-xs md:text-sm md:leading-5 text-gray-600 dark:text-gray-300 mt-2 w-11/12 pr-4">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                        <button class="mt-5 px-2 py-2 md:px-3 md:py-3 bg-indigo-700 focus:outline-none dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100">See more</button>
                    </div>
                    <div class="flex justify-end w-full pb-5 pl-6 md:pl-12">
                        <img src="https://i.ibb.co/xCXJvFd/pngfind-3.png" />
                    </div>
                    <div class="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" @click="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center py-12" id="button">
            <button class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" @click="modalHandler(true)">Open Modal</button>
        </div>
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal;
      if (val) {
        this.fadeIn(modal);
      } else {
        this.fadeOut(modal);
      }
    },
    fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || "block";
      (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    },
  },
};
</script>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
