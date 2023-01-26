const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
            <h1 className="  dark:text-gray-100 text-gray-800 font-bold text-lg">Permission required</h1>
            <p className="py-4 text-base font-medium  dark:text-gray-100 text-gray-800">Oops! you dont have access!</p>
            <p className="text-sm font-medium  dark:text-gray-100 text-gray-600">Request access for the file</p>
            <div className="sm:flex items-center justify-between pt-6">
                <button className="py-3.5 w-full  dark:text-gray-100 text-gray-600 leading-3 focus:outline-none hover:opacity-90 text-sm font-semibold border-gray-600 rounded  border">Dismiss</button>
                <button className="py-3.5 w-full sm:mt-0 mt-2 sm:ml-2 leading-3 text-white focus:outline-none hover:opacity-90 text-sm font-semibold border rounded border-indigo-700 bg-indigo-700">Request Access</button>
            </div>
        </div>
    </div>
);
export default Index;
