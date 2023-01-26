import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
export default function IndexPage() {
    return (
        <>
            <div className="bg-gray-200">
                {/* PLease install Pure React Carousel using "npm i pure-react-carousel" in order to use this component */}
                <div className="flex items-center justify-center w-full h-full py-8 px-4">
                    <div className="w-80">
                        <div className="flex items-center rounded-t-3xl justify-between bg-white p-6">
                            <CarouselProvider naturalSlideWidth={50} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true} infinite={true} className="flex items-center justify-between w-full">
                                <ButtonBack className="focus:outline-none cursor-pointer">
                                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center cursor-pointer justify-center" id="prev2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1F2937" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                    </div>
                                </ButtonBack>
                                <Slider className="w-40">
                                    <Slide className="flex items-center justify-center" index={1}>
                                        <img alt="phone" src="https://i.ibb.co/bXSwsnN/pngfind-1.png" className="w-40 h-56" />
                                    </Slide>
                                    <Slide className="flex items-center justify-center" index={2}>
                                        <img alt="phone" src="https://i.ibb.co/bXSwsnN/pngfind-1.png" className="w-40 h-56" />
                                    </Slide>
                                    <Slide className="flex items-center justify-center" index={3}>
                                        <img alt="phone" src="https://i.ibb.co/bXSwsnN/pngfind-1.png" className="w-40 h-56" />
                                    </Slide>
                                </Slider>
                                <ButtonNext className="focus:outline-none cursor-pointer">
                                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center cursor-pointer justify-center" id="next2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1F2937" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="9 6 15 12 9 18" />
                                        </svg>
                                    </div>
                                </ButtonNext>
                            </CarouselProvider>
                        </div>
                        <div className="border-t p-6 bg-white dark:bg-gray-800 rounded-b-3xl">
                            <h1 className="text-base font-medium leading-4 text-left text-gray-500 dark:text-gray-400">IPhone 11 Pro Max</h1>
                            <h3 className="text-2xl font-semibold leading-6 text-left pt-3 text-gray-800 dark:text-gray-100">$949.99</h3>
                            <div className="flex items-center pt-3">
                                <div className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>
                                </div>
                                <div className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>
                                </div>
                                <div className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>
                                </div>
                                <div className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>
                                </div>
                                <div className="pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                                        <path
                                            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base font-medium leading-4 text-indigo-600">5.0</p>
                            </div>
                            <button className="text-indigo-700 bg-transparent border-indigo-700 dark:text-gray-100 dark:bg-indigo-700 border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50">Edit Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
