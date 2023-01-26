<template>
  <body style="min-height: 330px">
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
        <div
          class="relative w-80 sm:w-96 bg-white dark:bg-gray-800 p-6 rounded"
        >
          <p
            class="
              text-lg
              font-bold
              leading-none
              text-left
              text-gray-800
              dark:text-gray-50
            "
          >
            Recent Stories
          </p>
          <p
            class="
              w-full
              md:w-10/12
              text-base
              font-medium
              leading-normal
              text-gray-600
              dark:text-gray-300
              pt-4
              pb-6
              text-left
            "
          >
            See what your friends are sharing, Let them know you’re interested.
          </p>
          <div class="flex items-center justify-between">
            <div
              class="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border-2 border-indigo-700
                flex
                items-center
                justify-center
                p-1
              "
            >
              <img src="https://i.ibb.co/H24jspQ/Ellipse-2.png" />
            </div>
            <div
              class="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border-2 border-indigo-700
                flex
                items-center
                justify-center
                p-1
              "
            >
              <img src="https://i.ibb.co/kxrmfCX/Ellipse-3.png" />
            </div>
            <div
              class="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border-2 border-indigo-700
                flex
                items-center
                justify-center
                p-1
              "
            >
              <img src="https://i.ibb.co/PzbFXsX/Ellipse-4.png" />
            </div>
            <div
              class="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border-2 border-gray-500
                flex
                items-center
                justify-center
                p-1
              "
            >
              <img src="https://i.ibb.co/Cmyq8qW/Ellipse-5.png" />
            </div>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              text-gray-800
              dark:text-white
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


