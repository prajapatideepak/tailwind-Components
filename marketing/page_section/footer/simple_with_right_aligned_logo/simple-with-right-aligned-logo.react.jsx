import React from "react";
function IndexPage() {
    return (
        <>
            <div className="w-full bg-indigo-700 mt-12 lg:mt-24 lg:px-0 px-4">
                <div className="container mx-auto py-20">
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:w-1/4">
                            <img src="https://cdn.tuk.dev/assets/components/111220/ftr-14/logo.png" />
                        </div>
                        <div className="lg:w-3/4 lg:flex items-center justify-end">
                            <ul className="lg:flex f-m-m justify-end">
                                <a href>
                                    <li className="text-2xl font-bold lg:mb-0 mb-6 lg:mt-0 mt-6 text-white pr-8">Home</li>
                                </a>
                                <a href>
                                    <li className="text-2xl font-medium lg:mb-0 mb-6 text-white pr-8">Tour</li>
                                </a>
                                <a href>
                                    <li className="text-2xl font-medium lg:mb-0 mb-6 text-white pr-8">Explore</li>
                                </a>
                                <a href>
                                    <li className="text-2xl font-medium lg:mb-0 mb-6 text-white pr-8">About Us</li>
                                </a>
                                <a href>
                                    <li className="text-2xl font-medium lg:mb-0 mb-6 text-white">Contact</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
