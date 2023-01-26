import React from "react";

function MyApp() {
    return (
        <div className="bg-gray-50">
            <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
                <div className="lg:w-1/2 xl:mr-12 lg:mr-6">
                    <img tabIndex={0} src="https://i.ibb.co/n0f7Np4/pexels-anna-shvets-4588047-1.png" alt="image of a dog with heart" className="w-full h-full" />
                    <div className="flex flex-wrap items-center mt-8">
                        <div arial-label="Address" className="mr-6 border md:w-auto w-full rounded border-gray-200 py-6 pr-9 pl-6">
                            <p className="text-base font-semibold leading-4 text-gray-900">Los Angeles</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                            <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                        </div>
                        <div className="mr-6 border md:w-auto w-full md:mt-0 mt-4  rounded border-gray-200 py-6 pr-9 pl-6">
                            <p className="text-base font-semibold leading-4 text-gray-900">Berln</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                            <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                        </div>
                        <div className="mr-6 xl:mt-0 md:w-auto w-full lg:mt-4 md:mt-0 mt-4 border rounded border-gray-200 py-6 pr-9 pl-6">
                            <p className="text-base font-semibold leading-4 text-gray-900">Maldives</p>
                            <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                            <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 xl:pl-12 lg:pl-6 lg:pt-0 pt-4">
                    <h1 aria-label="Get in touch" role="heading" className="text-3xl font-bold   text-gray-900">
                        Get in touch
                    </h1>
                    <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600 lg:block hidden">
                        It is a long established fact that a reader <br /> will be distracted by the readable{" "}
                    </p>
                    <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600 lg:hidden">
                        It is a long established fact that a reader will be distracted by the readable{" "}
                    </p>
                    <div className="xl:flex items-center justify-between mt-10">
                        <div>
                            <p className="text-base font-medium leading-4 mb-4 text-gray-800">First Name</p>
                            <input type="name" aria-label="Please input first name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. William" />
                        </div>
                        <div className="xl:ml-6 xl:mt-0 mt-4">
                            <p className="text-base font-medium leading-4 mb-4 text-gray-800">Last Name</p>
                            <input type="name" aria-label="Please input Last name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. Smith" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-base font-medium leading-4 mb-4 text-gray-800">Email Address</p>
                        <input type="email" aria-label="Please enter email" className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. william.smith@doeco.com" />
                    </div>
                    <div className="mt-6">
                        <p className="text-base font-medium leading-4 mb-4 text-gray-800">Message </p>
                        <textarea aria-label="Please leave comments" className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" defaultValue={""} />
                    </div>
                    <button role="button" arial-label="send message " className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 text-base font-semibold leading-4 py-6 px-8 text-white bg-indigo-700 rounded mt-12">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
