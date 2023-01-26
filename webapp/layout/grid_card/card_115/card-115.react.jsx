const Index = () => {
    return (
        <div className="py-8">
            <div className="max-w-sm bg-white shadow rounded p-6">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold leading-5 text-gray-800 pr-40">Transactions</p>
                    <div className="cursor-pointer">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 17.5L12.5 12.5" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <p className="text-sm leading-normal text-gray-500 pt-2">43 transactions</p>
                <div className="mt-6 bg-gray-100 p-1 rounded w-full flex items-center justify-between">
                    <button className="text-sm py-2 focus:outline-none hover:bg-white bg-white px-14 hover:shadow shadow rounded-md leading-normal text-gray-600">Paid</button>
                    <button className="text-sm py-2 focus:outline-none hover:bg-white px-14 focus:bg-white hover:shadow focus:shadow rounded-md leading-normal text-gray-600 ml-4">Recieved</button>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded">
                            <img src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png" alt="profile" className="w-full h-full" />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Sandra Rogers</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">3 bills</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium leading-normal text-right text-red-700">$12,847</p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <img src="https://cdn.tuk.dev/assets/components/misc/RT.png" alt="profile" className />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Raymond Tusk</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">7 bills</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium leading-normal text-right text-red-700">$11,847</p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <img src="https://cdn.tuk.dev/assets/components/misc/JR.png" alt="profile" className />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Jane Roberts</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">4 bills</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium leading-normal text-right text-red-700">$21,847</p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <img src="https://cdn.tuk.dev/assets/components/misc/profile-img-2.png" alt="profile" className />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Maia Kelly</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">2 bills</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium leading-normal text-right text-red-700">$2,847</p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <img src="https://cdn.tuk.dev/assets/components/misc/LW.png" alt="profile" className />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-normal text-gray-800">Laurine Watson</p>
                            <p className="text-xs leading-3 pt-2 text-gray-600">2 bills</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium leading-normal text-right text-red-700">$2,847</p>
                </div>
            </div>
        </div>
    );
};
export default Index;
