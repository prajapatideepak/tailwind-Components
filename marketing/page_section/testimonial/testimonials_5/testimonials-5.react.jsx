import React from "react";

export default function index() {
  return (
    <>
      <section className="pt-16 pb-16 lg:pb-10 mx-auto lg:w-full xl:h-64 h-full bg-gradient-to-l from-indigo-600 to-indigo-700">
        <div className="mx-auto container w-full flex justify-center">
          <div className="flex xl:flex-row flex-col-reverse  xl:space-x-20  2xl:w-full md:w-10/12">
            <div className="xl:w-8/12 md:w-10/12 flex flex-row mt-4 lg:mt-5 xl:justify-end justify-start items-center ml-16">
              <div>
                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/kX78HWR/Picture.png" alt="avatar" />
              </div>
              <div className="ml-2 flex-col flex items-start justify-start">
                <div>
                  <p className="text-lg font-semibold leading-7 text-white">Jenny Wilson</p>
                </div>
                <div>
                  <p className="text-sm leading-normal hover:underline cursor-pointer text-gray-50">Vice President</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row px-5 md:px-0">
              <div className="flex justify-start items-start mx-3">
                <p className="md:text-7xl text-5xl font-extrabold leading-10 text-white">“</p>
              </div>
              <div className="text-lg font-medium leading-loose text-white w-10/12">
                <p>It can be a lot of fun simply learning interesting facts and that's exactly what this online tool will allow you to do. If you spend even a little time, you're going to quickly expand your knowledge with a lot of random fun facts. Even if you never share them with others (which you likely will at some point), it's fun to know you have that knowledge in your head.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
