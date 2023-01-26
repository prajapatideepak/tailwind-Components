import React from "react";
function IndexPage() {
    return (
        <>
            <div class="mx-auto container w-full flex justify-center py-20">
                <div class="w-full max-w-lg">
                    <div class="bg-indigo-800 flex w-full justify-center items-center pt-8 pb-9">
                        <div class="flex flex-col items-center">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/components/111220/cn/logo(1).png" alt="" />
                            </div>
                            <div class="py-8 text-white flex flex-col items-center">
                                <h1 class="font-medium text-2xl">Get Onboard Now</h1>
                                <p class="py-3 italic text-sm">Latest updates for you</p>
                            </div>
                            <div>
                                <form action="">
                                    <div class="flex flex-col items-center">
                                        <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg" placeholder="Your Name" type="text" name="" id="" />
                                        <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg mt-3" placeholder="Email" type="email" name="" id="" />
                                        <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg mt-3" placeholder="Zip Code" type="text" name="" id="" />
                                        <button class="hover:opacity-90 w-full py-3 px-4 bg-red-600 text-sm uppercase text-white mt-3 focus:outline-none">JOIN US TODAY</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
