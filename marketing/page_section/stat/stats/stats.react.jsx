import React from "react";

export default function Home() {
    return (
        <>
            <div className="mx-auto container  relative px-4" style={{ height: 800 }}>
                <div className="flex flex-col h-full items-center justify-between">
                    <div>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold mt-24 leading-10 text-gray-800 text-center">
                            The best of the market
                        </h1>
                        <div className="flex items-center justify-center ">
                            <p role="contentinfo" className="text-base md:w-7/12 leading-6 text-center text-gray-600 mt-6">
                                The graph is the original infographic. It’s the ideal vehicle for conveying complex information. Besides that, it’s easier to make than an infographic, quicker to create than a narrative, and an ideal means of communicating four basic types
                            </p>
                        </div>
                    </div>
                    <div className="pb-10">
                        <div className="h-full flex items-center justify-center">
                            <img src="https://i.ibb.co/RBfMCx4/Group-220.png" alt="graph decoration image" className="w-full h-auto absolute  sm:-mt-0 -mt-48" />
                            <div className="md:flex md:flex-wrap relative z-20 items-center sm:pt-64 pt-32">
                                <div>
                                    <div className="flex flex-col space-y-5 items-center justify-end w-32 h-24">
                                        <p role="contentinfo" className="md:text-5xl text-2xl font-bold leading-10 text-gray-800">
                                            130+
                                        </p>
                                        <p role="contentinfo" className="md:text-2xl text-xl leading-normal text-gray-800">
                                            Sales
                                        </p>
                                    </div>
                                </div>
                                <div className="md:mx-36 md:my-0 my-8">
                                    <div className="flex flex-col space-y-5 items-center justify-end w-32 h-24">
                                        <p role="contentinfo" className="md:text-5xl text-2xl font-bold leading-10 text-gray-800">
                                            150+
                                        </p>
                                        <p role="contentinfo" className="md:text-2xl text-xl leading-normal text-gray-800">
                                            Downloads
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col space-y-5 items-center justify-end w-32 h-24">
                                        <p role="contentinfo" className="md:text-5xl text-2xl font-bold leading-10 text-gray-800">
                                            70+
                                        </p>
                                        <p role="contentinfo" className="md:text-2xl text-xl leading-normal text-gray-800">
                                            Subscriptions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
