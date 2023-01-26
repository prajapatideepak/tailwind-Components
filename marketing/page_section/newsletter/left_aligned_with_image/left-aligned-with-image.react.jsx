import React from "react";
function Index() {
    return (
        <div className="pt-16">
            <div className="w-full bg-gray-100 py-16">
                <div className="xl:flex lg:flex md:flex flex-wrap items-center container mx-auto px-6">
                    <div className="md:w-1/2 w-full rounded-r-lg">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/newsletter/nl_2.png" alt className="h-full w-full object-cover rounded-r shadow" />
                    </div>
                    <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 xl:pl-10 lg:pl-10 w-full xl:mx-0 lg:mx-0 mx-auto">
                        <h1 className="xl:text-5xl text-3xl mb-6 text-gray-800">Subscribe.</h1>
                        <p className="text-xl mb-8 text-gray-600 leading-7">Join and get to know about exciting offers, our latest products and the latest industry updates.</p>
                        <div className="w-full flex bg-white px-5 justify-between rounded shadow xl:w-10/12 items-center">
                            <input type="text" placeholder="Your Email" id="email" aria-label="email" className="w-24 lg:w-auto bg-transparent focus:outline-none text-gray-800 py-6" />
                            <button className="flex items-center text-gray-800 border-gray-800 border-l focus:outline-none">
                                <span className="pr-3 pl-3 xl:pl-5">Subscribe</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <line x1={13} y1={18} x2={19} y2={12} />
                                    <line x1={13} y1={6} x2={19} y2={12} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
