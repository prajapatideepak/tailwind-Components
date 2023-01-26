import React from "react";

export default function index() {
  return (
    <>
      <div className="dark:bg-gray-900">
        <section className="mx-auto container py-20">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-24">
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">How it works</h1>
            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:space-x-32">
              <div className="flex justify-center items-center">
                <div className="flex flex-col flex justify-end h-72 w-3/4 mt-6 md:mt-0">
                  <div className="md:mb-6 mb-2">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold leading-10 text-gray-800 dark:text-white">Sign Up</h2>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="md:text-xl text-base leading-7 text-gray-600 dark:text-gray-300">Already have an account? Log In. Continue with Facebook. Continue with Google. Continue with Apple. By getting started, you acknowledge and agree to our terms.</p>
                  </div>
                  <div className="flex justify-between items-center md:mt-8 mt-4">
                    <div>
                      <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 w-36 h-12 rounded-sm text-white bg-gradient-to-l from-indigo-600 to-indigo-700">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex lg:justify-start justify-center items-start">
                <div className="flex justify-center items-center mb-10 lg:mt-0 w-56 md:w-full">
                  <img src="https://i.ibb.co/ZcJhy6Y/mobile.png" alt="iphone" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
