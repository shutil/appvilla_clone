export default function index(params) {
    return(
        <div className="fixed top-0 w-full bg-white h-[5.7rem] lg:px-0 shadow">
            <div className="container lg:w-[1400px] mx-auto h-full flex items-center px-5">
                <div>
                    <img className="w-[10rem]" src="https://preview.uideck.com/items/appvilla/assets/images/logo/logo.svg"/>
                </div>
                <div className="lg:flex mx-auto hidden">
                    <p className="mr-10 font-semibold cursor-pointer text-[#ff6b81]">Home</p>
                    <p className="mr-10 font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Feature</p>
                    <p className="mr-10 font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Overview</p>
                    <p className="mr-10 font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Pricing</p>
                    <p className="mr-10 font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Team</p>
                    <p className="mr-10 font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Blog</p>
                    <p className="font-semibold cursor-pointer hover:text-[#ff6b81] transition-all delay-100">Contact</p>
                </div>
                <div className="ml-auto lg:ml-0">
                    <button className="bg-[#ff6b81] font-semibold text-white py-[7px] px-[20px] rounded hover:bg-black transition-all delay-75">
                        Get It Now
                    </button>
                </div>
            </div>
        </div>
    )
};
