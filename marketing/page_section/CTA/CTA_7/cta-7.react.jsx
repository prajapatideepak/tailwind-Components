import React from "react";

export default function index() {
  return (
    <div className="md:px-8 px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full max-w-lg w-full flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700">
      <div className="flex flex-col justify-start items-start  my-10">
        <div>
          <p className="md:text-2xl text-lg font-semibold text-left leading-normal text-white">Get Webber for your organization</p>
        </div>
        <div className="mt-8">
          <p className="md:text-base text-xs text-left leading-normal text-white">There are usually about 200 words in a paragraph, but this can vary widely. Most paragraphs focus on a single idea that's expressed with an introductory sentence, then followed.</p>
        </div>
        <div className="mt-8 flex flex-row justify-start items-center space-x-4">
          <div className>
            <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white text-indigo-700 rounded-sm hover:bg-gray-100">Start trial</button>
          </div>
          <div className>
            <button className="hover:bg-white hover:text-indigo-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white">Contact sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}
