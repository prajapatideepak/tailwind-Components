const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
            <h1 className=" dark:text-gray-100 text-gray-800 font-bold text-lg">Security Code</h1>
            <p className="pb-6 text-sm pt-4 font-normal  dark:text-gray-100 text-gray-600">Code generated, copy and paste to use</p>
            <div className="flex items-center justify-between pb-6">
                <input className="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5  rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700 appearance-none" defaultValue={2} />
                <input className="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5  rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" defaultValue={1} />
                <input className="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5  rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" defaultValue={6} />
                <input className="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5  rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" defaultValue={8} />
            </div>
            <div className="flex items-center justify-between">
                <button className="py-3.5 w-full text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Copy Code</button>
            </div>
        </div>
    </div>
);
export default Index;
