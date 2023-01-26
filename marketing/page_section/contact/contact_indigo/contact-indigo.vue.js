<template>
    <div class="container mx-auto pt-16">
        <div class="lg:flex">
            <div class="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
                    <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                    <p class="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                    <div class="flex pb-4 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                        </div>
                        <p class="pl-4 text-white text-base">+1 (308) 321 321</p>
                    </div>
                    <div class="flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </div>
                        <p class="pl-4 text-white text-base">Info@alphas.com</p>
                    </div>
                    <p class="text-lg text-white pt-10 tracking-wide">
                        545, Street 11, Block F
                        <br />
                        Dean Boulevard, Ohio
                    </p>
                    <a href="javascript:void(0)">
                        <p class="text-white pt-16 font-bold tracking-wide underline">View Job Openings</p>
                    </a>
                </div>
            </div>
            <div class="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <form id="contact" class="bg-white py-4 px-8 rounded-tr rounded-br">
                    <h1 class="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                    <div class="block xl:flex w-full flex-wrap justify-between mb-6">
                        <div class="w-2/4 max-w-xs mb-6 xl:mb-0">
                            <div class="flex flex-col">
                                <label for="full_name" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                <input required id="full_name" name="full_name" type="text" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                        <div class="w-2/4 max-w-xs xl:flex xl:justify-end">
                            <div class="flex flex-col">
                                <label for="email" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                <input required id="email" name="email" type="email" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full flex-wrap">
                        <div class="w-2/4 max-w-xs">
                            <div class="flex flex-col">
                                <label for="phone" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                <input required id="phone" name="phone" type="tel" class="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-6">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                            <textarea placeholder="" name="message" class="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows="8" id="message"></textarea>
                        </div>
                        <button type="submit" class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactIndigo",
    mounted() {
        this.submit();
    },
    methods: {
        submit() {
            let form = document.getElementById("contact");
            form.addEventListener(
                "submit",
                function (event) {
                    event.preventDefault();
                    let elements = form.elements;
                    let payload = {};
                    for (let i = 0; i < elements.length; i++) {
                        let item = elements.item(i);
                        switch (item.type) {
                            case "checkbox":
                                payload[item.name] = item.checked;
                                break;
                            case "submit":
                                break;
                            default:
                                payload[item.name] = item.value;
                                break;
                        }
                    }
                    // Place your API call here to submit your payload.
                    // console.log("payload", payload);
                },
                true
            );
        },
    },
};
</script>
