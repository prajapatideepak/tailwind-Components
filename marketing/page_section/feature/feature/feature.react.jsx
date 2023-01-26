import React from "react";

function MyApp() {
    return (
        <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:items-center justify-center px-10 pt-6 lg:space-x-24 xl:space-x-32 pb-5">
            <div className="lg:w-1/3 flex flex-col lg:items-center mt-10 sm:mt-14">
                <h1 className="text-4xl xl:text-5xl font-semibold leading-10 text-gray-800">Our featured items.</h1>
                <p className="mt-8 lg:text-sm xl:text-base leading-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                <div className="mt-6 flex w-full items-center space-x-4">
                    <button className="w-12 h-12 bg-indigo-700 rounded-full bg-indigo-700 rounded-full flex items-center justify-center items-center hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-center justify-center">
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.4375 5L16.5833 12L9.4375 19" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p aria-hidden="true" className="text-base font-semibold leading-none text-gray-800">
                        Discover more
                    </p>
                </div>
            </div>
            <div role="list" className="lg:w-2/3 flex flex-col sm:flex-row sm:space-x-6 h-full">
                <div role="listitem" tabIndex={0} className="mt-9 sm:w-1/3 flex flex-col items-center bg-indigo-100 pb-14 cursor-pointer">
                    <img src="https://i.ibb.co/RP9YtKw/stephanie-harvey-T0inbt7n-RME-unsplash-removebg-preview-1.png" alt="Aloe Vera Plant" role="img" />
                    <p className="mt-9 xl:mt-10 text-xl font-bold leading-tight text-gray-600 text-center">$90</p>
                    <p className="mt-4 text-xl font-medium leading-tight text-gray-800 text-center">Aloe vera plant</p>
                </div>
                <div role="listitem" tabIndex={0} className="mt-7 md:mt-10 lg:mt-9 sm:w-1/3 flex flex-col items-center pb-14 hover:bg-indigo-100 cursor-pointer">
                    <img src="https://i.ibb.co/rbKtS9t/galina-n-mizi-Nqv-Jx5-M-unsplash-removebg-preview-1.png" alt="Aloe Vera Plant" role="img" className="mt-10 mb-2 xl:mb-6" />
                    <p className="mt-12 lg:mt-10 text-xl font-bold leading-tight text-gray-600 text-center">$90</p>
                    <p className="mt-4 text-xl font-medium leading-tight text-gray-800 text-center">Aloe vera plant</p>
                </div>
                <div role="listitem" tabIndex={0} className="mt-9 sm:w-1/3 flex flex-col items-center pb-14 hover:bg-indigo-100 cursor-pointer">
                    <img src="https://i.ibb.co/SX2Wp40/lina-silivanova-yw-RYbp-6p8c-unsplash-removebg-preview-1.png" alt="Cactus Plant" role="img" />
                    <p className="mt-10 text-xl font-bold leading-tight text-gray-600 text-center">$90</p>
                    <p className="mt-4 text-xl font-medium leading-tight text-gray-800 text-center">Aloe vera plant</p>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
