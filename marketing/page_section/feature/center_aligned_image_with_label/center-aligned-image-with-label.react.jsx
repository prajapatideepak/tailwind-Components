const Index = (props) => (
    <div className="mx-auto container relative z-40">
        <div className="flex items-center justify-center">
            <hr className="w-2.5 h-16 bg-indigo-700" />
            <h1 className="text-4xl font-bold text-gray-900 pl-7">
                Dish<span className="text-2xl font-normal"> of the Day</span>
            </h1>
        </div>
        <div className="flex items-center justify-center relative">
            <img loading="lazy" src="https://i.ibb.co/jfm7RL9/Group-12.png" className="relative" />
            <div className="absolute lg:w-full w-32 sm:w-64 lg:bottom-48 sm:bottom-32 bottom-12 lg:right-56 xl:-ml-64 sm:-ml-64 -ml-32">
                <div className="flex items-center justify-center">
                    <img loading="lazy" src="https://i.ibb.co/PhGJPZS/Rectangle-34.png" alt className="absolute" />
                    <div className="md:text-xl text-xs md:ml-0 ml-4 xl:ml-2 font-bold text-white relative">EGG FENEL SALAD</div>
                </div>
            </div>
        </div>
    </div>
);
export default Index;
