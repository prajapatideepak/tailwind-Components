const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-80 rounded shadow-lg p-4  dark:bg-gray-800 bg-white">
            <img alt="home-screen" src="https://i.ibb.co/M86d5SX/Rectangle-19.png" className="w-full h-full mt-2" />
            <h1 className="text-lg font-bold leading-none  dark:text-gray-100 text-gray-800 pt-6 text-center">Picture Shared</h1>
            <p className="text-sm leading-5 pt-6 text-center  dark:text-gray-100 text-gray-600">The image will be shared to all the users that are selected</p>
            <div className="px-2 pt-6">
                <button className="text-sm font-semibold leading-6 bg-indigo-700 rounded py-2 w-full hover:opacity-90 focus:outline-none text-white">Confirm</button>
            </div>
        </div>
    </div>
);
export default Index;
