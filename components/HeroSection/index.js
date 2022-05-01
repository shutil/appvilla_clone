export default function index(params) {
    return(
        <div className="bg-[#ff6b81] custom_height flex items-center mt-[5.7rem]">
            <div className="container lg:w-[1400px] mx-auto h-full pt-4 lg:pt-0 px-5">
                <div className="flex items-center h-full">
                    <div className="grid lg:grid-cols-2 items-center gap-10">
                        <div className=" flex flex-col">
                            <p className="text-white font-bold text-4xl lg:text-5xl text-center lg:text-left">A Powerful App For Your Bussiness.</p>
                            <p className="mt-8 text-white text-center lg:text-left">From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
                            <div className="text-white mt-8 flex mx-auto lg:mx-0">
                                <button className="rounded px-8 py-2 border-2 hover:border-black hover:text-white border-white font-semibold mr-5 bg-white text-[#ff6b81] hover:bg-black transition-all delay-75">App Store</button>
                                <button className="rounded px-8 py-2 border-2  border-white font-semibold text-white hover:text-[#ff6b81]  hover:bg-white transition-all delay-75">Google Play</button>
                            </div>
                        </div>
                        <div>
                            {/* <img src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png"/> */}
                            <img className="rounded w-[100%]" src="/website.png"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};
