const Index = (props) => {
    return (
        <div className="py-12 px-6 md:px-12">
            <div className="items-center justify-center lg:flex hidden">
                <div className="relative">
                    <img loading="lazy" src="https://i.ibb.co/DQKs2x3/Rectangle-21.png" className="absolute left-0 top-0 z-0 h-52 w-56" />
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" className="mt-8 ml-8 relative z-10 abt-us-img" />
                    <div className="flex items-center transform -rotate-90 absolute left-0 bottom-0 -ml-20 mb-20">
                        <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-2">Restaurant</p>
                        <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                    </div>
                </div>
                <div className="about-us-card py-14 px-7 border border-color-black mx-10">
                    <p className="text-2xl font-bold text-black text-center">About Us</p>
                    <p className="text-base leading-7 text-justify text-gray-800 pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                </div>
                <div className="relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" className="abt-us-img -mt-8 mr-8 relative z-10" />
                    <img loading="lazy" src="https://i.ibb.co/DQKs2x3/Rectangle-21.png" className="absolute bottom-0 right-0 -mb-8 -mr-8 z-0 h-56" />
                    <div className="flex items-center transform -rotate-90 absolute right-0 top-0 -mr-20">
                        <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-2" />
                        <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-8">Owner</p>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="items-center justify-center lg:hidden flex flex-col md:flex-row">
                <div className="w-11/12 md:w-auto flex flex-col md:flex-row items-center">
                    <div>
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" className="md:w-48 md:h-48 w-full h-full object-cover object-center" />
                        <div className="flex items-center justify-end my-2">
                            <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                            <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-2">Restaurant</p>
                        </div>
                    </div>
                    <div className="py-7 px-3 md:px-5 md:py-9 lg:py-14 lg:px-7 border border-color-black my-4 md:mx-5">
                        <p className="text-2xl font-bold text-black text-center">About Us</p>
                        <p className="text-base xl:leading-7 text-justify text-gray-800 pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                    </div>
                    <div>
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" className="md:w-48 md:h-48 w-full h-full object-cover object-center" />
                        <div className="flex items-center justify-end right-0 top-0 my-2">
                            <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                            <p className="text-lg font-semibold leading-snug text-justify text-indigo-700">Owner</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
        </div>
    );
};
export default Index;
