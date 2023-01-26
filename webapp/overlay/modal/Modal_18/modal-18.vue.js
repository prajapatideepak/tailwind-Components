<template>
  <body style="min-height: 470px">
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
      id="modal"
      ref="modal"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="relative w-80 rounded shadow-lg p-6 dark:bg-gray-800 bg-white"
        >
          <div class="flex flex-col items-center justify-center">
            <img src="https://i.ibb.co/vHVfznz/perspaleta1-0012.png" />
            <div
              class="
                px-3
                rounded-lg
                flex
                items-center
                border-gray-200
                w-full
                mt-6
                dark:bg-gray-900
                border
                rounded-lg
                border-gray-200
                dark:border-gray-700
              "
            >
              <input
                class="
                  text-xs
                  font-medium
                  leading-3
                  text-gray-500
                  bg-transparent
                  w-full
                  focus:outline-none
                  py-3
                "
                placeholder="Search"
              />
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.0207 11.078L14.876 13.9327L13.9327 14.876L11.078 12.0207C10.0159 12.8722 8.69471 13.3353 7.33338 13.3334C4.02137 13.3334 1.33337 10.6454 1.33337 7.33337C1.33337 4.02137 4.02137 1.33337 7.33338 1.33337C10.6454 1.33337 13.3334 4.02137 13.3334 7.33337C13.3353 8.69471 12.8722 10.0159 12.0207 11.078ZM10.6834 10.5834C11.5295 9.7133 12.002 8.54699 12 7.33337C12 4.75471 9.91138 2.66671 7.33338 2.66671C4.75471 2.66671 2.66671 4.75471 2.66671 7.33337C2.66671 9.91137 4.75471 12 7.33338 12C8.547 12.002 9.7133 11.5294 10.5834 10.6834L10.6834 10.5834Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </button>
            </div>
            <p
              class="
                text-lg
                font-bold
                leading-none
                text-gray-800
                dark:text-gray-100
                mt-7
              "
            >
              Locations near you
            </p>
            <p
              class="
                text-sm
                leading-tight
                text-center text-gray-600
                dark:text-gray-300
                mt-3
              "
            >
              To see all the resturants, gas stations, hotels, hospitals,
              pharmacies, grocery shops around you, allow access to your
              location.
            </p>

            <button
              class="
                mt-4
                px-8
                py-3
                bg-indigo-700
                focus:outline-none
                hover:bg-opacity-80
                dark:bg-indigo-600
                rounded
              "
            >
              <p class="text-xs font-semibold leading-3 text-gray-100">
                Turn on location
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
<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>


