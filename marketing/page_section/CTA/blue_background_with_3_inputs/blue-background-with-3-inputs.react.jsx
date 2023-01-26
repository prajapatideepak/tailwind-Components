import React from "react";
function IndexPage() {
    return (
        <>
            <div className="px-6 mt-12  bg-gradient-to-br from-indigo-700 to-indigo-800 py-16">
                <div className="mx-auto container">
                    <div className="xl:flex justify-between w-full items-center">
                        <div className="flex flex-col text-white">
                            <h1 className="text-2xl font-medium">Get Onboard Now</h1>
                            <h2 className="text-sm italic pt-3">Latest updates for you</h2>
                        </div>
                        <div className="lg:flex lg:items-center">
                            <input className="mt-4 xl:mt-0 h-12 bg-indigo-900 pl-4 placeholder-white text-white focus:outline-none text-lg mr-8" placeholder="Your Name" type="text" name id />
                            <input className="mt-4 xl:mt-0 h-12 bg-indigo-900 pl-4 placeholder-white text-white focus:outline-none text-lg mr-8" placeholder="Email" type="email" name id />
                            <input className="mt-4 xl:mt-0 h-12 w-32 bg-indigo-900 pl-4 placeholder-white text-white focus:outline-none text-lg mr-8" placeholder="Zip Code" type="text" name id />
                            <button className="hover:opacity-90 mt-4 xl:mt-0 py-3 px-4 bg-red-600 text-sm uppercase text-white focus:outline-none">JOIN US TODAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
