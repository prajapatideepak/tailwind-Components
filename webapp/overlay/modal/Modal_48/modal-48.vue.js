<template>
  <body style="min-height: 340px">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" ref="modal" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                <div class="relative w-80 bg-white dark:bg-gray-800 shadow px-5 py-4 rounded">
                    <div class="flex items-center">
                        <div class="flex items-end">
                            <img src="https://i.ibb.co/mJtJYWJ/Ellipse-1.png" />
                            <div class="w-2 h-2 bg-green-500 border rounded-full border-white dark:border-gray-800 -ml-2"></div>
                        </div>
                        <p class="text-sm leading-tight ml-4 text-gray-800 dark:text-gray-100"><span class="font-bold">Mike Scarn</span> started a<br />new conversation</p>
                    </div>
                    <button class="mt-5 focus:outline-none py-3 w-full bg-indigo-700 hover:bg-opacity-80 dark:bg-indigo-600 rounded">
                        <p class="text-xs font-medium leading-3 text-gray-100">Join Now</p>
                    </button>
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

</style>
