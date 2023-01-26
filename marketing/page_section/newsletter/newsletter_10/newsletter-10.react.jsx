import React from "react";

const NewsletterVII = () => {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="mx-4 md:w-10/12 flex items-center justify-center relative">
                <img className="hidden lg:block w-full h-full absolute rounded-md" src="https://i.ibb.co/hRFzFwd/Group-184.png" alt="background" />
                <img className="hidden sm:block lg:hidden w-full h-full absolute rounded-md" src="https://i.ibb.co/nBfFP0h/i-Pad-mini-01-1.png" alt="background" />
                <img className="sm:hidden w-full h-full absolute rounded-md" src="https://i.ibb.co/d5F32YJ/bg-small.png" alt="background" />
                <div className="relative z-10 w-full">
                    <div className="flex flex-col justify-start py-8 lg:px-10 md:px-6 px-4">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white">The latest web and mobile UI components in your inbox for free</h1>
                        <p className="pt-6 pb-10 md:pt-4 md:pb-12 text-base font-medium leading-none text-gray-200">Join 27000 designer and product people who get our weekly update </p>
                        <div className="pb-6 md:pb-4 flex flex-col justify-center items-center md:flex-row md:justify-start gap-6 md:gap-4">
                            <input type="text" placeholder="Your Name" className="placeholder-gray-300 border rounded-md p-4 h-12 w-80 focus:outline-none " />
                            <button className="flex items-center justify-center w-80 md:w-28 h-12 bg-indigo-700 rounded-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50 hover:bg-indigo-800">Subscribe</button>
                        </div>
                        <p className="text-base font-medium leading-none text-gray-200">
                            We never send spam you can instanly unsubscribe us. <u className="cursor-pointer no-underline hover:underline">Here’s what our email looks like</u>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterVII;
