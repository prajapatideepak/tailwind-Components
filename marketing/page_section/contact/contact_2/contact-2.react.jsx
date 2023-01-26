import React from "react";

export default function Home() {
    return (
        <>
            <div className="container mx-auto flex justify-center items-center">
                <div className="py-20 lg:py-24">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 lg:px-16 text-center uppercase">Get in touch with us</h1>
                    <div className="mt-10 md:mt-16 w-full h-full px-4 sm:px-0">
                        <input type="email" placeholder="Your Email" className="bg-gray-100 rounded w-full p-4 text-base leading-none text-gray-600 focus:outline-none border  border-transparent focus:border-gray-600" />
                        <textarea type="text" aria-label=" your message" placeholder="Your Message" className="bg-gray-100 rounded text-base leading-none text-gray-600 mt-4 w-full h-64 pt-4 pl-4 resize-none focus:outline-none border border-2 border-transparent focus:border-gray-600" defaultValue={""} />
                        <button className="bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium leading-none text-white py-4 w-full mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Your Message</button>
                    </div>
                    <div className="mt-20 md:mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 ">
                        <div>
                            <div className="flex justify-center">
                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                                    <path
                                        d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                                        fill="#4338CA"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
                            <div className="flex justify-center">
                                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132, Les Doulgas Cresent Avenue NY, 1504 DB</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                                    <path
                                        d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                                        fill="#4338CA"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
                            <div className="flex justify-center">
                                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132, Los Vegas Cresent Avenue NY, 1504 DB</p>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="flex justify-center">
                                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                                    <path
                                        d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                                        fill="#4338CA"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
                            <div className="justify-center flex">
                                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132,Los Angelos Cresent Avenue NY, 1504 DB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
