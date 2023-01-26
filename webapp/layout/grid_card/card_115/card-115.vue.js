<template>
  <body class="flex min-h-screen justify-center bg-gray-300">
    <div class="py-8">
      <div class="max-w-sm bg-white shadow rounded p-6">
        <div class="flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-xl
              font-semibold
              leading-5
              text-gray-800
              pr-40
            "
          >
            Transactions
          </p>
          <div
            aria-label="search icon"
            role="img"
            tabindex="0"
            class="focus:outline-none cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                stroke="#6B7280"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 17.5L12.5 12.5"
                stroke="#6B7280"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <p
          tabindex="0"
          class="focus:outline-none text-sm leading-normal text-gray-500 pt-2"
        >
          43 transactions
        </p>
        <div
          class="
            mt-6
            bg-gray-100
            p-1
            rounded
            w-full
            flex
            items-center
            justify-between
          "
        >
          <button
            class="
              focus:ring-offset-2 focus:ring-gray-400 focus:ring-2
              text-sm
              py-2
              focus:outline-none
              hover:bg-white
              bg-white
              px-14
              hover:shadow
              shadow
              rounded-md
              leading-normal
              text-gray-600
            "
          >
            Paid
          </button>
          <button
            class="
              focus:ring-offset-2 focus:ring-gray-400 focus:ring-2
              text-sm
              py-2
              focus:outline-none
              hover:bg-white
              px-14
              focus:bg-white
              hover:shadow
              focus:shadow
              rounded-md
              leading-normal
              text-gray-600
              ml-4
            "
          >
            Recieved
          </button>
        </div>
        <div class="flex items-start justify-between mt-6 w-full">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gray-100 rounded">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png"
                alt="woman avatar"
                tabindex="0"
                class="focus:outline-none w-full h-full"
              />
            </div>
            <div class="pl-3">
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  font-medium
                  leading-normal
                  text-gray-800
                "
              >
                Sandra Rogers
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-2 text-gray-600"
              >
                3 bills
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              font-medium
              leading-normal
              text-right text-red-700
            "
          >
            $12,847
          </p>
        </div>
        <div class="flex items-start justify-between mt-6 w-full">
          <div class="flex items-center">
            <div
              class="
                w-8
                h-8
                bg-gray-100
                rounded
                flex
                items-center
                justify-center
              "
            >
              <img
                src="https://cdn.tuk.dev/assets/components/misc/RT.png"
                alt="profile"
                tabindex="0"
                class="focus:outline-none"
              />
            </div>
            <div class="pl-3">
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  font-medium
                  leading-normal
                  text-gray-800
                "
              >
                Raymond Tusk
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-2 text-gray-600"
              >
                7 bills
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              font-medium
              leading-normal
              text-right text-red-700
            "
          >
            $11,847
          </p>
        </div>
        <div class="flex items-start justify-between mt-6 w-full">
          <div class="flex items-center">
            <div
              class="
                w-8
                h-8
                bg-gray-100
                rounded
                flex
                items-center
                justify-center
              "
            >
              <img
                src="https://cdn.tuk.dev/assets/components/misc/JR.png"
                alt="profile"
                tabindex="0"
                class="focus:outline-none"
              />
            </div>
            <div class="pl-3">
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  font-medium
                  leading-normal
                  text-gray-800
                "
              >
                Jane Roberts
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-2 text-gray-600"
              >
                4 bills
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              font-medium
              leading-normal
              text-right text-red-700
            "
          >
            $21,847
          </p>
        </div>
        <div class="flex items-start justify-between mt-6 w-full">
          <div class="flex items-center">
            <div
              class="
                w-8
                h-8
                bg-gray-100
                rounded
                flex
                items-center
                justify-center
              "
            >
              <img
                src="https://cdn.tuk.dev/assets/components/misc/profile-img-2.png"
                alt="woman avatar"
                tabindex="0"
                class="focus:outline-none"
              />
            </div>
            <div class="pl-3">
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  font-medium
                  leading-normal
                  text-gray-800
                "
              >
                Maia Kelly
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-2 text-gray-600"
              >
                2 bills
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              font-medium
              leading-normal
              text-right text-red-700
            "
          >
            $2,847
          </p>
        </div>
        <div class="flex items-start justify-between mt-6 w-full">
          <div class="flex items-center">
            <div
              class="
                w-8
                h-8
                bg-gray-100
                rounded
                flex
                items-center
                justify-center
              "
            >
              <img
                src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                alt="profile"
                tabindex="0"
                class="focus:outline-none"
              />
            </div>
            <div class="pl-3">
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  font-medium
                  leading-normal
                  text-gray-800
                "
              >
                Laurine Watson
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-2 text-gray-600"
              >
                2 bills
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              font-medium
              leading-normal
              text-right text-red-700
            "
          >
            $2,847
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {  
    };
  },
  methods: {},
};
</script>

<style scoped>

</style>
