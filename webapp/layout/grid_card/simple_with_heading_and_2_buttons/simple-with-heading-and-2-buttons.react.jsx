import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container dark:bg-gray-900 xl:px-0 px-4 py-16">
                <div className="xl:w-6/12">
                    <div className="w-full h-48">
                        <img src="https://i.ibb.co/8BNQmFB/Bitmap.png" className="w-full h-full" />
                    </div>
                    <div className="flex items-center pt-5">
                        <p className="text-indigo-700 dark:text-indigo-600 text-sm font-normal pr-3">7th July 2020</p>
                        <p className="text-indigo-700 dark:text-indigo-600 text-sm font-normal border-l border-gray-300 pl-3">9:00pm - 11:00pm</p>
                    </div>
                    <div className="xl:flex items-start py-5">
                        <div>
                            <p className="font-bold xl:text-3xl text-xl text-gray-900 dark:text-gray-100">Metropolitan City Art Gallery Showcase Exhibition</p>
                        </div>
                        <div className="flex items-center pt-5 xl:w-1/2">
                            <p className="text-green-500 text-sm font-normal pr-3">Available</p>
                            <p className="text-green-500 text-sm font-normal border-l border-gray-300 pl-3">86/90 seats booked</p>
                        </div>
                    </div>
                    <div className="md:flex items-center justify-between">
                        <div>
                            <div className="flex items-center flex-no-wrap">
                                <div className="w-8 h-8 bg-cover bg-center border-2 border-white rounded-full">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white bg-center -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white bg-center -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-700" />
                                </div>
                                <div className="w-8 h-8 bg-cover rounded-full border-2 border-white -ml-2">
                                    <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M9.99967 4.16666V15.8333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16699 10H15.8337" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center xl:mt-0 mt-4">
                            <button className="bg-indigo-700 text-sm text-white px-4 py-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                    <circle cx="3.5" cy={7} r="1.75" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="10.5" cy="3.5" r="1.75" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="10.5" cy="10.5" r="1.75" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.0752 6.24166L8.9252 4.25833" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.0752 7.75833L8.9252 9.74166" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="ml-2">Share Event</span>
                            </button>
                            <button className="bg-gray-700 text-sm text-white ml-3 px-4 py-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                    <circle cx="5.25033" cy="4.08333" r="2.33333" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.75 12.25V11.0833C1.75 9.79467 2.79467 8.75 4.08333 8.75H6.41667C7.70533 8.75 8.75 9.79467 8.75 11.0833V12.25" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M9.33301 6.04166C9.1259 6.04166 8.95801 6.20956 8.95801 6.41666C8.95801 6.62377 9.1259 6.79166 9.33301 6.79166V6.04166ZM12.833 6.79166C13.0401 6.79166 13.208 6.62377 13.208 6.41666C13.208 6.20956 13.0401 6.04166 12.833 6.04166V6.79166ZM11.458 4.66666C11.458 4.45956 11.2901 4.29166 11.083 4.29166C10.8759 4.29166 10.708 4.45956 10.708 4.66666H11.458ZM10.708 8.16666C10.708 8.37377 10.8759 8.54166 11.083 8.54166C11.2901 8.54166 11.458 8.37377 11.458 8.16666H10.708ZM9.33301 6.79166H12.833V6.04166H9.33301V6.79166ZM10.708 4.66666V8.16666H11.458V4.66666H10.708Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="ml-2">Book a Seat</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm leading-7 mt-5 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit aut rerum et quidem, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit aut.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
