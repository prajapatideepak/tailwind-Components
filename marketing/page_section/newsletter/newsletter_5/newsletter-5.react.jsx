import React, { useState } from "react";

export default function Index() {
    return (
        <div>
            <div className="bg-indigo-600 py-8 md:px-6 px-4 lg:px-12 m-8 border rounded-md">
                <div className="lg:flex justify-between lg:gap-28">
                    <div className="pt-4">
                        <h1 className="font-bold text-4xl text-white">Newsletter</h1>
                        <p className="text-white pt-4">Sign up for our newsletter and get weekly updates. We only send emails about our latest products on the market once a week every Friday.</p>
                        <div className="md:flex md:justify-start mt-4">
                            <input type="email" placeholder="Your email" className="p-4 placeholder-white grid place-items-center text-white bg-transparent border rounded-md md:rounded-r-none w-full md:w-3/4 focus:outline-none" />
                            <button className="p-4 md:w-32 font-medium border rounded-md md:rounded-l-none bg-white text-gray-800 grid place-items-center hover:bg-gray-100 mt-4 w-full md:mt-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">Subscribe</button>
                        </div>
                    </div>
                    <div className="my-8 lg:mt-0 px-2 py-4 md:px-4 lg:py-8 bg-white lg:px-8 border rounded-md">
                        <div className="flex justify-start">
                            <div>
                                <svg width={30} height={30} viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5454 17.8594V9.73816H4.80202C4.90153 5.49573 6.06589 5.01416 7.57717 4.8767L8.12117 4.80446V0.139488L7.4882 0.175488C5.51474 0.286518 3.31341 0.642275 1.85777 2.43925C0.581894 4.01452 -4.3869e-05 6.5881 -4.3869e-05 10.5388V17.8594H10.5454Z" fill="#4338CA" />
                                </svg>
                            </div>
                            <div>
                                <svg width={30} height={30} viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5454 17.8594V9.73816H4.80202C4.90153 5.49573 6.06589 5.01416 7.57717 4.8767L8.12117 4.80446V0.139488L7.4882 0.175488C5.51474 0.286518 3.31341 0.642275 1.85777 2.43925C0.581894 4.01452 -4.3869e-05 6.5881 -4.3869e-05 10.5388V17.8594H10.5454Z" fill="#4338CA" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-gray-600 pt-4">This website is the best I have found so far. Firstly it has huge range of components which are perfectly designed. All of the components are responsive in both tablet and mobile version. Love it!!!</p>
                        <div className="flex justify-start gap-4 pt-4 md:pt-16 lg:pt-4">
                            <div className="pt-4 md:pt-0">
                                <img className="border rounded-full grid place-items-center" src="https://i.ibb.co/cCwTcC8/Unsplash-Avatars-0002s-0010-banter-snaps-mtsb-b-Cvr-BY-unsplash.png" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">William Jackson</p>
                                <p className="text-gray-600">CEO at Alphasquad Limited</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
