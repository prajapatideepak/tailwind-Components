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
      ref="modal"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            max-w-sm
            bg-indigo-700
            dark:bg-indigo-600
            shadow
            px-8
            pt-8
            pb-10
            rounded
          "
        >
          <p class="text-2xl font-bold leading-normal text-gray-100">
            Get 25% Discount
          </p>
          <p
            class="text-sm leading-5 pt-3 pb-5 text-gray-100 w-full md:w-10/12"
          >
            Get yourself ready for the whole new collection of premium and
            attractive products made just for you.
          </p>
          <div class="flex items-center">
            <button
              class="
                py-3
                px-6
                focus:outline-none
                bg-indigo-600
                dark:bg-indigo-700
                hover:bg-opacity-80
                rounded
              "
            >
              <p class="text-xs font-semibold leading-3 text-gray-100">
                Sign up
              </p>
            </button>
            <button
              class="
                py-3
                px-6
                ml-3
                focus:outline-none
                bg-gray-100
                rounded
                text-xs
                font-semibold
                leading-3
                text-indigo-700
                hover:bg-gray-200
                dark:hover:bg-gray-200
                dark:bg-gray-50
              "
            >
              Log in
            </button>
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
    return {};
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

