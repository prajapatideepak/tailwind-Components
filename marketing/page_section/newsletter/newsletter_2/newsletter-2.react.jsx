import React, { useState } from "react";

export default function Index() {

    return (
        <div>
            <div className="bg-indigo-700 px-4 md:px-6 lg:px-20 py-9 md:py-12">
                <div className="lg:flex lg:justify-between lg:gap-6">
                    <div>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-10 text-white pb-4">Get notified by singing up</h1>
                        <p className="text-base leading-normal text-white">Sign up for our newsletter and get weekly updates. We only send emails about our latest products on the market once a week every Friday.</p>
                    </div>
                    <div>
                        <div className="pt-8 lg:pt-0">
                            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between pb-4">
                                <input type="email" placeholder="Your Email" className="w-full lg:w-auto placeholder-text-base placeholder-text-gray-600 border rounded-md py-4 px-4 mr-4 focus:outline-none" />
                                <button className="w-full lg:w-auto bg-white border rounded-md py-4 px-8 text-base font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">Subscribe</button>
                            </div>
                            <p className="text-left md:text-center lg:text-left text-sm text-gray-300">Read our <u className="no-underline hover:underline">privacy policy</u></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}


