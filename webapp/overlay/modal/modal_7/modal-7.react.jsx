const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
            <img alt="home-screen" src="https://i.ibb.co/K06bzQB/Frame-140.png" className="w-full h-full mt-2" />
            <h1 className="text-lg font-bold leading-none  dark:text-gray-100 text-gray-800 pt-4">Add to home screen</h1>
            <p className="pt-3 text-sm leading-5  dark:text-gray-100 text-gray-600">Create a shortcut on your home screen to easily access all your data.</p>
            <div className="flex items-center justify-center pt-6">
                <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full mr-2" />
                <div className="w-1.5 h-1.5  dark:bg-black bg-gray-300 rounded-full mr-2" />
                <div className="w-1.5 h-1.5  dark:bg-black bg-gray-300 rounded-full mr-2" />
                <div className="w-1.5 h-1.5  dark:bg-black bg-gray-300 rounded-full" />
            </div>
            <div className="flex items-center justify-between pt-8">
                <div className="flex items-center cursor-pointer hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4B5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <span className="pl-1 text-sm font-semibold leading-6  dark:text-gray-100 text-gray-600">Back</span>
                </div>
                <button className="text-sm font-semibold leading-6 bg-indigo-700 rounded py-2 px-12 hover:opacity-90 focus:outline-none text-white">Next</button>
            </div>
        </div>
    </div>
);
export default Index;
