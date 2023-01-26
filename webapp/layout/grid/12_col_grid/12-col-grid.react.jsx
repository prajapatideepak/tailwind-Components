import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
