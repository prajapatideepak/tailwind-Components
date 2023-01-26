const Index = () => (
    <div>
        <section>
            <div className="mt-24 max-w-4xl mx-auto relative px-10 py-10 rounded-xl bg-indigo-600 shadow-lg">
                <img className="absolute inset-0 m-auto ml-12 z-10 -mt-4" src="https://cdn.tuk.dev/assets/templates/weCare/ball-small.png" />
                <div className="lg:flex items-center z-10">
                    <div className="lg:w-1/2 lg:mr-12">
                        <h2 className="text-2xl xl:text-3xl text-white font-bold mb-4">Still undecided?</h2>
                        <p className="text-lg xl:text-2xl text-white font-normal leading-7">Get access to one month free membership on our platform</p>
                    </div>
                    <div className="lg:w-1/2 flex items-start sm:items-center lg:justify-end mt-6 xl:mt-0">
                        <button className="w-20 sm:w-auto mb-4 sm:mb-0 bg-indigo-700 hover:bg-indigo-800 p-2 xl:p-4 focus:outline-none text-white rounded-md mr-2.5 text-xs sm:text-base">Get access</button>
                        <button className="w-20 sm:w-auto border border-white p-2 xl:p-4 hover:border-indigo-800 focus:outline-none hover:bg-indigo-800 text-white rounded-md sm:mr-2.5 text-xs sm:text-base">View Plan</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
export default Index;
