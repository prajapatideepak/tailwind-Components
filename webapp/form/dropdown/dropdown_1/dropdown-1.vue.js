<template>
  <body class="bg-gray-300 py-8 min-h-screen flex justify-center">
    <div>
      <button
        aria-label="dropdown"
        @click="show=!show"
        class="
          focus:bg-gray-100
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          cursor-pointer
          w-52
          p-4
          shadow
          rounded
          bg-white
          text-sm
          font-medium
          leading-none
          text-gray-800
          flex
          items-center
          justify-between
        "
      >
        Select Location(s)
        <div class="cursor-pointer">
          <div class="" v-if="!show" id="close">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div v-if="show" id="open">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                fill="#1F2937"
              />
            </svg>
          </div>
        </div>
      </button>
      <div class="w-52 mt-2 p-4 bg-white shadow rounded" v-if="show" id="dropdown">
        <div class="flex items-center justify-between">
          <div class="w-32 flex items-center p-2 bg-gray-100 rounded-md">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8.5C6.933 8.5 8.5 6.933 8.5 5C8.5 3.067 6.933 1.5 5 1.5C3.067 1.5 1.5 3.067 1.5 5C1.5 6.933 3.067 8.5 5 8.5Z"
                stroke="#6B7280"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 10.5L7.5 7.5"
                stroke="#6B7280"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              aria-label="search item"
              type="search1"
              class="
                w-full
                h-full
                text-sm
                bg-transparent
                focus:outline-none
                pl-2
              "
            />
          </div>
          <button
            aria-label="Search"
            class="
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
              w-8
              h-8
              ml-2
              border
              rounded-md
              cursor-pointer
              hover:bg-gray-100
              bg-transparent
              border-gray-200
              flex
              items-center
              justify-center
            "
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L6.5 6L1.5 11"
                stroke="#4B5563"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4 flex items-center">
          <div
            class="
              bg-gray-100
              dark:bg-gray-800
              border
              rounded-sm
              border-gray-200
              dark:border-gray-700
              w-3
              h-3
              flex flex-shrink-0
              justify-center
              items-center
              relative
            "
          >
            <input
              aria-labelledby="germany"
              type="checkbox"
              class="
                checkbox
                focus:opacity-100
                opacity-0
                absolute
                cursor-pointer
                w-full
                h-full
              "
            />
            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                class="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p
            id="germany"
            tabindex="0"
            class="focus:outline-none text-sm leading-normal ml-2 text-gray-800"
          >
            Germany
          </p>
        </div>
        <div class="mt-3 flex items-center">
          <div
            class="
              bg-gray-100
              dark:bg-gray-800
              border
              rounded-sm
              border-gray-200
              dark:border-gray-700
              w-3
              h-3
              flex flex-shrink-0
              justify-center
              items-center
              relative
            "
          >
            <input
              aria-labelledby="crotia"
              type="checkbox"
              class="
                checkbox
                focus:opacity-100
                opacity-0
                absolute
                cursor-pointer
                w-full
                h-full
              "
            />
            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                class="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p
            id="crotia"
            tabindex="0"
            class="focus:outline-none text-sm leading-normal ml-2 text-gray-800"
          >
            Crotia
          </p>
        </div>
        <div class="mt-3 flex items-center">
          <div
            class="
              bg-gray-100
              dark:bg-gray-800
              border
              rounded-sm
              border-gray-200
              dark:border-gray-700
              w-3
              h-3
              flex flex-shrink-0
              justify-center
              items-center
              relative
            "
          >
            <input
              aria-labelledby="canada"
              type="checkbox"
              class="
                checkbox
                focus:opacity-100
                opacity-0
                absolute
                cursor-pointer
                w-full
                h-full
              "
            />
            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                class="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p
            id="canada"
            tabindex="0"
            class="focus:outline-none text-sm leading-normal ml-2 text-gray-800"
          >
            Canada
          </p>
        </div>
        <div class="mt-3 flex items-center">
          <div
            class="
              bg-gray-100
              dark:bg-gray-800
              border
              rounded-sm
              border-gray-200
              dark:border-gray-700
              w-3
              h-3
              flex flex-shrink-0
              justify-center
              items-center
              relative
            "
          >
            <input
              aria-labelledby="aus"
              type="checkbox"
              class="
                checkbox
                focus:opacity-100
                opacity-0
                absolute
                cursor-pointer
                w-full
                h-full
              "
            />
            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                class="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p
            id="aus"
            tabindex="0"
            class="focus:outline-none text-sm leading-normal ml-2 text-gray-800"
          >
            Australia
          </p>
        </div>
        <div class="mt-3 flex items-center">
          <div
            class="
              bg-gray-100
              dark:bg-gray-800
              border
              rounded-sm
              border-gray-200
              dark:border-gray-700
              w-3
              h-3
              flex flex-shrink-0
              justify-center
              items-center
              relative
            "
          >
            <input
              aria-labelledby="nz"
              type="checkbox"
              class="
                checkbox
                focus:opacity-100
                opacity-0
                absolute
                cursor-pointer
                w-full
                h-full
              "
            />
            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                class="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          <p
            id="nz"
            tabindex="0"
            class="focus:outline-none text-sm leading-normal ml-2 text-gray-800"
          >
            New Zealand
          </p>
        </div>
        <button
          class="
            focus:outline-none
            text-xs
            focus:ring-offset-2 focus:ring-2 focus:ring-indigo-500
            focus:bg-indigo-200
            bg-indigo-100
            hover:bg-indigo-200
            rounded-md
            mt-4
            font-medium
            py-2
            w-full
            leading-3
            text-indigo-700
          "
        >
          Apply
        </button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",  
  data(){
    return{
      show: true
    }
  },
  methods: {    
  },
};
</script>

<style scoped>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
