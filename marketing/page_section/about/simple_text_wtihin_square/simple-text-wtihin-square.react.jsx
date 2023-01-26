import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container lg:mt-60 mt-10 px-4 lg:px-0">
                <div className="lg:flex justify-center">
                    <div className="lg:w-2/5">
                        <div className="border-2 border-black px-4 py-4 lg:py-10 lg:px-10 bottom-0 my-8 block lg:hidden">
                            <div className="flex flex-col">
                                <div className="lg:text-4xl text-2xl text-gray-900 leading-9 font-bold f-f-d-s pb-6 text-left">About Us</div>
                                <div className="lg:text-2xl text-base tracking-tight f-f-l text-gray-700 lg:leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper.</div>
                                <button className="text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8">Know More</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <img className="h-full w-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(1).png" alt />
                        </div>
                        <div className="border-2 border-black px-4 py-10 lg:px-10 bottom-0 mt-8 hidden lg:block">
                            <div className="flex flex-col">
                                <div className="text-xl md:text-2xl lg:text-4xl text-gray-800 leading-9 f-f-d-s pb-6 text-left">About Us</div>
                                <div className="text-base md:text-xl lg:text-2xl tracking-tight f-f-l text-gray-700 leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper.</div>
                                <button className="text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8">Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 lg:pl-8">
                        <div className="xl:h-2/5 lg:mt-0 mt-8">
                            <img className="w-full h-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(2).png" alt />
                        </div>
                        <div className="w-full mt-8">
                            <img className="w-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(3).png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
