import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container px-6 py-12">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="font-bold text-2xl lg:text-4xl  xl:text-6xl leading-normal tracking-wide text-gray-800 text-center">What We Have Done So Far</h1>
                    <p className="lg:text-2xl font-normal tracking-tight lg:leading-9 py-3 lg:w-3/5 text-gray-700 text-center f-f-l">Dive into our projects from small businesses to Enterprise solutions. Record of delivering</p>
                </div>
                <div className="mt-5 lg:mt-24">
                    <div className="flex lg:flex-row flex-col items-center lg:justify-between pb-14">
                        <div className="relative flex mb-5 lg:mb-0 w-1/2">
                            <div className>
                                <div className="hidden lg:block absolute top-0 z-0">
                                    <svg className xmlns width={403} height={527} viewBox="0 0 403 527" fill="none">
                                        <rect x="-1.61167" y="1.37931" width={362} height={497} transform="matrix(-0.996996 -0.077453 -0.077453 0.996996 399.607 28.1496)" stroke="#334048" strokeWidth={3} />
                                    </svg>
                                </div>
                            </div>
                            <div className="z-10 ml-3 mt-4 lg:ml-4 lg:mt-4 hidden lg:block">
                                <img className="w-full" src="https://cdn.tuk.dev/assets/templates/Fabterior/section4(1).jpg" alt />
                            </div>
                            <div className="w-full block lg:hidden">
                                <img className="w-full" src="https://i.ibb.co/nBpjXrT/1.png" alt />
                            </div>
                        </div>
                        <div className="flex items-center lg:w-1/2">
                            <div className="hidden lg:block lg:pr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                                    <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#334048" strokeWidth={3} />
                                </svg>
                            </div>
                            <div className="lg:pt-0 lg:pt-5">
                                <div className="font-normal py-4 text-center lg:text-left f-f-d-s text-gray-800 lg:text-3xl  xl:text-5xl text-2xl">Modern Interior for Luxury Look and Feel</div>
                                <div className="py-3 xl:text-2xl text-base font-normal text-center lg:text-left xl:leading-9 text-gray-700 f-f-l">Our interior design experts work with you to create the space that you have been dreaming about. We create home interior designs that are unique to you and your preferences. Your kids will love our vibrant interior designs crafted specially to meet the preferences of the little ones. Create personalized home interior designs.</div>
                                <div className="flex lg:block justify-center w-full">
                                    <a href="javascript:void(0)">
                                        <button className="border-b-2 border-gray-800 pt-8 lg:text-2xl text-base focus:outline-none font-bold text-black-color f-f-l">View Project</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center lg:justify-between py-8">
                        <div className="relative lg:hidden flex mb-5 lg:mb-0 flex justify-center pb-8 w-1/2">
                            <img className src="https://i.ibb.co/L6fNj5M/2.png" alt />
                        </div>
                        <div className="flex items-center md:mt-4 lg:mt-0 lg:w-1/2">
                            <div className="lg:pt-5 lg:pt-0">
                                <div className="font-normal py-4 text-center lg:text-left f-f-d-s text-gray-800 lg:text-3xl  xl:text-5xl text-2xl">Modern Interior for Luxury Look and Feel</div>
                                <div className="py-3 xl:text-2xl text-base font-normal text-center lg:text-left xl:leading-9 text-gray-700 f-f-l">Our interior design experts work with you to create the space that you have been dreaming about. We create home interior designs that are unique to you and your preferences. Your kids will love our vibrant interior designs crafted specially to meet the preferences of the little ones. Create personalized home interior designs.</div>
                                <div className="flex lg:block justify-center w-full">
                                    <a href="javascript:void(0)">
                                        <button className="border-b-2 border-gray-800 pt-8 lg:text-2xl text-base focus:outline-none font-bold text-black-color f-f-l">View Project</button>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block pl-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width={151} height={4} viewBox="0 0 151 4" fill="none">
                                    <line x1="0.75" y1="1.63696" x2="150.75" y2="1.63696" stroke="#334048" strokeWidth={3} />
                                </svg>
                            </div>
                        </div>
                        <div className="relative hidden lg:flex justify-end w-1/2">
                            <div className="z-10 mt-4 ml-4">
                                <img className src="https://i.ibb.co/L6fNj5M/2.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
