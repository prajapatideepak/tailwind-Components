import React from "react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-10 px-5">
        <div className="relative md:block flex flex-col-reverse">
          <iframe id="iframe" className="w-full md:absolute right-0 md:h-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s" width={425} height={250} style={{ border: 0 }} allowFullScreen title="maps" />
          <div className>
            <div className="container xl:w-1/3 md:w-1/2 relative z-30 bg-gradient-to-r from-white via-white to-transparent md:pl-6 py-4 sm:py-10 lg:py-40">
              <div className="lg:w-96">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-10 text-gray-800">LET’S TALK</h1>
                <p className="text-base leading-normal text-gray-600 mt-4 lg:mt-2">
                  We are here to answer any questions <br />
                  you may have about our ui kit
                </p>
              </div>
              <div className="mt-8 lg:mt-16">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Address</h2>
                <p className="sm:w-1/2 text-base leading-normal text-gray-600 mt-2">132, Les Doulgas Cresent Avenue NY, 1504 DB</p>
              </div>
              <div className="mt-8 lg:mt-12">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Phone</h2>
                <p className="text-base leading-normal text-gray-600 mt-2">+1(888)24-2174 | +1(888)25-6666</p>
              </div>
              <div className="mt-8 lg:mt-12">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Email</h2>
                <p className="text-base leading-normal text-gray-600 mt-2">creativestudionewyork12@gmail.com</p>
              </div>
              <button className="mt-8 lg:mt-10 px-8 py-4 hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
