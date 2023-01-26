import React from "react";

export default function index() {
  return (
    <div className="dark:bg-gray-900">
      <div className="pb-20">
        <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">By the numbers</h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">5 years, consistent quality and you get results. No matter what</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">40+</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Happy Clients</p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">540+</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Projects Completed</p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">300</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Dedicated Members</p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">25+</h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
