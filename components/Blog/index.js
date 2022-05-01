export default function index(params) {
    return(
        <div className="py-20 bg-[#F9F9F9]">
            <div className="container lg:w-[1400px] mx-auto flex flex-col px-5 lg:px-5">
                <div className="top_section">
                    <p className="text-center font-semibold text-[#ff6b81]">BLOG</p>
                    <p className="text-center font-bold text-3xl lg:text-4xl mt-2">Our Latest News</p>
                    <p className="mt-8 text-center text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="shadow-md rounded-md">
                        <img src="https://preview.uideck.com/items/appvilla/assets/images/blog/blog-1.jpg" className="rounded-t-md w-full"/>
                        <div className="p-8">
                            <p className="font-medium text-[#ff6b81]">Blog</p>
                            <p className="text-2xl font-semibold">Boost your conversion rate</p>
                            <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                            <button className="mt-6 px-3 py-1 rounded-md font-semibold text-white bg-[#ff6b81]">Read More</button>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md">
                        <img src="https://preview.uideck.com/items/appvilla/assets/images/blog/blog-1.jpg" className="rounded-t-md w-full"/>
                        <div className="p-8">
                            <p className="font-medium text-[#ff6b81]">Blog</p>
                            <p className="text-2xl font-semibold">Boost your conversion rate</p>
                            <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                            <button className="mt-6 px-3 py-1 rounded-md font-semibold text-white bg-[#ff6b81]">Read More</button>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md">
                        <img src="https://preview.uideck.com/items/appvilla/assets/images/blog/blog-1.jpg" className="rounded-t-md w-full"/>
                        <div className="p-8">
                            <p className="font-medium text-[#ff6b81]">Blog</p>
                            <p className="text-2xl font-semibold">Boost your conversion rate</p>
                            <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                            <button className="mt-6 px-3 py-1 rounded-md font-semibold text-white bg-[#ff6b81]">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
