import Fcard from './Fcard';
export default function index(params) {
    return(
        <div className="py-20 bg-[#F9F9F9] px-5 lg:px-0">
            <div className="container lg:w-[1400px] mx-auto lg:pt-0 px-5">
                <div className="top_Section">
                    <p className="text-center font-semibold text-[#ff6b81]">FEATURES</p>
                    <p className="text-center font-bold text-3xl lg:text-4xl mt-2">Your Experience Gets Better And Better <br className="hidden lg:block"/>Over Time.</p>
                    <p className="mt-8 text-center text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16 gap-10">
                    <Fcard />
                    <Fcard />
                    <Fcard />
                    <Fcard />
                    <Fcard />
                    <Fcard />

                </div>
            </div>
        </div>
    )
};
