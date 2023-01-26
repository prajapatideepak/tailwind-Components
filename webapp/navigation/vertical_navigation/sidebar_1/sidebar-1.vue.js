<template>
    <div>
        <div id="sidebar" class="sidebar py-12 overflow-y-auto fixed left-0 h-79vh h-full w-80 xl:w-64 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-0 z-20 top-0 pt-10 transition-transform duration-150 ease-in-out xl:hidden">
            <div>
                <div class="flex items-center justify-between">
                    <p class="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">Web application UI</p>
                    <div onclick="showSidebar(false)" class="text-gray-800 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <div>
                    <div class="pt-8">
                        <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                            <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Master layouts</p>
                            <button class="focus:outline-none">
                                <svg class="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <svg class="text-gray-800 dark:text-gray-400 hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="6 15 12 9 18 15"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden">
                            <div class="flex flex-col">
                                <div class="h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Boxed layout</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                </div>
                                <div class="border-l-4 border-gray-800 h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Sidebar layout</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                            <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Layout</p>
                            <button class="focus:outline-none">
                                <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="6 15 12 9 18 15"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden">
                            <div class="flex flex-col">
                                <div class="h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Grid</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                </div>
                                <div class="border-l-4 border-gray-800 h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Grid card</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                            <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Navigation</p>
                            <button class="focus:outline-none">
                                <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="6 15 12 9 18 15"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden">
                            <div class="flex flex-col">
                                <div class="h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Horizontal navigation</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">4</p>
                                </div>
                                <div class="border-l-4 border-gray-800 h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Vertical navigation</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">8</p>
                                </div>
                                <div class="border-l-4 border-gray-800 h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Pagination</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                            <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Heading</p>
                            <button class="focus:outline-none">
                                <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="6 15 12 9 18 15"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden">
                            <div class="flex flex-col">
                                <div class="h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Page heading</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                </div>
                                <div class="border-l-4 border-gray-800 h-6"></div>
                                <div class="flex items-stretch justify-between">
                                    <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Card heading</button>
                                    <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div onclick="showSidebar(true)" class="fixed flex justify-center items-center bg-gray-800 dark:bg-gray-50 text-gray-50 dark:text-gray-800 rounded-r-lg w-8 h-8 xl:hidden mt-0 left-0 top-0 mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
        </div>
        <div class="hidden xl:block">
            <div class="d-sidebar w-80 xl:w-64 2xl:w-96 px-12 mr-12"></div>
            <div class="d-sidebar pt-16 fixed overflow-y-auto h-79vh h-full w-80 xl:w-64 2xl:w-96 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-12 z-0 top-0 pt-10 transition-transform duration-150 ease-in-out">
                <div>
                    <p class="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">Web application UI</p>
                    <div>
                        <div class="pt-8">
                            <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Master layouts</p>
                                <button class="focus:outline-none">
                                    <svg class="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <svg class="text-gray-800 dark:text-gray-400 hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div class="pl-2 hidden">
                                <div class="flex flex-col">
                                    <div class="h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Boxed layout</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                    </div>
                                    <div class="border-l-4 border-gray-800 h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Sidebar layout</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-8">
                            <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Layout</p>
                                <button class="focus:outline-none">
                                    <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div class="pl-2 hidden">
                                <div class="flex flex-col">
                                    <div class="h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Grid</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                    </div>
                                    <div class="border-l-4 border-gray-800 h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Grid card</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">11</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-8">
                            <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Navigation</p>
                                <button class="focus:outline-none">
                                    <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div class="pl-2 hidden">
                                <div class="flex flex-col">
                                    <div class="h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Horizontal navigation</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">4</p>
                                    </div>
                                    <div class="border-l-4 border-gray-800 h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Vertical navigation</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">8</p>
                                    </div>
                                    <div class="border-l-4 border-gray-800 h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Pagination</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-8">
                            <div onclick="handleList(this)" class="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p class="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Heading</p>
                                <button class="focus:outline-none">
                                    <svg class="text-gray-800 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div class="pl-2 hidden">
                                <div class="flex flex-col">
                                    <div class="h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Page heading</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                    </div>
                                    <div class="border-l-4 border-gray-800 h-6"></div>
                                    <div class="flex items-stretch justify-between">
                                        <button class="text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-indigo-700 dark:focus:border-indigo-700 dark:text-gray-100 text-gray-800 focus:text-indigo-700 dark:focus:text-indigo-700 hover:text-indigo-700 hover:border-indigo-700 dark:hover:text-indigo-700 flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize">Card heading</button>
                                        <p class="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            mobShow: true,
            master: true,
            layout: true,
            navigation: true,
            heading: true,
        };
    },
    mounted() {},
    methods: {
        toggleMobshow() {
            this.mobShow = !this.mobShow;
        },
        toggleMaster() {
            this.master = !this.master;
        },
        toggleLayout() {
            this.layout = !this.layout;
        },
        toggleNavigation() {
            this.navigation = !this.navigation;
        },
        toggleHeading() {
            this.heading = !this.heading;
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
.sidebar {
    transform: translateX(-320px);
}
@media (min-width: 1280px) {
    .sidebar {
        transform: translateX(0px);
    }
}
</style>
