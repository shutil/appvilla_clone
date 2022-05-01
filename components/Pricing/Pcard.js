export default function Pcard(params) {
    return(
        <div className="bg-white border rounded-md">
            <div className="p-8">
                <p className="font-semibold">Hobby</p>
                <p className="mt-4 text-gray-500">All the basics for starting a new business</p>
                <p className="mt-8 font-bold text-3xl">$12<span className="text-base ml-1 font-light text-gray-500">/mo</span></p>
                <button className="py-3 w-full bg-black mt-4 rounded-md text-white font-semibold">
                    Buy Hobby
                </button>
            </div>
            <hr />
            <div className="p-8">
                <p className="text-sm">WHAT'S INCUDED</p>
                <ul className="ml-4 mt-4">
                    <li>Cras justo odio.</li>
                    <li className="mt-2">Cras justo odio.</li>
                    <li className="mt-2">Cras justo odio.</li>
                    <li className="mt-2">Cras justo odio.</li>
                </ul>
            </div>
        </div>
    )
};
