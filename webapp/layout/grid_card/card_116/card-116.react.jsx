const Index = () => {
    return (
        <div className="py-8">
            <div className="max-w-sm bg-white shadow rounded p-6">
                <div className="flex items-end">
                    <p className="text-xl font-semibold leading-5 text-gray-800">Activity</p>
                    <p className="text-sm leading-normal pl-44 cursor-pointer underline text-right text-indigo-700">View all</p>
                </div>
                <div className="mt-6 flex">
                    <div className="w-10 flex flex-col items-center">
                        <img className="h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-1.png" />
                        <div className="pt-4">
                            <svg width={1} height={40} viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={47} stroke="#D1D5DB" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-semibold leading-normal text-gray-800">John Stark</p>
                        <p className="text-xs leading-3 text-gray-500 pt-1">2 hours ago</p>
                        <p className="pt-4 text-sm leading-4 text-gray-600">
                            Changes made to <span className="text-indigo-700">styleguide.fig</span>, icons <br />
                            updated with v2 colors
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex">
                    <div className="w-10 flex flex-col items-center">
                        <img className="h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png" />
                        <div className="pt-4">
                            <svg width={1} height={40} viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={47} stroke="#D1D5DB" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-semibold leading-normal text-gray-800">Rachel Green</p>
                        <p className="text-xs leading-3 text-gray-500 pt-1">5 hours ago</p>
                        <p className="pt-4 text-sm leading-4 text-gray-600">
                            Reviewed and sent to <span className="text-indigo-700">jill@astro.com </span>
                            <br />
                            &amp; <span className="text-indigo-700">jason@ipsum.com</span>
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex">
                    <div className="w-10 flex flex-col items-center">
                        <img className="h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-2.png" />
                        <div className="pt-4">
                            <svg width={1} height={40} viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={47} stroke="#D1D5DB" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-semibold leading-normal text-gray-800">Rachel Green</p>
                        <p className="text-xs leading-3 text-gray-500 pt-1">8 hours ago</p>
                        <p className="pt-4 text-sm leading-4 text-gray-600">
                            Ticket number <span className="text-indigo-700">#18293</span> has been
                            <br />
                            resolved.Thank you.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex">
                    <div className="w-10 flex flex-col items-center">
                        <img className="h-10 rounded-full" src="https://cdn.tuk.dev/assets/components/misc/activity-2.png" />
                        <div className="pt-4">
                            <svg width={1} height={47} viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={47} stroke="#D1D5DB" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-semibold leading-normal text-gray-800">Jill Dawson</p>
                        <p className="text-xs leading-3 text-gray-500 pt-1">8 hours ago</p>
                        <div className="py-4 flex items-center">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00002 5.33334L6.00202 1.33334H13.332C13.7 1.33334 14 1.63668 14 1.99468V14.0053C13.9998 14.1808 13.93 14.349 13.8059 14.473C13.6818 14.597 13.5135 14.6667 13.338 14.6667H2.66202C2.57447 14.6661 2.4879 14.6482 2.40725 14.6141C2.3266 14.5801 2.25345 14.5305 2.19197 14.4681C2.1305 14.4058 2.08191 14.3319 2.04897 14.2508C2.01604 14.1697 1.9994 14.0829 2.00002 13.9953V5.33334ZM6.66668 2.33334L3.00002 6.00001H6.66668V2.33334Z" fill="#4338CA" />
                            </svg>
                            <p className="text-xs leading-6 pl-2 text-indigo-700">Annual Report.docx</p>
                        </div>
                        <p className="text-sm leading-4 text-gray-600">Shared final version of the report</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
