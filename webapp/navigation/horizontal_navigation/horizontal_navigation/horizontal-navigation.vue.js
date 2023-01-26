<template>
  <body class="" style="height: 550px">
    <div class="h-full w-full">
      <!-- Code block starts -->
      <nav
        role="navigation"
        class="
          md:px-6
          lg:px-4
          w-full
          mx-auto
          hidden
          md:block
          bg-white
          shadow-md
        "
      >
        <div
          class="
            container
            mx-6
            justify-between
            h-20
            flex
            items-center
            bg-white
            md:items-stretch
            mx-auto
            border-b border-gray-200
          "
        >
          <div class="h-full flex items-center">
            <button
              role="img"
              aria-label="logo"
              class="
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700
                mr-10
                flex
                items-center
              "
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
            <ul class="pr-12 md:flex items-center h-full hidden">
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    font-medium
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-800
                    tracking-normal
                    border-b-2 border-white
                  "
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    font-medium
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-800
                    mx-6
                    tracking-normal
                  "
                  >Transactions</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    font-medium
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-800
                    mr-6
                    tracking-normal
                  "
                  >Stats</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    font-medium
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-800
                    mr-6
                    tracking-normal
                  "
                  >Partners</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    font-medium
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-800
                    mr-6
                    tracking-normal
                  "
                  >Settings</a
                >
              </li>
            </ul>
          </div>
          <div class="md:flex items-center justify-end hidden">
            <div class="flex items-center">
              <div class="md:pr-10 lg:pr-0 h-full flex items-center">
                <div class="relative">
                  <div
                    class="
                      text-gray-600
                      absolute
                      ml-3
                      inset-0
                      m-auto
                      lg:w-4
                      lg:h-4
                      md:w-6
                      md:h-6
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="
                        text-gray-600
                        stroke-current
                        icon icon-tabler icon-tabler-search
                      "
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="10" cy="10" r="7" />
                      <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                  </div>
                  <input
                    class="
                      hidden
                      lg:block
                      border border-gray-200
                      focus:outline-none
                      focus:border-indigo-700
                      w-64
                      rounded
                      text-sm text-gray-800
                      pl-8
                      py-2
                    "
                    type="text"
                    placeholder="Search here"
                  />
                </div>
              </div>
              <div class="h-full flex items-center">
                <button
                  aria-label="show notifications"
                  class="
                    relative
                    focus:outline-none
                    focus:text-indigo-700
                    hover:text-indigo-700
                    focus:border-indigo-700
                    hover:border-indigo-700
                    mx-5
                    h-full
                    flex
                    items-center
                    justify-center
                    text-gray-600
                    cursor-pointer
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                    />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <div class="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                    <div
                      class="animate-ping w-2 h-2 rounded-full bg-blue-400"
                    ></div>
                  </div>
                </button>
              </div>
              <div class="h-full flex items-center">
                <button
                  aria-label="dropdown"
                  class="
                    focus:outline-none
                    focus:text-gray-900
                    text-gray-800
                    border-b-2 border-transparent
                    focus:border-gray-800
                    hover:text-gray-900
                    w-full
                    flex
                    items-center
                    justify-end
                    relative
                    cursor-pointer
                  "
                  onclick="dropdownHandler(this)"
                >
                  <img
                    class="rounded-full h-10 w-10 object-cover"
                    src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                    alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center md:hidden">
            <ul
              class="
                p-2
                border-r
                bg-white
                absolute
                rounded
                top-0
                left-0
                right-0
                shadow
                mt-16
                md:mt-16
                hidden
              "
            >
              <li
                class="
                  flex
                  md:hidden
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  mt-2
                  py-2
                  hover:text-indigo-700
                  focus:text-indigo-700
                  focus:outline-none
                "
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Dashboard</span>
                </div>
              </li>
              <li
                class="
                  flex
                  md:hidden
                  flex-col
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  py-2
                  hover:text-indigo-700
                  focus:text-indigo-700
                  focus:outline-none
                  flex
                  justify-center
                "
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Products</span>
                </div>
              </li>
              <li
                class="
                  flex
                  md:hidden
                  flex-col
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  py-2
                  hover:text-indigo-700
                  focus:text-indigo-700
                  focus:outline-none
                  flex
                  justify-center
                "
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Performance</span>
                </div>
              </li>
              <li
                class="
                  border-b border-gray-300
                  flex
                  md:hidden
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  pt-2
                  pb-4
                  hover:text-indigo-700
                  flex
                  items-center
                  focus:text-indigo-700
                  focus:outline-none
                "
              >
                <span class="ml-2 font-bold">Deliverables</span>
              </li>
              <li
                class="
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  mt-2
                  py-2
                  hover:text-indigo-700
                  flex
                  items-center
                  focus:text-indigo-700
                  focus:outline-none
                "
              >
                <div class="flex items-center">
                  <div
                    class="
                      w-12
                      cursor-pointer
                      flex
                      text-sm
                      border-2 border-transparent
                      rounded
                      focus:outline-none
                      focus:border-white
                      transition
                      duration-150
                      ease-in-out
                    "
                  >
                    <img
                      class="rounded h-10 w-10 object-cover"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                      alt="logo"
                    />
                  </div>
                  <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                  <div class="sm:ml-2 text-gray-800 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="
                        icon icon-tabler icon-tabler-chevron-down
                        cursor-pointer
                      "
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </li>
              <li
                class="
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  py-2
                  hover:text-indigo-700
                  focus:text-indigo-700
                  focus:outline-none
                "
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="ml-2">Profile</span>
                </div>
              </li>
              <li
                class="
                  cursor-pointer
                  text-gray-600 text-sm
                  leading-3
                  tracking-normal
                  mt-2
                  py-2
                  hover:text-indigo-700
                  flex
                  items-center
                  focus:text-indigo-700
                  focus:outline-none
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-logout"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                <span class="ml-2">Sign out</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="
            container
            justify-between
            h-12
            flex
            items-center
            bg-white
            md:items-stretch
            mx-auto
          "
        >
          <div class="h-full flex items-center">
            <ul class="pr-12 md:flex items-center h-full hidden">
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    leading-none
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-600
                    border-b-2 border-white
                  "
                  >Home</a
                >
              </li>
              <li>
                <svg
                  class="mx-4"
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z"
                    fill="#E5E7EB"
                  />
                </svg>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    leading-none
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-600
                  "
                  >Resource Manager</a
                >
              </li>
              <li>
                <svg
                  class="mx-4"
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z"
                    fill="#E5E7EB"
                  />
                </svg>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none
                    border-b-2 border-transparent
                    leading-none
                    cursor-pointer
                    h-full
                    flex
                    items-center
                    hover:text-indigo-700
                    text-sm text-gray-600
                    mr-14
                  "
                  >Job Applications</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Navbar -->
      <nav class="md:hidden">
        <div class="w-full shadow-md bg-white fixed top-0 z-40">
          <div class="flex md:hidden mx-auto container">
            <div
              class="
                border-b
                py-4
                border-gray-200
                flex
                items-stretch
                justify-between
                mx-4
                items-center
                w-full
              "
            >
              <div
                aria-label="logo"
                role="img"
                tabindex="0"
                class="focus:outline-none"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div class="flex md:hidden items-center justify-end">
                <div class="flex items-center">
                  <div class="h-full flex items-center">
                    <button
                      aria-label="show notifications"
                      class="
                        relative
                        focus:outline-none
                        focus:text-indigo-700
                        hover:text-indigo-700
                        focus:border-indigo-700
                        hover:border-indigo-700
                        h-full
                        flex
                        items-center
                        justify-center
                        text-gray-600
                        cursor-pointer
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-bell"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                          d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                        />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                      <div class="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                        <div
                          class="animate-ping w-2 h-2 rounded-full bg-blue-400"
                        ></div>
                      </div>
                    </button>
                  </div>
                  <div class="h-full flex items-center">
                    <button
                      aria-label="dropdown"
                      class="
                        focus:outline-none
                        mx-4
                        focus:text-gray-900
                        text-gray-800
                        border-b-2 border-transparent
                        focus:border-gray-800
                        hover:text-gray-900
                        w-full
                        flex
                        items-center
                        justify-end
                        relative
                        cursor-pointer
                      "
                      onclick="dropdownHandler(this)"
                    >
                      <img
                        class="rounded-full h-10 w-10 object-cover"
                        src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                        alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                      />
                    </button>
                  </div>
                  <div class="h-full flex items-center">
                    <button
                      id="menu"
                      ref="menu"
                      aria-label="open menu"
                      class="
                        focus:outline-none
                        focus:ring-2 focus:ring-gray-700
                        rounded-md
                        text-gray-800
                      "
                      @click="sidebarHandler(true)"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10H3"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 6H3"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 14H3"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 18H3"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              container
              sm:px-6
              px-4
              justify-between
              h-12
              flex
              items-center
              bg-white
              md:items-stretch
              mx-auto
            "
          >
            <div class="h-full flex items-center">
              <ul class="flex items-center h-full md:hidden">
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      focus:outline-none
                      border-b-2 border-transparent
                      leading-none
                      cursor-pointer
                      h-full
                      flex
                      items-center
                      hover:text-indigo-700
                      text-sm text-gray-600
                      border-b-2 border-white
                    "
                    >Home</a
                  >
                </li>
                <svg
                  class="mx-2"
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z"
                    fill="#E5E7EB"
                  />
                </svg>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      focus:outline-none
                      border-b-2 border-transparent
                      leading-none
                      cursor-pointer
                      h-full
                      flex
                      items-center
                      hover:text-indigo-700
                      text-sm text-gray-600
                    "
                    >Resource Manager</a
                  >
                </li>
                <svg
                  class="mx-2"
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z"
                    fill="#E5E7EB"
                  />
                </svg>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                      focus:outline-none
                      border-b-2 border-transparent
                      leading-none
                      cursor-pointer
                      h-full
                      flex
                      items-center
                      hover:text-indigo-700
                      text-sm text-gray-600
                      mr-4
                    "
                    >Job Applications</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--Mobile responsive sidebar-->
        <div
          class="
            absolute
            w-full
            h-full
            transform
            -translate-x-full
            z-40
            transition
            duration-700
            sm:hidden
          "
          id="mobilenav"
          ref="mobilenav"
        >
          <div
            class="
              w-full
              h-full
              shadow-lg
              z-40
              fixed
              overflow-y-auto
              z-40
              top-0
              bg-white
              flex-col
              justify-between
              xl:hidden
              pb-4
              transition
              duration-500
              ease-in-out
            "
          >
            <div class="px-5 h-full">
              <div class="flex flex-col justify-between h-full w-full">
                <div>
                  <div class="mt-6 flex w-full items-center justify-between">
                    <div
                      class="
                        border-b border-gray-200
                        pb-8
                        flex
                        items-center
                        justify-between
                        w-full
                      "
                    >
                      <div
                        class="md:pr-10 lg:pr-0 h-full flex items-center w-full"
                      >
                        <div class="relative w-full">
                          <div
                            class="
                              text-gray-800
                              absolute
                              ml-3
                              inset-0
                              m-auto
                              w-4
                              h-4
                            "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-search"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx="10" cy="10" r="7" />
                              <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                          </div>
                          <input
                            class="
                              md:hidden
                              border border-gray-300
                              focus:outline-none
                              focus:border-indigo-700
                              w-full
                              rounded
                              text-sm text-gray-800
                              pl-8
                              py-2
                            "
                            type="text"
                            placeholder="Search here"
                          />
                        </div>
                      </div>
                      <button
                        id="cross"
                        ref="cross"
                        aria-label="close menu"
                        class="
                          focus:outline-none
                          focus:ring-2
                          rounded-md
                          text-gray-800
                          pl-8
                        "
                        @click="sidebarHandler(false)"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13"
                            stroke="#1F2937"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1 1L13 13"
                            stroke="#1F2937"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <ul class="">
                    <li>
                      <a class="cursor-pointer">
                        <div class="text-gray-800 pt-10">
                          <div class="flex items-center">
                            <p
                              tabindex="0"
                              class="
                                focus:outline-none
                                text-gray-800 text-sm
                                font-medium
                              "
                            >
                              Dashboard
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer">
                        <div class="text-gray-800 pt-8">
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <p
                                tabindex="0"
                                class="
                                  focus:outline-none
                                  text-gray-800 text-sm
                                  font-medium
                                "
                              >
                                Transactions
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer">
                        <div class="text-gray-800 pt-8">
                          <div class="flex items-center">
                            <p
                              tabindex="0"
                              class="
                                focus:outline-none
                                text-gray-800 text-sm
                                font-medium
                              "
                            >
                              Stats
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="text-gray-800 pt-8 cursor-pointer">
                      <div class="flex items-center justify-between">
                        <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                          <p
                            tabindex="0"
                            class="
                              focus:outline-none
                              text-gray-800 text-sm
                              font-medium
                            "
                          >
                            Partners
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="text-gray-800 pt-8 cursor-pointer">
                      <div class="flex items-center justify-between">
                        <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                          <p
                            tabindex="0"
                            class="
                              focus:outline-none
                              text-gray-800 text-sm
                              font-medium
                            "
                          >
                            Settings
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- Sidebar ends -->
      <!-- Code block ends -->
    </div>
  </body>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {};
  },
  methods: {
    sidebarHandler(check) {
      let sideBar = this.$refs.mobilenav;
      let menu = this.$refs.menu;
      let cross = this.$refs.cross;
      if (check) {
        sideBar.style.transform = "translateX(-0px)";
        menu.classList.add("hidden");
        cross.classList.remove("hidden");
      } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
        cross.classList.add("hidden");
      }
    },
  },
};
</script> 

<style scoped>
</style>
