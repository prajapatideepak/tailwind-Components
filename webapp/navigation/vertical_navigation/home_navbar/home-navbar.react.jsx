import React, { useState } from "react";
export default function IndexPage() {
    const [show, setShow] = useState(null);

    return (
        <>
            <div className={show ? "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow  flex-col justify-between pb-12 transition duration-150 h-full ease-in-out transform  translate-x-0" : "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow  flex-col justify-between pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
                {" "}
                <div className="lg:px-6 px-4 flex justify-between items-center pt-16">
                    <a href="javascript:void(0)" className="cursor-pointer">
                        <img src="https://i.ibb.co/z7zB0mg/REELS.png" className="lg:w-28 w-16" />
                    </a>
                    <div className="cursor-pointer lg:block hidden" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                    <div className="cursor-pointer lg:hidden block" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="lg:px-6 px-4">
                    <ul className="mt-36">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="text-base font-bold bg-indigo-700 hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Home</li>
                        </a>
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full my-6">Gallery</li>
                        </a>
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full">Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="mx-auto container lg:px-0 px-4 h-full relative">
                <div className="lg:flex hidden items-center pt-16 absolute w-full 2xl:px-0 px-4">
                    <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                            <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                            <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                            <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" className="cursor-pointer">
                        <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-28" />
                    </a>
                </div>
                <nav className="lg:hidden">
                    <div className="flex pt-8 items-center px-4">
                        <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 50 31" fill="none">
                                <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                            </svg>
                        </div>
                        <a href="javascript:void(0)">
                            <div>
                                <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-20" />
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}
