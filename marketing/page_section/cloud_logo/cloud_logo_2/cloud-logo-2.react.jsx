import React from "react";

export default function MyApp() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center  py-12 mx-6">
                    <div className="md:w-1/2 flex flex-col justify-center ">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 text-left sm:text-center md:text-left w-11/12">Meet our partners</h1>
                        <p className="text-base leading-normal text-gray-600 mt-4 lg:w-8/12 text-left sm:text-center md:text-left">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs.</p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <div role="list" aria-label="Partners" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/Microsoft.png" className="flex flex-shrink-0" alt="Microsoft" role="img" />
                            </div>
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/Adidas.png" className="flex flex-shrink-0" alt="Adidas" role="img" />
                            </div>
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/Pinterest.png" className="flex flex-shrink-0" alt="Pinterest" role="img" />
                            </div>
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/LinkedIn.png" className="flex flex-shrink-0" alt="LinkedIn" role="img" />
                            </div>
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/Spotify.png" className="flex flex-shrink-0" alt="Spotify" role="img" />
                            </div>
                            <div role="listitem" className="bg-white shadow rounded-md  flex justify-center items-center w-80 sm:w-60 md:w-40 h-36 xl:w-48 xl:h-48">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/Medium.png" alt="Medium" role="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
