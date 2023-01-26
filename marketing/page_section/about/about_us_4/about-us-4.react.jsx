import React from "react";

const About4 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-70 text-white sm:px-12 px-6 border rounded-md">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">All About Us</h2>
                        <p className="font-normal text-base leading-6 text-gray-300 mx-auto lg:w-8/12 xl:w-6/12 mt-6 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have grante d to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                    </div>
                </div>
                <div>
                    <img className="lg:block hidden w-full border rounded-md" src="https://i.ibb.co/VCGbH9S/12.png" alt="people discussing something" />
                    <img className="lg:hidden sm:block hidden w-full border rounded-md" src="https://i.ibb.co/2yvrWVN/Rectangle-122-1.png" alt="people discussing something" />
                    <img className="sm:hidden block w-full border rounded-md" src="https://i.ibb.co/sWmx8k6/Rectangle-122.png" alt="people discussing something" />
                </div>
            </div>

            <div className="lg:mt-14 sm:mt-7 mt-14">
                <div className="flex lg:flex-row flex-col sm:gap-10 gap-8">
                    <div className="w-full lg:w-7/12 ">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        <p className="font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>

                        <p className="font-normal text-xl leading-5 text-indigo-700 lg:mt-10 mt-8 underline hover:text-indigo-700 duration-100 cursor-pointer">Watch the video</p>
                    </div>
                    <div className=" relative cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
                        <img className="lg:block hidden w-full" src="https://i.ibb.co/NS8JynL/pexels-artem-podrez-8518616-1.png" alt="A women" />
                        <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/M7c9tFs/Group-807.png" alt="A women" />
                        <img className="sm:hidden block w-full" src="https://i.ibb.co/0rBHNLk/pexels-artem-podrez-8518616-1.png" alt="A women" />
                        <div className="absolute top-0 left-0 p-4">
                            <svg width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="72" height="48" rx="6" fill="#4338CA" />
                                <path d="M31 16V32L44 24L31 16Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About4;
