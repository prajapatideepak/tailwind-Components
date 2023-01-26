<template>
  <body style="min-height: 740px">
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
      <div role="alert" class="container mx-auto flex justify-center px-4">
        <div
          class="
            relative
            bg-indigo-700
            dark:bg-indigo-600
            w-72
            sm:w-10/12
            md:w-8/12
            lg:w-1/2
            xl:w-2/5
            shadow
            rounded
          "
        >
          <div class="sm:flex items-strech">
            <img
              class="
                w-full
                h-72
                sm:h-auto
                object-cover object-center
                sm:w-auto
                rounded-tl rounded-tr
                sm:rounded-tr-none sm:rounded-bl
              "
              src="https://i.ibb.co/fNG54kh/Rectangle-138.png"
            />
            <div class="pt-8 pb-4 w-full">
              <div class="px-2.5 flex flex-col items-center w-full">
                <p class="text-2xl font-bold leading-6 text-gray-100">
                  Save Big!
                </p>
                <p class="text-sm leading-5 text-center mt-2 text-gray-100">
                  Get a discount of 30% on your first order by subscribing to
                  our newsletter
                </p>
              </div>
              <div class="mt-4 w-full px-9">
                <div
                  class="
                    bg-white bg-opacity-30
                    dark:bg-indigo-800 dark:bg-opacity-100
                    dark:border-indigo-800
                    border
                    rounded
                    flex
                    items-center
                    justify-center
                  "
                >
                  <input
                    id="input1"
                    placeholder="Full Name"
                    class="
                      py-3
                      text-center
                      focus:outline-none
                      bg-transparent
                      text-xs
                      font-semibold
                      leading-3
                      text-gray-100
                      placeholder-gray-100
                    "
                  />
                </div>
                <div
                  class="
                    bg-white bg-opacity-30
                    dark:bg-indigo-800 dark:bg-opacity-100
                    dark:border-indigo-800
                    border
                    rounded
                    flex
                    items-center
                    justify-center
                    mt-3
                  "
                >
                  <input
                    id="input2"
                    placeholder="Enter your email"
                    class="
                      py-3
                      text-center
                      focus:outline-none
                      bg-transparent
                      text-xs
                      font-semibold
                      leading-3
                      text-gray-100
                      placeholder-gray-100
                    "
                  />
                </div>
                <button
                  class="
                    py-3
                    w-full
                    mt-4
                    focus:outline-none
                    bg-gray-100
                    hover:bg-gray-200
                    rounded
                    text-xs
                    font-semibold
                    leading-3
                    text-indigo-700
                  "
                >
                  Subscribe
                </button>
                <p
                  class="
                    text-xs
                    font-semibold
                    leading-3
                    text-gray-100
                    cursor-pointer
                    text-center
                    mt-3
                  "
                >
                  Learn more
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              text-gray-100
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
::-webkit-input-placeholder {
  text-align: center;
}
</style>
