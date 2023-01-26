import React from "react";
import Cards from "components/search_result_components/cards/index";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container">
                <div className="my-4 max-w-6xl bg-gray-100">
                    <div className="lg:flex justify-between">
                        <div className="pl-5 py-5">
                            <h1 className="text-xl font-semibold text-gray-700">Seller information</h1>
                            <div className="flex items-center py-5">
                                <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-12 h-12 rounded-full" />
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                    <p className="text-xs text-gray-600">Joined on 12 September 2020</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center lg:mt-0 mt-4">
                                <a href="javascript:void(0)">
                                    {" "}
                                    <button className="py-2 px-6 bg-indigo-700 text-white text-sm mr-4 focus:outline-none">Chat With Thomas</button>
                                </a>
                                <a href="javascript:void(0)">
                                    {" "}
                                    <button className="py-2 px-6 bg-transparent border border border-indigo-700 text-indigo-700 text-sm focus:outline-none">Call Thomas</button>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-60 lg:mt-0 mt-4">
                            <img src="https://cdn.tuk.dev/assets/templates/classified/map.png" className="h-full w-full" />
                        </div>
                    </div>
                </div>
                <div className="my-4 max-w-6xl bg-gray-100 p-5">
                    <h1 className="text-xl font-semibold text-gray-700">Additional details</h1>
                    <div className="lg:flex justify-between items-center mt-5">
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Brand:</h4>
                                    <h4>Iphone</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Color:</h4>
                                        <h4>Black</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Condition:</h4>
                                    <h4>Mint Condition</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Additional Items:</h4>
                                        <h4>Phone Cover and Pouch</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Owner:</h4>
                                    <h4>First owner</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Used For:</h4>
                                        <h4>8 months</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 max-w-6xl bg-gray-100 p-5">
                    <h1 className="text-xl font-semibold text-gray-700">Sellers Comments</h1>
                    <p className="text-xs leading-snug text-gray-600 py-3 lg:pr-32">
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                        <br />
                        <br />
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                    </p>
                </div>
            </div>
        </>
    );
}
