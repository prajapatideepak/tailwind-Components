import React from "react";
function IndexPage() {
    return (
        <>
            <div className="w-full lg:px-0 px-4 py-16">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="sm:1/4 lg:w-1/2 xl:w-2/5">
                        <h1 className="lg:text-3xl xl:text-5xl text-2xl f-m-w text-indigo-700 text-center font-bold pt-6">Subscribe to our Newsletter</h1>
                        <p className="lg:text-xl xl::text-2xl text-lg font-normal text-center mt-4 f-m-m">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="sm:flex md:p-4 p-2 my-8 border border-indigo-700 border rounded w-full mt-8 xl:mt-16 items-center">
                            <input className="py-2 w-full md:w-7/12 lg:w-full lg:text-2xl focus:outline-none pl-2 lg:pl-3 f-m-m" placeholder="Enter your email here..." />
                            <div className="w-5/12 sm:flex justify-end mt-4 sm:mt-0">
                                <button className="f-m-m md:text-2xl text-base rounded font-normal text-white bg-indigo-700 md:py-2 md:px-8 px-4 py-2 foucus:outline-none leading-4 hover:opacity-90">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
