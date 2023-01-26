import React, { useState } from "react";
function Index() {
    const [question, setquestion] = useState(0);
    return (
        <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-full mx-auto">
                <div className="pb-12">
                    <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                    <h1 className="xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                </div>
                <div>
                    <div className="mx-auto shadow">
                        <div className="xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
                            <div>
                                <div className="flex py-6 justify-between items-center border-b border-gray-200">
                                    <h1 className="text-base md:text-xl lg:text-2xl text-indigo-700 font-bold">Interface and Display</h1>
                                    <div data-menu className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                        {question === 0 ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 0 && (
                                    <ul>
                                        <li className="xl:py-8 lg:py-8 md:py-8 sm:py-8 py-4">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 text-2xl xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full text-gray-600 text-base">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div>
                                <div className="flex py-6 justify-between items-center border-b border-gray-200">
                                    <h1 className="text-base md:text-xl lg:text-2xl text-indigo-700 font-bold">Interface and Display</h1>
                                    <div data-menu className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                        {question === 1 ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {question === 1 && (
                                    <ul>
                                        <li className="xl:py-8 lg:py-8 md:py-8 sm:py-8 py-4">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product</p>
                                        </li>
                                        <li className="py-4 md:py-6 lg:py-8">
                                            <p className="text-gray-800 text-2xl xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                            <p className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full text-gray-600 text-base">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
