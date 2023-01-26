import react from "react";
const index = (props) => {
    return (
        <>
            <div className="max-w-sm w-full relative rounded shadow bg-white dark:bg-gray-800">
                <div className="py-6 px-6">
                    <p className="sm:text-lg text-xl font-bold leading-5 text-gray-800 dark:text-gray-100">Lorem ipsum dolor</p>
                    <p className="sm:text-sm text-xs leading-loose text-gray-500 dark:text-gray-400 mt-6">30 mins ago</p>
                    <p className="sm:text-base text-sm leading-5 pt-1 text-gray-500 dark:text-gray-400">
                        Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin ultrices lectus. Sed bibendum felis sed metus congue, vitae congue eros rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio finibus, mollis elit ac, fermentum lacus. Quisque eleifend ac nunc id tristique.
                        <br />
                        <br />
                        Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin ultrices lectus. Sed bibendum felis sed metus congue, vitae congue eros rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio finibus, mollis elit ac, fermentum lacus. Quisque eleifend ac nunc id tristique.
                    </p>
                </div>
                <div className="py-6 mt-4 border-t-2 border-gray-200 dark:border-gray-800">
                    <div className="flex items-center px-6">
                        <img src="https://i.ibb.co/SPMdHXG/image.png" alt="profile" className="w-16 h-16 rounded-full" />
                        <div className="pl-4">
                            <p className="sm:text-lg text-base font-semibold leading-4 text-indigo-700">Tolu Arowoselu</p>
                            <p className="text-sm leading-4 text-gray-500 dark:text-gray-400 mt-1">On human rights</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default index;
