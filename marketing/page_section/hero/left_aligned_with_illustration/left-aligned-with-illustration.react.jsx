import React, { useState } from "react";
function IndexPage() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="mx-auto container relative px-6 xl:px-0">
                <nav>
                    <div className="lg:flex justify-between w-full py-12 hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width={120} height={50} viewBox="0 0 120 50" fill="none">
                            <path
                                d="M43.584 15.8C43.32 15.8 43.2 15.944 43.2 16.184V34.616C43.2 34.856 43.32 35 43.584 35H46.08C46.32 35 46.464 34.856 46.464 34.616V16.184C46.464 15.944 46.32 15.8 46.08 15.8H43.584ZM56.9899 15.8C56.7259 15.8 56.6059 15.944 56.6059 16.184V26.312H56.4619L52.8139 16.112C52.7419 15.896 52.5979 15.8 52.3819 15.8H50.0059C49.7659 15.8 49.6219 15.944 49.6219 16.184V34.616C49.6219 34.856 49.7659 35 50.0059 35H52.5019C52.7659 35 52.8859 34.856 52.8859 34.616V24.44H53.0059L56.6779 34.688C56.7499 34.904 56.8939 35 57.1099 35H59.4859C59.7259 35 59.8699 34.856 59.8699 34.616V16.184C59.8699 15.944 59.7259 15.8 59.4859 15.8H56.9899ZM72.6041 16.184C72.6041 15.944 72.5081 15.8 72.2201 15.8H63.3881C63.1721 15.8 63.0281 15.944 63.0281 16.184V34.616C63.0281 34.856 63.1721 35 63.3881 35H72.2201C72.5081 35 72.6041 34.856 72.6041 34.616V32.216C72.6041 31.952 72.5081 31.832 72.2201 31.832H66.2201V26.984H70.8041C71.0441 26.984 71.1881 26.84 71.1881 26.576V24.2C71.1881 23.936 71.0441 23.792 70.8041 23.792H66.2201V18.992H72.2201C72.5081 18.992 72.6041 18.824 72.6041 18.584V16.184ZM85.3843 19.256C85.3843 17 84.1843 15.8 81.9283 15.8H75.9043C75.6643 15.8 75.5203 15.944 75.5203 16.184V34.616C75.5203 34.856 75.6643 35 75.9043 35H78.4003C78.6403 35 78.7843 34.856 78.7843 34.616V28.568H80.4403L82.0483 34.664C82.0963 34.88 82.2163 35 82.4563 35H84.9523C85.2163 35 85.3603 34.856 85.2883 34.568L83.6323 28.28C84.7843 27.776 85.3843 26.72 85.3843 25.112V19.256ZM78.7843 25.4V18.968H81.1603C81.7843 18.968 82.1203 19.304 82.1203 19.928V24.44C82.1203 25.064 81.7843 25.4 81.1603 25.4H78.7843ZM88.4321 15.8C88.1921 15.8 88.0481 15.944 88.0481 16.184V18.584C88.0481 18.824 88.1921 18.968 88.4321 18.968H91.2161V34.616C91.2161 34.88 91.3601 35 91.6001 35H94.0961C94.3601 35 94.4801 34.88 94.4801 34.616V18.968H97.2641C97.5281 18.968 97.6481 18.824 97.6481 18.584V16.184C97.6481 15.944 97.5281 15.8 97.2641 15.8H88.4321ZM100.701 15.8C100.437 15.8 100.317 15.944 100.317 16.184V34.616C100.317 34.856 100.437 35 100.701 35H103.197C103.437 35 103.581 34.856 103.581 34.616V16.184C103.581 15.944 103.437 15.8 103.197 15.8H100.701ZM118.307 35C118.595 35 118.691 34.856 118.643 34.592L114.659 16.136C114.611 15.896 114.467 15.8 114.251 15.8H110.915C110.699 15.8 110.555 15.896 110.507 16.136L106.523 34.592C106.451 34.856 106.571 35 106.835 35H109.403C109.619 35 109.739 34.88 109.787 34.664L110.435 31.16H114.707L115.379 34.664C115.427 34.88 115.547 35 115.763 35H118.307ZM114.107 28.376H111.035L112.571 20L114.107 28.376Z"
                                fill="#805AD5"
                            />
                            <path d="M30.2314 4.05859H27.7971C26.9195 4.05859 26.2082 4.76997 26.2082 5.6475V14.4959C26.2082 15.3734 26.9195 16.0848 27.7971 16.0848H30.2314C31.109 16.0848 31.8203 15.3734 31.8203 14.4959V5.6475C31.8203 4.76997 31.109 4.05859 30.2314 4.05859Z" fill="#805AD5" />
                            <path d="M21.129 49.1975V40.8149H31.4477L22.4978 49.7651C22.3856 49.8774 22.2427 49.9538 22.0871 49.9846C21.9315 50.0155 21.7702 49.9997 21.6236 49.9389C21.4771 49.8781 21.3519 49.7751 21.2638 49.6431C21.1758 49.5113 21.1289 49.3561 21.129 49.1975Z" fill="#805AD5" />
                            <path d="M32.0006 40.2939H21.129V41.2987H30.9436L32.0006 40.2939Z" fill="#324293" />
                            <path d="M34.2356 15.4751L19.3858 0.623951C18.9842 0.224336 18.4407 0 17.8742 0C17.3076 0 16.7641 0.224336 16.3625 0.623951L1.51304 15.4751C0.606883 16.4829 0.0729477 17.7705 0 19.1238V21.7397C8.11281 27.7757 17.9591 31.028 28.0709 31.0117C30.6425 31.0122 33.2099 30.8032 35.7477 30.3867V19.1238C35.6739 17.7709 35.1406 16.4836 34.2356 15.4751Z" fill="#805AD5" />
                            <path d="M28.0714 33.417C17.9596 33.433 8.11335 30.1807 0.000488281 24.145V38.2758C0.00232333 38.8423 0.228147 39.385 0.628665 39.7854C1.02918 40.186 1.57187 40.4118 2.13828 40.4136H33.6106C34.1769 40.4118 34.7195 40.1858 35.1202 39.7854C35.5206 39.3847 35.7463 38.8421 35.7482 38.2758V32.792C33.2104 33.2084 30.643 33.4175 28.0714 33.417Z" fill="#805AD5" />
                        </svg>
                        <div className="lg:w-2/3 xl:w-1/2">
                            <ul className="font-normal text-lg flex justify-between items-center text-gray-700">
                                <li className="text-indigo-700 cursor-pointer">
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">Insurances</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">Claims</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">Testimonials</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">FAQ’s</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="lg:hidden py-4">
                    <div className="flex py-2 justify-between items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={120} height={50} viewBox="0 0 120 50" fill="none">
                                <path
                                    d="M43.584 15.8C43.32 15.8 43.2 15.944 43.2 16.184V34.616C43.2 34.856 43.32 35 43.584 35H46.08C46.32 35 46.464 34.856 46.464 34.616V16.184C46.464 15.944 46.32 15.8 46.08 15.8H43.584ZM56.9899 15.8C56.7259 15.8 56.6059 15.944 56.6059 16.184V26.312H56.4619L52.8139 16.112C52.7419 15.896 52.5979 15.8 52.3819 15.8H50.0059C49.7659 15.8 49.6219 15.944 49.6219 16.184V34.616C49.6219 34.856 49.7659 35 50.0059 35H52.5019C52.7659 35 52.8859 34.856 52.8859 34.616V24.44H53.0059L56.6779 34.688C56.7499 34.904 56.8939 35 57.1099 35H59.4859C59.7259 35 59.8699 34.856 59.8699 34.616V16.184C59.8699 15.944 59.7259 15.8 59.4859 15.8H56.9899ZM72.6041 16.184C72.6041 15.944 72.5081 15.8 72.2201 15.8H63.3881C63.1721 15.8 63.0281 15.944 63.0281 16.184V34.616C63.0281 34.856 63.1721 35 63.3881 35H72.2201C72.5081 35 72.6041 34.856 72.6041 34.616V32.216C72.6041 31.952 72.5081 31.832 72.2201 31.832H66.2201V26.984H70.8041C71.0441 26.984 71.1881 26.84 71.1881 26.576V24.2C71.1881 23.936 71.0441 23.792 70.8041 23.792H66.2201V18.992H72.2201C72.5081 18.992 72.6041 18.824 72.6041 18.584V16.184ZM85.3843 19.256C85.3843 17 84.1843 15.8 81.9283 15.8H75.9043C75.6643 15.8 75.5203 15.944 75.5203 16.184V34.616C75.5203 34.856 75.6643 35 75.9043 35H78.4003C78.6403 35 78.7843 34.856 78.7843 34.616V28.568H80.4403L82.0483 34.664C82.0963 34.88 82.2163 35 82.4563 35H84.9523C85.2163 35 85.3603 34.856 85.2883 34.568L83.6323 28.28C84.7843 27.776 85.3843 26.72 85.3843 25.112V19.256ZM78.7843 25.4V18.968H81.1603C81.7843 18.968 82.1203 19.304 82.1203 19.928V24.44C82.1203 25.064 81.7843 25.4 81.1603 25.4H78.7843ZM88.4321 15.8C88.1921 15.8 88.0481 15.944 88.0481 16.184V18.584C88.0481 18.824 88.1921 18.968 88.4321 18.968H91.2161V34.616C91.2161 34.88 91.3601 35 91.6001 35H94.0961C94.3601 35 94.4801 34.88 94.4801 34.616V18.968H97.2641C97.5281 18.968 97.6481 18.824 97.6481 18.584V16.184C97.6481 15.944 97.5281 15.8 97.2641 15.8H88.4321ZM100.701 15.8C100.437 15.8 100.317 15.944 100.317 16.184V34.616C100.317 34.856 100.437 35 100.701 35H103.197C103.437 35 103.581 34.856 103.581 34.616V16.184C103.581 15.944 103.437 15.8 103.197 15.8H100.701ZM118.307 35C118.595 35 118.691 34.856 118.643 34.592L114.659 16.136C114.611 15.896 114.467 15.8 114.251 15.8H110.915C110.699 15.8 110.555 15.896 110.507 16.136L106.523 34.592C106.451 34.856 106.571 35 106.835 35H109.403C109.619 35 109.739 34.88 109.787 34.664L110.435 31.16H114.707L115.379 34.664C115.427 34.88 115.547 35 115.763 35H118.307ZM114.107 28.376H111.035L112.571 20L114.107 28.376Z"
                                    fill="#805AD5"
                                />
                                <path d="M30.2314 4.05859H27.7971C26.9195 4.05859 26.2082 4.76997 26.2082 5.6475V14.4959C26.2082 15.3734 26.9195 16.0848 27.7971 16.0848H30.2314C31.109 16.0848 31.8203 15.3734 31.8203 14.4959V5.6475C31.8203 4.76997 31.109 4.05859 30.2314 4.05859Z" fill="#805AD5" />
                                <path d="M21.129 49.1975V40.8149H31.4477L22.4978 49.7651C22.3856 49.8774 22.2427 49.9538 22.0871 49.9846C21.9315 50.0155 21.7702 49.9997 21.6236 49.9389C21.4771 49.8781 21.3519 49.7751 21.2638 49.6431C21.1758 49.5113 21.1289 49.3561 21.129 49.1975Z" fill="#805AD5" />
                                <path d="M32.0006 40.2939H21.129V41.2987H30.9436L32.0006 40.2939Z" fill="#324293" />
                                <path d="M34.2356 15.4751L19.3858 0.623951C18.9842 0.224336 18.4407 0 17.8742 0C17.3076 0 16.7641 0.224336 16.3625 0.623951L1.51304 15.4751C0.606883 16.4829 0.0729477 17.7705 0 19.1238V21.7397C8.11281 27.7757 17.9591 31.028 28.0709 31.0117C30.6425 31.0122 33.2099 30.8032 35.7477 30.3867V19.1238C35.6739 17.7709 35.1406 16.4836 34.2356 15.4751Z" fill="#805AD5" />
                                <path d="M28.0714 33.417C17.9596 33.433 8.11335 30.1807 0.000488281 24.145V38.2758C0.00232333 38.8423 0.228147 39.385 0.628665 39.7854C1.02918 40.186 1.57187 40.4118 2.13828 40.4136H33.6106C34.1769 40.4118 34.7195 40.1858 35.1202 39.7854C35.5206 39.3847 35.7463 38.8421 35.7482 38.2758V32.792C33.2104 33.2084 30.643 33.4175 28.0714 33.417Z" fill="#805AD5" />
                            </svg>
                        </div>
                        <div className=" flex items-center">
                            {show && (
                                <ul id="list" className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Insurances</span>
                                        </a>
                                    </li>
                                    <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Claims</span>
                                        </a>
                                    </li>
                                    <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Testimonials</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">FAQ’s</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Pricing</span>
                                        </a>
                                    </li>
                                </ul>
                            )}
                            <div className="xl:hidden " onClick={() => setShow(!show)}>
                                {show ? (
                                    <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                ) : (
                                    <div className=" close-m-menu" onclick="MenuHandler(false)">
                                        <svg onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center">
                    <div className="xl:mt-8">
                        <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold">
                            <h1 className="mt-2 lg:mt-0">Trustworthy</h1>
                            <h1 className="mt-2 lg:mt-0 text-indigo-700">Insurance</h1>
                            <h1 className="mt-2 lg:mt-0">Providers</h1>
                        </div>
                        <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">Jubilee Life Insurance makes it to the Top 25 Companies lists </h2>
                        <button className="hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-indigo-700 rounded-3xl">
                            Get a quote
                            <svg className="ml-8" xmlns="http://www.w3.org/2000/svg" width={26} height={17} viewBox="0 0 26 17" fill="none">
                                <path d="M1.33333 8.6665H24.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 15.3332L24.6667 8.6665" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 2L24.6667 8.66667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full custom-height bg-indigo-100 mt-8 lg:mt-0 rounded-3xl relative">
                        <img class="w-full" src="https://i.ibb.co/80XYkkr/image.png" alt="hero image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
