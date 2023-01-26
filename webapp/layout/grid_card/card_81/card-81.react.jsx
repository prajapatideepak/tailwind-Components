import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex justify-center py-12 px-2 sm:px-6">
                <div className="max-w-sm rounded overflow-hidden relative">
                    <img className="w-full" src="https://i.ibb.co/VpxTFxq/fluffy-dog.png" alt srcSet />
                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-7">
                        <p className="text-lg leading-6 text-white sm:w-11/12">Taking Billy to the vet today, he doesn’t seem excited 😒</p>
                        <div className="mt-5 flex items-center">
                            <div className="flex items-center text-white sm:justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-8 sm:w-auto mr-4 icon icon-tabler icon-tabler-message-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                    <line x1={12} y1={11} x2={12} y2="11.01" />
                                    <line x1={8} y1={11} x2={8} y2="11.01" />
                                    <line x1={16} y1={11} x2={16} y2="11.01" />
                                </svg>
                                <p className="text-lg font-semibold leading-4 text-white">14</p>
                            </div>
                            <div className="flex items-center sm:justify-end text-white ml-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer mr-4 w-8 sm:w-auto icon icon-tabler icon-tabler-heart" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                                <p className="text-lg font-semibold leading-4 text-right text-white">67</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
