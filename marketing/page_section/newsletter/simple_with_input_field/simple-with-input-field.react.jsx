import React from "react";
function Index() {
    return (
        <div className="pt-16">
            <div className="w-full bg-gray-900 py-16 relative overflow-hidden">
                <div className="absolute right-0 top-0 transform -mr-6 z-0">
                    <svg width={300} height={300} viewBox="0 0 236 234" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path id="a" d="M0 0h236v234H0z" />
                        </defs>
                        <g transform="rotate(-180 118 117)" fill="none" fillRule="evenodd">
                            <mask id="b" fill="#fff">
                                <use xlinkHref="#a" />
                            </mask>
                            <path d="M1 234c-129.786 0-235-105.214-235-235S-128.786-236 1-236c129.788 0 235 105.214 235 235S130.788 234 1 234z" stroke="#4A5568" strokeWidth=".704" mask="url(#b)" />
                            <path d="M-.5 217C-120.62 217-218 119.175-218-1.5S-120.62-220-.5-220C119.623-220 217-122.175 217-1.5S119.623 217-.5 217z" stroke="#4A5568" strokeWidth=".688" mask="url(#b)" />
                            <path d="M.999 199C-110.011 199-200 109.01-200-1.999-200-113.009-110.01-203 .999-203 112.009-203 202-113.008 202-1.999 202 109.011 112.008 199 .999 199z" stroke="#4A5568" strokeWidth=".672" mask="url(#b)" />
                            <path d="M.5 182C-100.844 182-183 99.396-183-2.5S-100.844-187 .5-187 184-104.396 184-2.5 101.844 182 .5 182z" stroke="#4A5568" strokeWidth=".657" mask="url(#b)" />
                            <path d="M1 166c-92.23 0-167-74.77-167-167S-91.23-168 1-168c92.233 0 167 74.77 167 167S93.233 166 1 166z" stroke="#4A5568" strokeWidth=".641" mask="url(#b)" />
                            <path d="M1.499 149C-81.066 149-148 81.62-148-1.499-148-84.619-81.066-152 1.499-152 84.066-152 151-84.618 151-1.499 151 81.621 84.066 149 1.499 149z" stroke="#4A5568" strokeWidth=".625" mask="url(#b)" />
                            <path d="M1 131c-73.454 0-133-59.546-133-133 0-73.454 59.546-133 133-133 73.454 0 133 59.546 133 133 0 73.454-59.546 133-133 133z" stroke="#4A5568" strokeWidth=".609" mask="url(#b)" />
                            <path d="M-.5 115C-64.84 115-117 62.84-117-1.5S-64.84-118-.5-118 116-65.84 116-1.5 63.84 115-.5 115z" stroke="#4A5568" strokeWidth=".593" mask="url(#b)" />
                            <path d="M.999 98C-53.676 98-98 53.676-98-.999-98-55.676-53.676-100 .999-100 55.676-100 100-55.676 100-.999 100 53.676 55.676 98 .999 98z" stroke="#4A5568" strokeWidth=".578" mask="url(#b)" />
                            <path d="M.5 82C-45.062 82-82 45.064-82-.5S-45.062-83 .5-83C46.064-83 83-46.064 83-.5S46.064 82 .5 82z" stroke="#4A5568" strokeWidth=".562" mask="url(#b)" />
                            <path d="M1 63c-35.899 0-65-29.101-65-65s29.101-65 65-65S66-37.899 66-2 36.899 63 1 63z" stroke="#4A5568" strokeWidth=".546" mask="url(#b)" />
                            <path d="M1.499 46C-25.286 46-47 24.286-47-2.499-47-29.284-25.286-51 1.499-51 28.284-51 50-29.284 50-2.499 50 24.286 28.284 46 1.499 46z" stroke="#4A5568" strokeWidth=".53" mask="url(#b)" />
                            <path d="M1 30c-17.12 0-31-13.88-31-31 0-17.122 13.88-31 31-31 17.122 0 31 13.878 31 31 0 17.12-13.878 31-31 31z" stroke="#4A5568" strokeWidth=".514" mask="url(#b)" />
                            <path d="M1.5 13C-6.507 13-13 6.509-13-1.5S-6.507-16 1.5-16C9.509-16 16-9.509 16-1.5S9.509 13 1.5 13z" stroke="#4A5568" strokeWidth=".498" mask="url(#b)" />
                        </g>
                    </svg>
                </div>
                <div className="container mx-auto z-10 relative">
                    <h1 className="xl:text-4xl lg:text-4xl text-center xl:text-left text-white font-bold pb-8">Sign up for product news and updates</h1>
                    <div className="flex items-center mx-auto xl:mx-0 justify-between xl:w-1/3 lg:w-1/3 md:w-1/3 lg:mx-auto w-10/12 border-b border-gray-400 z-10">
                        <input type="text" placeholder="Enter Your Email" className="bg-transparent focus:outline-none text-white w-11/12 pb-4" id="email" aria-label="email" />
                        <div className="pb-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <line x1={15} y1={16} x2={19} y2={12} />
                                <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
