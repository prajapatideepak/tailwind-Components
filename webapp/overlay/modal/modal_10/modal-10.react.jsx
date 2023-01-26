const Index = (props) => (
    <div>
        <div className="flex items-center justify-center py-8 px-4">
            <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
                <h1 className="text-lg font-bold leading-none  dark:text-gray-100 text-gray-800">We need your consent</h1>
                <p className="text-sm leading-5 pt-6  dark:text-gray-100 text-gray-600">by accepting this invitation you are creating a new account.</p>
                <div className="flex items-center justify-between mt-4 border-gray-200 border rounded-lg px-4 py-4 cursor-pointer">
                    <p className="text-base font-medium leading-4  dark:text-gray-100 text-gray-800">Terms and conditions</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.2634 10.1459C17.6201 9.72434 17.5675 9.09336 17.1459 8.73661C16.7243 8.37987 16.0934 8.43245 15.7366 8.85406L10.9386 14.5244L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4906 16.9049 10.7621 17.0108 11.0416 16.9991C11.321 16.9875 11.5827 16.8594 11.7634 16.6459L17.2634 10.1459Z" fill="#5FD754" />
                    </svg>
                </div>
                <div className="flex items-center justify-between mt-4 border-gray-200 border rounded-lg px-4 py-4 cursor-pointer">
                    <p className="text-base font-medium leading-4  dark:text-gray-100 text-gray-800">Privacy policy</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4B5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </div>
                <div className="py-6 flex items-center">
                    <div className=" dark:bg-gray-800 bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input type="radio" name="radio" className="checkbox appearance-none focus:outline-none rounded-full border-gray-400 absolute cursor-pointer w-full h-full border checked:border-none" />
                        <div className="check-icon hidden border border-indigo-700 flex items-center justify-center rounded-full w-full h-full z-1">
                            <div className="bg-indigo-700 rounded-full w-2 h-2" />
                        </div>
                    </div>
                    <p className="ml-3 text-base font-medium leading-4  dark:text-gray-100 text-gray-800">I read the documentation</p>
                </div>
                <button className="text-sm font-semibold leading-6 bg-indigo-700 rounded py-2 w-full hover:opacity-90 focus:outline-none text-white">Accept</button>
            </div>
        </div>

        <style>
            {`.checkbox:checked {
        border: none;
    }
    .checkbox:checked + .check-icon {
        display: flex;
    }`}
        </style>
    </div>
);
export default Index;
