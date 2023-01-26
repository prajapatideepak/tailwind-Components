const Index = (props) => (
    <div>
        <div className="flex items-center justify-center py-8 px-4">
            <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
                <h1 className="  dark:text-gray-100 text-gray-800 font-bold text-lg">Privacy Notice</h1>
                <p className="pt-6  text-xs font-semibold text-indigo-700">IMPORTANT</p>
                <p className="py-4  text-base font-medium  dark:text-gray-100 text-gray-800">Your backups may have personal data* </p>
                <p className=" text-sm font-medium  dark:text-gray-100 text-gray-600 pb-4">*This data is viewable by everyone</p>
                <p className=" text-xs leading-3  dark:text-gray-100 text-gray-400">*This data is viewable by everyone</p>
                <div className="sm:flex items-center justify-between   pt-6">
                    <button className=" py-3.5 px-10   dark:text-gray-100 text-gray-600 focus:outline-none hover:opacity-90 text-sm font-semibold border border-gray-600 rounded">Dismiss</button>
                    <button className=" py-3.5 px-5 sm:mt-0 mt-4 text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Sounds Good</button>
                </div>
            </div>
        </div>
    </div>
);
export default Index;
