const Index = () => {
    return (
        <div className="py-8 flex items-stretch justify-center w-full">
            <div className="w-2/3 md:pr-5 md:pt-0">
                <img src="https://i.ibb.co/0mrQW7c/2.png" alt="img" className="w-full" />
                <div className="md:pt-16 pt-6">
                    <p className="md:text-6xl text-2xl font-bold md:leading-10 leading-6 text-gray-800">Purpose and Usage</p>
                    <p className="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 hidden sm:block">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. </p>
                    <p className="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 sm:hidden">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada. </p>
                </div>
            </div>
            <div className="w-1/3 overflow-hidden relative ml-2 md:ml-5">
                <img src="https://i.ibb.co/sj4dfWX/1.png" alt="img" className="w-full absolute inset-0 w-full h-full" />
            </div>
        </div>
    );
};
export default Index;
