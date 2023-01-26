<template>
  <body style="min-height: 740px">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" ref="modal" id="modal">
            <div role="alert" class="container mx-auto flex justify-center px-4">
                <div class="relative bg-white dark:bg-gray-800 w-72 sm:w-full md:w-10/12 lg:w-8/12 xl:w-2/5 shadow rounded">
                    <div class="sm:flex items-center">
                        <img class="w-full h-56 sm:h-auto object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/K560zjQ/Rectangle-138.png" />
                        <div class="py-12">
                            <div class="px-6 flex flex-col items-center w-full">
                                <p class="text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100">Subscribe</p>
                                <p class="text-sm leading-5 mt-3 text-center text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                            </div>
                            <div class="mt-6 px-12">
                                <button class="focus:outline-none py-3 w-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border rounded border-gray-200 dark:border-gray-700 text-xs font-semibold leading-3 text-gray-600 dark:text-gray-50">Enter your email</button>
                                <button class="mt-3 w-full text-xs font-semibold leading-3 text-gray-100 focus:outline-none hover:bg-opacity-80 py-3 bg-indigo-700 dark:bg-indigo-600 rounded">Subscribe</button>
                            </div>
                        </div>
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
