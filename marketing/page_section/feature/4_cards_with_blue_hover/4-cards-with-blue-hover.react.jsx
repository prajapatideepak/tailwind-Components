import React from "react";
function IndexPage() {
    return (
        <>
            <div className="my-28 container mx-auto">
                <div className="flex justify-center w-full items-center">
                    <div className="w-11/12 f-f-p">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            <div className="py-10 px-5 rounded-3xl bg-indigo-700 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={49} viewBox="0 0 32 49" fill="none">
                                    <path d="M2 9.27795H22.3636C24.3889 9.27795 26.3313 10.0632 27.7634 11.4609C29.1955 12.8586 30 14.7542 30 16.7309C30 18.7075 29.1955 20.6032 27.7634 22.0009C26.3313 23.3986 24.3889 24.1838 22.3636 24.1838C24.3889 24.1838 26.3313 24.969 27.7634 26.3667C29.1955 27.7644 30 29.6601 30 31.6367C30 33.6133 29.1955 35.509 27.7634 36.9067C26.3313 38.3044 24.3889 39.0896 22.3636 39.0896H2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.09082 9.27795V39.0896" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.09082 24.1838H22.3635" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.63672 1.82507V9.27795" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.8184 1.82507V9.27795" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.63672 39.0896V46.5425" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.8184 39.0896V46.5425" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="mt-5">
                                    <h1 className="text-white text-2xl tracking-wide font-bold">Coins</h1>
                                    <h2 className="text-white mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Pharetra eget donec</h2>
                                </div>
                            </div>
                            <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={44} height={51} viewBox="0 0 44 51" fill="none">
                                    <path d="M32 2.31775L42 12.5899L32 22.8621" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 12.5897H42" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 27.9982L2 38.2703L12 48.5425" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 38.2704H24.5" stroke="#052E47" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="mt-5">
                                    <h1 className="text-gray-900 text-2xl tracking-wide font-bold">Transactions</h1>
                                    <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                                </div>
                            </div>
                            <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={44} height={47} viewBox="0 0 44 47" fill="none">
                                    <path
                                        d="M39.5 33.9912V41.9047C39.5 42.6043 39.2366 43.2752 38.7678 43.7699C38.2989 44.2646 37.663 44.5425 37 44.5425H7C5.67392 44.5425 4.40215 43.9867 3.46447 42.9973C2.52678 42.0079 2 40.666 2 39.2668V7.61293M34.5 12.8886V4.97511C34.5 4.27551 34.2366 3.60457 33.7678 3.10988C33.2989 2.61519 32.663 2.33728 32 2.33728H7C5.67392 2.33728 4.40215 2.89311 3.46447 3.88248C2.52678 4.87186 2 6.21374 2 7.61293C2 9.01212 2.52678 10.354 3.46447 11.3434C4.40215 12.3328 5.67392 12.8886 7 12.8886H37C37.663 12.8886 38.2989 13.1665 38.7678 13.6612C39.2366 14.1559 39.5 14.8268 39.5 15.5264V23.4399L34.5 12.8886Z"
                                        stroke="#052E47"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M42 23.4399V33.9912H32C30.6739 33.9912 29.4021 33.4354 28.4645 32.446C27.5268 31.4566 27 30.1148 27 28.7156C27 27.3164 27.5268 25.9745 28.4645 24.9851C29.4021 23.9958 30.6739 23.4399 32 23.4399H42Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="mt-5">
                                    <h1 className="text-gray-900 text-2xl tracking-wide font-bold">Wallets</h1>
                                    <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                                </div>
                            </div>
                            <div className="py-10 px-5 rounded-3xl bg-transparent cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} viewBox="0 0 48 49" fill="none">
                                    <path d="M24 46.5425C36.4264 46.5425 46.5 36.5321 46.5 24.1838C46.5 11.8354 36.4264 1.82507 24 1.82507C11.5736 1.82507 1.5 11.8354 1.5 24.1838C1.5 36.5321 11.5736 46.5425 24 46.5425Z" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 16.7308H45" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 31.6366H45" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.7501 1.82507C18.5385 8.53172 16.3057 16.2784 16.3057 24.1838C16.3057 32.0892 18.5385 39.8358 22.7501 46.5425" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.25 1.82507C29.4616 8.53172 31.6945 16.2784 31.6945 24.1838C31.6945 32.0892 29.4616 39.8358 25.25 46.5425" stroke="#052E47" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="mt-5">
                                    <h1 className="text-gray-900 text-2xl tracking-wide font-bold">Countries</h1>
                                    <h2 className="text-gray-700 mt-2 leading-6 text-base tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eget donec</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
