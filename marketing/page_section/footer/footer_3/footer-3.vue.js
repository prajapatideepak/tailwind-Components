<template>
  <body>
    <div class="dark:bg-gray-900">
      <section class="pb-14 pt-24 flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <footer class="mt-20 mx-auto container md:w-full flex justify-center items-center">
          <div class="flex xl:flex-row flex-col lg:gap-x-24 px-6 md:px-0">
            <div class="flex flex-col flex justify-start items-start lg:w-80">
              <div class="xl:flex-col flex justify-start items-center xl:items-start">
                <div class="flex justify-center mr-6 xl:mr-0 dark:text-white text-gray-800">
                  <svg width="74" height="65" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M68.4275 4.84518C65.5951 2.01188 61.8254 0.312086 57.8277 0.0657003C53.8303 -0.180686 49.8806 1.04332 46.7221 3.50738C43.8379 1.26527 40.2895 0.0478302 36.6371 0.0471221C32.9846 0.046414 29.436 1.26248 26.5509 3.50346C23.2605 0.920069 19.1087 -0.309298 14.9431 0.0663456C10.7775 0.441987 6.91226 2.39431 4.13651 5.52474C1.36075 8.65517 -0.11621 12.7276 0.0071491 16.9107C0.130508 21.0938 1.84488 25.0721 4.80028 28.0332L14.8933 38.1336C14.9012 38.1412 14.909 38.1485 14.9178 38.1563C14.9266 38.1642 14.929 38.1678 14.9346 38.1734C14.9451 38.184 14.9564 38.1935 14.9669 38.204C15.1273 38.3629 15.2901 38.5176 15.4555 38.6684C15.5405 38.7464 15.6265 38.8219 15.713 38.898C15.7831 38.9591 15.8537 39.0197 15.9245 39.0796C18.8016 41.5188 22.4301 42.8933 26.2003 42.9715C29.9708 43.05 33.653 41.8278 36.629 39.51C39.7875 41.974 43.7373 43.1981 47.7347 42.9517C51.7323 42.7053 55.502 41.0055 58.3344 38.1722L68.4277 28.0733C71.5017 24.9907 73.2279 20.8138 73.2279 16.4592C73.2279 12.1046 71.5014 7.9278 68.4275 4.84518ZM36.6339 4.32502C39.0336 4.32348 41.3798 5.03432 43.3755 6.36756C45.3714 7.70079 46.9268 9.59647 47.8453 11.8147C48.7639 14.0329 49.004 16.4739 48.5355 18.8288C48.0669 21.1836 46.9107 23.3465 45.2131 25.0435L36.6339 33.6274L28.0545 25.0435C26.3569 23.3465 25.2006 21.1836 24.7321 18.8287C24.2635 16.4738 24.5037 14.0328 25.4222 11.8146C26.3408 9.59635 27.8964 7.70067 29.8921 6.36746C31.888 5.03425 34.2342 4.32343 36.6339 4.32502ZM14.4074 26.5585C14.4031 24.9636 14.7149 23.3837 15.3249 21.9103C15.9349 20.4368 16.831 19.099 17.9612 17.9744L20.2446 15.6896C20.1341 17.9734 20.5024 20.255 21.326 22.3877C22.1495 24.5204 23.41 26.4571 25.0265 28.0733L33.4302 36.4819C31.6175 37.7523 29.4912 38.5005 27.2828 38.6447C25.0746 38.7889 22.8689 38.324 20.9066 37.3003C18.9442 36.2764 17.3004 34.7335 16.1543 32.8391C15.0082 30.945 14.4038 28.7722 14.4069 26.5578L14.4074 26.5585ZM7.82783 25.0032C5.68036 22.855 4.41615 19.979 4.28494 16.9435C4.15373 13.9079 5.16504 10.9335 7.11911 8.6078C9.07318 6.28208 11.8279 4.7742 14.8391 4.382C17.8504 3.9898 20.8991 4.74183 23.3831 6.48951L14.9332 14.9443C13.4041 16.466 12.1919 18.276 11.3666 20.2696C10.5414 22.2632 10.1195 24.4007 10.1254 26.5585C10.1254 26.8132 10.1314 27.067 10.1433 27.32L7.82783 25.0032ZM46.7277 38.698C44.2488 38.7039 41.8286 37.9442 39.7973 36.5225L48.2423 28.0733C49.8588 26.4571 51.1191 24.5204 51.9427 22.3877C52.7662 20.255 53.1346 17.9734 53.0242 15.6896L55.3076 17.9744C57.0045 19.6722 58.1597 21.8354 58.6278 24.1903C59.0961 26.5451 58.8557 28.986 57.9372 31.2043C57.0189 33.4226 55.4637 35.3184 53.4685 36.6523C51.4731 37.9862 49.1274 38.698 46.7277 38.698ZM65.3999 25.0435L63.1248 27.32C63.1363 27.0672 63.1421 26.8135 63.1426 26.5585C63.1485 24.4007 62.7266 22.2631 61.9014 20.2696C61.0761 18.276 59.8637 16.466 58.3347 14.9443L49.8906 6.49513C52.379 4.76251 55.4256 4.02485 58.4304 4.42736C61.4352 4.82985 64.1806 6.34338 66.126 8.66991C68.0713 10.9964 69.0756 13.9674 68.9412 16.9978C68.8069 20.0282 67.5436 22.8985 65.3999 25.0435Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.724 62.9827L5.168 53.0147H7.842L10.18 60.1827H9.578L12.112 53.0147H13.904L16.298 60.1827H15.78L18.188 53.0147H20.68L17.11 62.9827H15.024L12.756 56.5427H13.12L10.81 62.9827H8.724ZM22.2417 62.9827V53.0147H29.3537V55.0307H24.8037V56.9067H29.0597V58.9227H24.8037V60.9667H29.3537V62.9827H22.2417ZM31.1909 62.9827V53.0147H36.0349C37.0709 53.0147 37.8969 53.248 38.5129 53.7147C39.1383 54.1813 39.4509 54.8113 39.4509 55.6047C39.4509 56.146 39.2969 56.622 38.9889 57.0327C38.6903 57.434 38.2609 57.714 37.7009 57.8727V57.7607C38.3543 57.9193 38.8536 58.2133 39.1989 58.6427C39.5536 59.072 39.7309 59.6087 39.7309 60.2527C39.7309 61.074 39.4089 61.7367 38.7649 62.2407C38.1303 62.7353 37.2623 62.9827 36.1609 62.9827H31.1909ZM33.7529 60.9947H35.8529C36.3569 60.9947 36.7163 60.9153 36.9309 60.7567C37.1549 60.598 37.2669 60.332 37.2669 59.9587C37.2669 59.5853 37.1596 59.3193 36.9449 59.1607C36.7303 58.9927 36.3663 58.9087 35.8529 58.9087H33.7529V60.9947ZM33.7529 56.9207H35.5869C36.0723 56.9207 36.4269 56.846 36.6509 56.6967C36.8749 56.5473 36.9869 56.3093 36.9869 55.9827C36.9869 55.6373 36.8703 55.39 36.6369 55.2407C36.4129 55.082 36.0629 55.0027 35.5869 55.0027H33.7529V56.9207ZM41.521 62.9827V53.0147H46.365C47.401 53.0147 48.227 53.248 48.843 53.7147C49.4683 54.1813 49.781 54.8113 49.781 55.6047C49.781 56.146 49.627 56.622 49.319 57.0327C49.0203 57.434 48.591 57.714 48.031 57.8727V57.7607C48.6843 57.9193 49.1837 58.2133 49.529 58.6427C49.8837 59.072 50.061 59.6087 50.061 60.2527C50.061 61.074 49.739 61.7367 49.095 62.2407C48.4603 62.7353 47.5923 62.9827 46.491 62.9827H41.521ZM44.083 60.9947H46.183C46.687 60.9947 47.0463 60.9153 47.261 60.7567C47.485 60.598 47.597 60.332 47.597 59.9587C47.597 59.5853 47.4897 59.3193 47.275 59.1607C47.0603 58.9927 46.6963 58.9087 46.183 58.9087H44.083V60.9947ZM44.083 56.9207H45.917C46.4023 56.9207 46.757 56.846 46.981 56.6967C47.205 56.5473 47.317 56.3093 47.317 55.9827C47.317 55.6373 47.2003 55.39 46.967 55.2407C46.743 55.082 46.393 55.0027 45.917 55.0027H44.083V56.9207ZM51.8511 62.9827V53.0147H58.9631V55.0307H54.4131V56.9067H58.6691V58.9227H54.4131V60.9667H58.9631V62.9827H51.8511ZM60.8003 62.9827V53.0147H65.4343C66.6476 53.0147 67.553 53.276 68.1503 53.7987C68.757 54.3213 69.0603 55.0587 69.0603 56.0107C69.0603 56.9067 68.743 57.6347 68.1083 58.1947C67.483 58.7453 66.6103 59.0207 65.4903 59.0207L66.6943 58.7687C67.0303 58.7687 67.3383 58.876 67.6183 59.0907C67.9076 59.296 68.1316 59.604 68.2903 60.0147L69.4663 62.9827H66.6803L65.3923 59.6647C65.3083 59.4593 65.1683 59.3147 64.9723 59.2307C64.7763 59.1467 64.5663 59.1047 64.3423 59.1047H63.3903V62.9827H60.8003ZM63.3623 57.1447H65.0143C65.5836 57.1447 65.9896 57.0607 66.2323 56.8927C66.4843 56.7153 66.6103 56.4447 66.6103 56.0807C66.6103 55.698 66.4843 55.4227 66.2323 55.2547C65.9896 55.0867 65.5836 55.0027 65.0143 55.0027H63.3623V57.1447Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="flex justify-center flex-col">
                  <div class="xl:mt-8">
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-normal">Copyright © 2021 WEBBER.</p>
                  </div>
                  <div class="mt-2">
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-normal">All rights reserved</p>
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-start items-start flex-row lg:space-x-4 space-x-2">
                <button aria-label="twitter" role="button" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button aria-label="youtube" role="button" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex flex-row mt-6 mt-8 xl:mt-0 lg:gap-x-14 gap-x-10">
              <div class="grid lg:grid-cols-3 grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-0">
                <div class="lg:w-40">
                  <h2 class="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">Company</h2>
                  <div class="mt-6 flex flex justify-start items-start flex-col space-y-2">
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">About us</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Blog</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Contact us</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Pricing</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Testimonials</a>
                    </div>
                  </div>
                </div>
                <div class="lg:w-40">
                  <h2 class="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">Support</h2>
                  <div class="mt-6 flex flex justify-start items-start flex-col space-y-2">
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Help center</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Terms of service</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Legal</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Privacy policy</a>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed">Status</a>
                    </div>
                  </div>
                </div>
                <div class="sm:block hidden">
                  <h2 class="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">Get Updates and more</h2>
                  <div class="dark:bg-gray-800 bg-white rounded-lg mt-6 flex flex justify-start items-start flex-col space-y-2">
                    <div class="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                      <div class="relative w-full">
                        <input class="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base" type="text" placeholder="Your email address" />
                        <button aria-label="send email" role="button" class="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="18" height="18" fill="white" transform="translate(12.7279 0.271973) rotate(45)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:hidden sm:mt-0 mt-4">
              <h2 class="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">Get Updates and more</h2>
              <div class="dark:bg-gray-800 bg-white rounded-lg mt-6 flex flex justify-start items-start flex-col space-y-2">
                <div class="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                  <div class="relative w-full">
                    <input class="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base" type="text" placeholder="Your email address" />
                    <button class="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="18" height="18" fill="white" transform="translate(12.7279 0.271973) rotate(45)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  </body>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>

