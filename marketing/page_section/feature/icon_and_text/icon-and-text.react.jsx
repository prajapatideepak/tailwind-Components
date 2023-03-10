import React from "react";
function Index() {
    return (
        <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
                <div className="flex items-center flex-col px-4">
                    <p className="uppercase text-lg text-center text-gray-600 leading-normal">in few easy steps</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 pt-4">Create Beautiful Landing Pages &amp; Web Apps in a Jiffy</h2>
                </div>
                <div className="mt-20 flex flex-wrap justify-between px-4">
                    <div className="flex sm:w-full md:w-5/12 pb-20">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={4} width={18} height={4} rx={2} />
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                    <line x1={10} y1={12} x2={14} y2={12} />
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h4 className="text-lg font-bold leading-tight text-gray-800">Ready to use components</h4>
                            <p className="text-base text-gray-600 leading-normal pt-2">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                        </div>
                    </div>
                    <div className="flex sm:w-full md:w-5/12 pb-20">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h4 className="text-lg font-bold leading-tight text-gray-800">Hight Quality UI you can reply on</h4>
                            <p className="text-base text-gray-600 leading-normal pt-2">Modify the visual appearance of your site ??? including colors, fonts, margins and other style-related properties ??? with a sophisticated style.</p>
                        </div>
                    </div>
                    <div className="flex sm:w-full md:w-5/12 pb-20">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h4 className="text-lg font-bold leading-tight text-gray-800">Coded by Developers for Developers</h4>
                            <p className="text-base text-gray-600 leading-normal pt-2">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product.</p>
                        </div>
                    </div>
                    <div className="flex sm:w-full md:w-5/12 pb-20">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={4} width={18} height={12} rx={1} />
                                    <line x1={7} y1={20} x2={17} y2={20} />
                                    <line x1={9} y1={16} x2={9} y2={20} />
                                    <line x1={15} y1={16} x2={15} y2={20} />
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h4 className="text-lg font-bold leading-tight text-gray-800">The Last UI kit you???ll ever need</h4>
                            <p className="text-base text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;
