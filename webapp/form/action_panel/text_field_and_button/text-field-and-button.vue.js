<template>
    <div class="py-6 w-full h-full bg-gray-200">
        <div class="xl:w-5/12 w-11/12 mx-auto mb-4 my-6 md:w-2/3 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md">
            <p class="text-lg text-gray-800 font-semibold mb-3">Update Your Email</p>
            <label for="email" class="text-sm text-gray-600 font-normal">Change email associated with you account</label>
            <div class="flex flex-col items-start sm:items-center sm:flex-row mt-4">
                <div class="relative w-full sm:w-2/3">
                    <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                    </div>
                    <input id="email" class="py-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full pl-16 text-sm border-gray-300 rounded border shadow" placeholder="youremail@example.com" />
                </div>
                <button class="mt-4 sm:mt-0 sm:ml-4 focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextFieldAndButton",
};
</script>
