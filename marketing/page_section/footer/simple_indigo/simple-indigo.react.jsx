import React from "react";
function Index() {
    return (
        <div className="pt-16">
            <div className="w-full bg-indigo-700 py-12">
                <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
                    <div className="xl:w-3/6 sm:w-full mb-6 xl:mb-0">
                        <p className="text-white text-center xl:text-left">2020 The Good Company. All Rights Reserved</p>
                    </div>
                    <div className="xl:w-3/6 sm:w-full">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href>Security</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
