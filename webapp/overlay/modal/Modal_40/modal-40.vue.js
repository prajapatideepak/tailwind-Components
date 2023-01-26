<template>
  <body style="min-height: 640px">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" ref="modal" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                <div class="relative w-11/12 sm:w-8/12 md:w-10/12 bg-white dark:bg-gray-800 shadow rounded">
                    <img class="rounded-tl rounded-tr" src="https://i.ibb.co/H4xJ7Ph/Rectangle-141.png" />
                    <div class="md:px-10 py-4 px-5 md:py-6">
                        <p class="text-2xl font-bold leading-normal text-gray-800 dark:text-gray-100">Sign up</p>
                        <p class="text-sm leading-3 mt-4 mb-5 text-gray-600 dark:text-gray-300">Recieve a special discount from us!</p>
                        <div>
                            <div class="bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200">
                                <input class="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none" type="email" placeholder="Email" />
                            </div>
                            <div class="bg-gray-50 mt-3 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200">
                                <input class="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none" type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div class="md:flex items-center justify-between mt-4 md:mt-6">
                            <p class="text-xs leading-3 text-gray-600 dark:text-gray-300">Already have an account? <span class="cursor-pointer text-indigo-700 dark:text-indigo-600 underline font-semibold">Sign Up</span></p>
                            <button class="mt-4 md:mt-0 md:ml-10 p-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded focus:outline-none">
                                <p class="text-sm font-medium leading-none text-gray-100">Create account</p>
                            </button>
                        </div>
                    </div>
                    <div class="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 transition duration-150 ease-in-out" @click="modalHandler()">
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
