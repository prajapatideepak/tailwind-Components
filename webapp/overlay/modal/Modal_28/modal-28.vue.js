<template>
  <body style="min-height: 170px">
    <div
      class="
        py-12
        dark:bg-black
        bg-gray-700
        transition
        duration-150
        ease-in-out
        z-10
        absolute
        top-0
        right-0
        bottom-0
        left-0
      "
      ref="modal"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-4/5 max-w-2xl flex justify-center"
      >
        <div
          class="
            relative
            md:w-full
            rounded
            shadow-lg
            py-5
            px-4
            dark:bg-gray-800
            bg-white
          "
        >
          <div class="md:flex items-center justify-between">
            <div class="flex items-center justify-between">
              <p
                class="
                  text-base
                  font-bold
                  leading-4
                  dark:text-gray-100
                  text-gray-900
                "
              >
                Subscribe to our Newsletter
              </p>
              <div
                class="
                  cursor-pointer
                  md:hidden
                  dark:text-gray-100
                  text-gray-400 text-gray-600
                  transition
                  duration-150
                  ease-in-out
                "
                @click="modalHandler()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  class="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
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
            <div class="flex items-center mt-4 md:mt-0">
              <div
                class="pb-1 border-b border-gray-200 dark:border-gray-400 w-44"
              >
                <input
                  class="
                    w-full
                    bg-transparent
                    focus:outline-none
                    placeholder-gray-500
                    dark:placeholder-gray-400
                    text-sm
                    font-medium
                    leading-4
                    text-gray-500
                    dark:text-gray-400
                  "
                  placeholder="Enter your email..."
                />
              </div>
              <button
                class="
                  focus:outline-none
                  ml-6
                  md:mr-4
                  px-4
                  py-2
                  bg-indigo-700
                  dark:bg-indigo-600
                  hover:bg-opacity-80
                  rounded
                "
              >
                <p class="text-xs font-medium leading-3 text-gray-100">
                  Subscribe
                </p>
              </button>
              <div
                class="
                  cursor-pointer
                  md:block
                  hidden
                  dark:text-gray-100
                  text-gray-400 text-gray-600
                  transition
                  duration-150
                  ease-in-out
                "
                @click="modalHandler()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  class="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
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
      </div>
    </div>
    <div class="w-full flex justify-center py-12" id="button">
      <button
        class="
          focus:outline-none
          mx-auto
          transition
          duration-150
          ease-in-out
          hover:bg-indigo-600
          bg-indigo-700
          rounded
          text-white
          px-4
          sm:px-8
          py-2
          text-xs
          sm:text-sm
        "
        @click="modalHandler(true)"
      >
        Open Modal
      </button>
    </div>    
  </body>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal;
      if (val) {
        fadeIn(modal);
      } else {
        fadeOut(modal);
      }
      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
      function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

