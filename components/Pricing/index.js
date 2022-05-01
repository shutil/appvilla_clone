import Pcard from "./Pcard";

export default function index(params) {
    return(
        <div className="py-20 bg-[#F9F9F9] px-5 lg:px-0">
            <div className="container lg:w-[1400px] mx-auto">
                <div className="top_section">
                    <p className="text-center font-semibold text-[#ff6b81]">PRICING</p>
                    <p className="text-center font-bold text-3xl lg:text-4xl mt-2">Pricing Plan</p>
                    <p className="mt-8 text-center text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-16 gap-5">
                    <Pcard />
                    <Pcard />
                    <Pcard />
                    <Pcard />

                </div>
            </div>
        </div>
    )
};
