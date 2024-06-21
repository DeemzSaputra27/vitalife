import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Footers from "@/Layouts/Footers";

function Spesialis({ auth }) {
    const [menuItems] = useState([
        {
            name: "Barbecue salad",
            detail: "Delicious dish",
            price: "$22.00",
            image: "/assets/img/plate1.png",
        },
        {
            name: "Salad with fish",
            detail: "Delicious dish",
            price: "$12.00",
            image: "/assets/img/plate2.png",
        },
        {
            name: "Spinach salad",
            detail: "Delicious dish",
            price: "$9.50",
            image: "/assets/img/plate3.png",
        },
    ]);

    const animationController = useAnimation();

    useEffect(() => {
        animationController.start("visible");
    }, [animationController]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const [showAvailable, setShowAvailable] = useState(false);
    const handleBookClick = () => {
        setShowAvailable((prev) => !prev);
    };

    // const [showAvailable, setShowAvailable] = useState(false);
    // const [showMap, setShowMap] = useState(false);

    // const handleBookClick = () => {
    //     setShowAvailable(true);
    //     setShowMap(true);
    // };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Spesialis" />
            <main className="mt-5 bg-[#E7F0FF]">
                <div className=" flex justify-center items-center">
                    <motion.div
                        className="bg-gray-100 rounded-2xl shadow-lg w-full max-w-5xl p-8"
                        initial="hidden"
                        animate={animationController}
                        variants={variants}
                    >
                        {/* div1 */}
                        <div className="flex justify-start items-center mb-6 w-full">
                            <div className="bg-gray-100 border-none rounded-md py-2 px-4 text-sm">
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                                    placeholder="Set your location"
                                    style={{ width: "317px" }}
                                />
                            </div>
                            <div className="bg-gray-100 border-none rounded-md py-2 px-4 text-sm">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                                    placeholder="Specialization"
                                    style={{ width: "317px" }}
                                />
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="bg-blue-600 text-white rounded-md py-2 px-6 text-sm"
                                    style={{ width: "120px" }}
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                        <span className="text-sm">Search</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* div2 */}
                        <div className="flex justify-start mb-6 w-full pl-4">
                            <div className="flex items-center">
                                <div className="input-group">
                                    <select
                                        type="inputWay"
                                        className="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline w-40"
                                    >
                                        <option selected>Availability</option>
                                        <option>One Way</option>
                                        <option>Multiple Way</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center ml-12 mr-5">
                                <select
                                    type="passengers"
                                    className="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline w-28"
                                >
                                    <option selected>Filter</option>
                                    <option>1 Filters</option>
                                    <option>2 Filters</option>
                                    <option>3 Filters</option>
                                    <option>4 Filters</option>
                                    <option>5 Filters</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-4 ml-6">
                                <span className="text-black-500">Sort By</span>
                                <select
                                    type="sort"
                                    className="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline w-48"
                                >
                                    <option selected>Relevance</option>
                                    <option>Business</option>
                                    <option>Economy</option>
                                    <option>1st Class</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex items-center pl-32 pt-8">
                    {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div> */}
                    <h3 className="text-3xl font-bold  text-gray-800">
                        Spesialist
                    </h3>
                </div>

                <div className="flex justify-center items-center">
                    <div className="font-sans">
                        <div className="container mx-auto py-8 grid grid-cols-[1fr,2fr] gap-5">
                            {/* Location section */}
                            <div class="space-y-4 bg-white border rounded-lg p-8 mx-2 w-80">
                                <h2 class="font-bold mb-4">Location</h2>
                                <hr class="w-53/54 border-black mx-auto mb-4" />
                                <div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="di-yogyakarta"
                                            name="location"
                                            value="D.I Yogyakarta"
                                            class="mr-2"
                                        />
                                        <label for="di-yogyakarta">
                                            D.I Yogyakarta
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="jawa-timur"
                                            name="location"
                                            value="Jawa Timur"
                                            class="mr-2"
                                        />
                                        <label for="jawa-timur">
                                            Jawa Timur
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="jawa-tengah"
                                            name="location"
                                            value="Jawa Tengah"
                                            class="mr-2"
                                        />
                                        <label for="jawa-tengah">
                                            Jawa Tengah
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="jawa-barat"
                                            name="location"
                                            value="Jawa Barat"
                                            class="mr-2"
                                        />
                                        <label for="jawa-barat">
                                            Jawa Barat
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="jakarta"
                                            name="location"
                                            value="Jakarta"
                                            class="mr-2"
                                        />
                                        <label for="jakarta">Jakarta</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="bandung"
                                            name="location"
                                            value="Bandung"
                                            class="mr-2"
                                        />
                                        <label for="bandung">Bandung</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            type="radio"
                                            id="bali"
                                            name="location"
                                            value="Bali"
                                            class="mr-2"
                                        />
                                        <label for="bali">Bali</label>
                                    </div>
                                </div>
                                <p class="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                                    Show more
                                </p>
                            </div>
                            {/* Specialist section */}
                            <motion.div
                                className="bg-white rounded-lg shadow-2xl p-12 grid grid-cols-1 gap-8 w-full"
                                variants={variants}
                                initial="hidden"
                                animate={animationController}
                            >
                                {/* Specialist 1 */}
                                {/* <div className="bg-white rounded-lg shadow-2xl p-6"> */}
                                <div className="flex items-center">
                                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-6">
                                        <img
                                            src="https://picsum.photos/id/237/200/200"
                                            alt="Profile Picture"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Endang Soekanti
                                        </h2>
                                        <p className="text-gray-500 text-lg">
                                            Psikologi Klinis
                                        </p>
                                        <p className="text-gray-500 text-lg">
                                            Hospital UGM Yogyakarta
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Yogyakarta, Sleman
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="text-gray-500 text-lg">
                                            $11,99
                                        </p>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                                            Make promise
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <hr class="w-53/54 border-black mx-auto mb-4" />
                                </div>
                                {/* </div> */}
                                {/* Specialist 2 */}
                                {/* <div className="bg-white rounded-lg shadow-2xl p-6"> */}
                                <div className="flex items-center">
                                    <div className="w-16 h-16 rounded-full mr-6">
                                        <img
                                            src="../image/dokter1.png"
                                            alt="Profile Picture"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Endang Soekanti
                                        </h2>
                                        <p className="text-gray-500 text-lg">
                                            Psikologi Klinis
                                        </p>
                                        <p className="text-gray-500 text-lg">
                                            Hospital UGM Yogyakarta
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Yogyakarta, Sleman
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="text-gray-500 text-lg">
                                            $11,99
                                        </p>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                                            Make promise
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <hr class="w-53/54 border-black mx-auto mb-4" />
                                </div>
                                {/* Specialist 3 */}
                                {/* <div className="bg-white rounded-lg shadow-2xl p-6"> */}
                                <div className="flex items-center">
                                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-6">
                                        <img
                                            src="https://picsum.photos/id/237/200/200"
                                            alt="Profile Picture"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Endang Soekanti
                                        </h2>
                                        <p className="text-gray-500 text-lg">
                                            Psikologi Klinis
                                        </p>
                                        <p className="text-gray-500 text-lg">
                                            Hospital UGM Yogyakarta
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Yogyakarta, Sleman
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="text-gray-500 text-lg">
                                            $11,99
                                        </p>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                                            Make promise
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <hr class="w-53/54 border-black mx-auto mb-4" />
                                </div>
                                {/* </div> */}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <Footers />
            </main>
        </AuthenticatedLayout>
    );
}

export default Spesialis;
