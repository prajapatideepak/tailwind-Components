import React from "react";
export default function index() {
    return (
        <div>
            <div className="text-center py-48 px-4 lg:py-20 pb-32 md:py-32 flex flex-col items-center justify-center">
                <div className="grid place-content-center">
                    <img src="https://i.ibb.co/ncJJqTq/undraw-page-not-found-su7k-2-1-1-1.png" alt="404 animation" />
                </div>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-4 md:py-8">Looks like you're lost</h1>
                <p className="text-base text-gray-600 py-2 ">
                    Sorry! We could not find you the page you are looking for. Please check URL in <br className="md:block hidden" />
                    address bar and try again.
                </p>
                <div className="my-4 md:my-8 w-full">
                    <button className="text-center text-base font-medium text-white p-4 md:w-auto w-full bg-indigo-700 border rounded-md hover:bg-indigo-800">Get back to Homepage</button>
                </div>
            </div>
        </div>


    );
}
