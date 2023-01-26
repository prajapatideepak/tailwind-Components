<template>
  <body class="flex items-center justify-center py-8 px-2">
    <div class="w-full sm:px-6">
      <div
        class="
          px-4
          md:px-10
          py-4
          md:py-7
          bg-gray-100
          rounded-tl-lg rounded-tr-lg
        "
      >
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            "
          >
            Projects
          </p>
          <div>
            <button
              class="
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                inline-flex
                sm:ml-3
                mt-4
                sm:mt-0
                items-start
                justify-start
                px-6
                py-3
                bg-indigo-700
                hover:bg-indigo-600
                focus:outline-none
                rounded
              "
            >
              <p class="text-sm font-medium leading-none text-white">
                New Project
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto"
      >
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-16
                w-full
                text-sm
                leading-none
                text-gray-800
              "
            >
              <th class="font-normal text-left pl-4">Project</th>
              <th class="font-normal text-left pl-12">Progress</th>
              <th class="font-normal text-left pl-12">Tasks</th>
              <th class="font-normal text-left pl-20">Budget</th>
              <th class="font-normal text-left pl-20">Deadline</th>
              <th class="font-normal text-left pl-16">Members</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                bg-white
                hover:bg-gray-100
                border-b border-t border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                      alt="UX Design and Visual Strategy"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">UX Design &amp; Visual Strategy</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Herman Group
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  72%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-20 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=0:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===0"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(1).png"
                      alt="Branding"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">Branding</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Cassin, Bradtke and Jacobson
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  18%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-6 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">09/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=1:show=null"
                  class="rounded-md focus:outline-none focus:ring-2 ml-7"
                  role="button"
                  aria-label="option"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6                    
                  "
                  v-if="show===1"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(2).png"
                      alt="dev ops"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">Dev Ops</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Weissnat Group
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  28%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-8 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=2:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===2"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(3).png"
                      alt="backend services"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">Backend Services</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Hoeger - Hirthe
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  94%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-24 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=3:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===3"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(4).png"
                      alt="UI design"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">UI Design</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Batz - Yundt
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  81%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-20 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=4:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===4"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(5).png"
                      alt="UX stradegy"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">UX Strategy</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Erdman Group
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  37%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-14 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=5:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===5"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(6).png"
                      alt="Website Development"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">Website Development</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      Dickens - Pacocha
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  58%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-16 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=6:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===6"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                border-b border-t
                bg-white
                hover:bg-gray-100
                border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(7).png"
                      alt="Mobile App Development"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">Mobile App Development</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      O'Kon Inc
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-12">
                <p class="text-sm font-medium leading-none text-gray-800">
                  42%
                </p>
                <div class="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div class="w-12 h-3 bg-green-progress rounded-full"></div>
                </div>
              </td>
              <td class="pl-12">
                <p class="font-medium">32/47</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td class="pl-20">
                <p class="font-medium">$13,000</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
              </td>
              <td class="pl-20">
                <p class="font-medium">22.12.21</p>
                <p class="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="show===null?show=7:show=null"
                  class="focus:ring-2 rounded-md focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  class="
                    dropdown-content
                    bg-white
                    shadow
                    w-24
                    absolute
                    z-30
                    right-0
                    mr-6
                  "
                  v-if="show===7"
                >
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Edit</p>
                  </div>
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:text-indigo-600
                      text-xs
                      w-full
                      hover:bg-indigo-700
                      py-4
                      px-4
                      cursor-pointer
                      hover:text-white
                    "
                  >
                    <p>Delete</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
        show: null
    };
  },
  methods: {    
  },
  mounted() {},
};
</script>

<style>
</style>
