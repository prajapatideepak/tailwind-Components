<template>
  <body style="min-height: 340px">
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
      id="modal1"
      ref="modal1"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div class="relative w-96 rounded">
          <div
            class="
              bg-indigo-700
              dark:bg-indigo-600
              rounded-tl
              pt-6
              pb-7
              rounded-tr
              px-4
            "
          >
            <div class="flex flex-col">
              <div class="flex items-center">
                <img
                  class="w-16 h-16 rounded-full"
                  src="https://i.ibb.co/FW5K7M1/Ellipse-1.png"
                />
                <div class="ml-3">
                  <p class="text-lg font-bold leading-none text-gray-100">
                    Kelly Kapoor
                  </p>
                  <p class="text-xs font-medium leading-3 text-gray-100 mt-2">
                    Customer Support
                  </p>
                </div>
              </div>
              <p class="text-sm leading-5 text-gray-100 mt-4">
                hey everyone, don’t hesitate to ask any questions on your mind.
                We’re here to help!
              </p>
            </div>
          </div>
          <div
            class="py-4 bg-white dark:bg-gray-800 px-4 rounded-bl rounded-br"
          >
            <div class="flex items-center justify-between">
              <input
                placeholder="Type your message..."
                class="
                  text-sm
                  font-medium
                  leading-none
                  text-gray-500
                  focus:outline-none
                  dark:text-gray-400
                  bg-white
                  dark:bg-gray-800
                "
              />
              <button
                @click="modalHandler()"
                class="
                  text-sm
                  font-bold
                  leading-none
                  text-indigo-700
                  focus:outline-none
                  dark:text-gray-100
                "
              >
                Send
              </button>
            </div>
          </div>

          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              text-white
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
      mobileMenu: true,
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal1;
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
<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>

