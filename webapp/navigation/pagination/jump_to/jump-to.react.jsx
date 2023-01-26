import React from "react";
const Index = () => {
    return (
        <div>
            <div className="max-w-8xl mx-auto container py-8">
                <div className="flex justify-center items-center">
                    <label htmlFor="jump" className="text-base font-normal text-gray-800 leading-normal mr-4">
                        Jump To Page
                    </label>
                    <input type="text" id="jump" defaultValue={04} className="shadow rounded text-base bg-gray-100 font-bold text-gray-800 leading-normal py-1 px-1 w-16 text-center outline-none" />
                </div>
            </div>
            ;
        </div>
    );
};
export default Index;
