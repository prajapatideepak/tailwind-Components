import React from "react";
const Index = () => {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        //   console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <section className="bg-indigo-600 {-- h-screen --}">
            <div className="mx-auto flex justify-center lg:items-center h-full">
                <form ref={form} onSubmit={handleSubmit} className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0">
                    <div className="pt-0 px-2 flex flex-col items-center justify-center">
                        <svg className="w-24 h-24" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path
                                    fill="#fff"
                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                />
                            </g>
                        </svg>
                        <h2 className="text-4xl leading-tight pt-8">The North</h2>
                    </div>
                    <div className="pt-16 px-2 flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">Login To Your Account</h3>
                    </div>
                    <div className="mt-12 w-full px-2 sm:px-6">
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                Email
                            </label>
                            <input required id="email" name="email" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="email" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="password" className="text-lg font-semibold fleading-tight">
                                Password
                            </label>
                            <input required id="password" name="password" className="h-10 px-2 w-full text-white bg-indigo-700 rounded mt-2 focus:outline-none shadow" type="password" />
                        </div>
                    </div>
                    <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                        <div className="flex items-center">
                            <input id="rememberme" className="w-3 h-3 mr-2" type="checkbox" />
                            <label htmlFor="rememberme" className="text-xs">
                                Remember Me
                            </label>
                        </div>
                        <a className="text-xs" href="javascript: void(0)">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="px-2 sm:px-6">
                        <button className="focus:outline-none w-full bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded text-indigo-600 px-8 py-3 text-sm mt-6">Login</button>
                        <p className="mt-16 text-xs text-center">
                            Don’t Have An Account?{" "}
                            <a className="underline" href="javascript: void(0)">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default Index;
