<template>
  <body style="min-height: 510px">
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
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            sm:w-96
            rounded
            shadow-lg
            pt-8
            px-4
            pb-6
            dark:bg-gray-800
            bg-white
          "
        >
          <div class="flex flex-col items-center">
            <p
              class="
                text-lg
                font-bold
                leading-none
                text-gray-800
                dark:text-gray-100
              "
            >
              Limited Offer
            </p>
            <div
              class="
                flex
                items-center
                border border-gray-200
                dark:border-gray-700
                rounded-lg
                mt-6
                mb-8
                w-full
                bg-gray-50
                dark:bg-gray-800
              "
            >
              <div
                class="
                  w-1/3
                  p-4
                  sm:p-6
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                <p
                  class="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    font-bold
                    leading-10
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  01
                </p>
                <p
                  class="
                    text-sm
                    sm:text-base
                    font-semibold
                    leading-4
                    text-gray-800
                    mt-2
                    dark:text-gray-100
                  "
                >
                  Day
                </p>
              </div>
              <div
                class="
                  w-1/3
                  p-4
                  sm:p-6
                  flex flex-col
                  items-center
                  justify-center
                  border-l border-gray-200
                  dark:border-gray-700
                "
              >
                <p
                  class="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    font-bold
                    leading-10
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  12
                </p>
                <p
                  class="
                    text-sm
                    sm:text-base
                    font-semibold
                    leading-4
                    text-gray-800
                    mt-2
                    dark:text-gray-100
                  "
                >
                  Hours
                </p>
              </div>
              <div
                class="
                  w-1/3
                  p-4
                  sm:p-6
                  flex flex-col
                  items-center
                  justify-center
                  border-l border-gray-200
                  dark:border-gray-700
                "
              >
                <p
                  class="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    font-bold
                    leading-10
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  36
                </p>
                <p
                  class="
                    text-sm
                    sm:text-base
                    font-semibold
                    leading-4
                    text-gray-800
                    mt-2
                    dark:text-gray-100
                  "
                >
                  Minutes
                </p>
              </div>
            </div>
            <p
              class="
                text-lg
                sm:text-xl
                md:text-2xl
                font-bold
                leading-7
                text-center text-gray-800
                dark:text-gray-100
              "
            >
              Avail 50% off on our first anniversary
            </p>
            <button
              class="
                mt-8
                focus:outline-none
                px-12
                py-3
                bg-indigo-700
                hover:bg-opacity-80
                dark:bg-indigo-600
                hover:bg-opacity-80
                rounded
              "
            >
              <p class="text-xs font-semibold leading-3 text-gray-100">
                Claim offer
              </p>
            </button>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
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

