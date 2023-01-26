const Index = () => (
    <div>
        <section className="px-6 xl:px-0">
            <div className="container mx-auto py-20">
                <div className="flex flex-col items-center justify-center w-full py-10">
                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">Our Services</h1>
                    <hr className="w-24 h-1 bg-indigo-700 rounded-full" />
                </div>
                <div className="lg:flex items-center justify-between lg:-mx-5">
                    <div className="lg:w-1/3 px-5">
                        <div className="bg-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                            <img className="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/pill.png" />
                            <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left">Medical facility</h2>
                            <p className="lg:w-2/3 mb-6 text-center">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                            <a className="text-indigo-700 underline cursor-pointer">View more</a>
                        </div>
                    </div>
                    <div className="lg:w-1/3 px-5 py-8 lg:py-0">
                        <div className="bg-indigo-700 shadow-lg text-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                            <img className="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/heart.png" />
                            <h2 className="text-2xl font-bold mb-6 text-white text-center lg:text-left">HealthCare</h2>
                            <p className="lg:w-2/3 mb-6 text-center text-white">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                            <a className="text-white underline cursor-pointer">View more</a>
                        </div>
                    </div>
                    <div className="lg:w-1/3 px-5">
                        <div className="bg-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                            <img className="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/ambulance.png" />
                            <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left">24 hours Service</h2>
                            <p className="lg:w-2/3 mb-6 text-center">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                            <a className="text-indigo-700 underline cursor-pointer">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
export default Index;
