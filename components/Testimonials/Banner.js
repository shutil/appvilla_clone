export default function Banner(params) {
    return(
        <div className="bg-[#ff6b81] py-20">
            <div className="container lg:w-[1300px] mx-auto text-center flex flex-col">
                <p className="text-4xl font-bold text-white">Install Appvilla and Start Using</p>
                <p className="mt-8 text-white w-[50%] mx-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className="text-white mt-8 flex mx-auto">
                    <button className="rounded px-8 py-2 border-2 hover:border-black hover:text-white border-white font-semibold mr-5 bg-white text-[#ff6b81] hover:bg-black transition-all delay-75">App Store</button>
                    <button className="rounded px-8 py-2 border-2  border-white font-semibold text-white hover:text-[#ff6b81]  hover:bg-white transition-all delay-75">Google Play</button>
                </div>
            </div>
        </div>
    )
};
