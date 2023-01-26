const Index = (props) => (
    <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-80 max-w-xs rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
            <h1 className=" dark:text-gray-100 text-gray-800 font-bold text-lg">Security Key</h1>
            <p className="pb-4 text-sm pt-4 font-normal  dark:text-gray-100 text-gray-600">Security key generated, copy and paste to use it</p>
            <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-between p-4">
                <p className="text-base font-medium leading-6  dark:text-gray-100 text-gray-800">kgit-sajl-3jk3-19hm</p>
                <div className="cursor-pointer text-xs font-semibold leading-4 text-indigo-700 uppercase">COPY</div>
            </div>
        </div>
    </div>
);
export default Index;
