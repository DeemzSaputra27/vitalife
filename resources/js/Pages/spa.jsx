import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Footers from "@/Layouts/Footers";

function Spa({ auth }) {
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
            <Head title="Spa" />
            <main className="mt-16">
                <div className="bg-gray flex justify-center items-center">
                    <motion.div
                        className="bg-gray-100 rounded-2xl shadow-lg w-full max-w-4xl p-8"
                        initial="hidden"
                        animate={animationController}
                        variants={variants}
                    >
                        {/* div1 */}
                        <div className="flex justify-start border-gray-500 items-center mb-6 w-full">
                            <div className="border-none rounded-md py-2 px-4 text-sm">
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
                <div className="flex justify-center items-center">
                    <div className="font-sans">
                        <div className="container mx-auto py-4 grid grid-cols-2 gap-5">
                            <motion.div
                                className="bg-white rounded-lg shadow-2xl p-12"
                                variants={variants}
                                initial="hidden"
                                animate={animationController}
                            >
                                {/* spa1 */}
                                <div className="flex">
                                    <div className="flex items-center border-b border-gray-500 pb-2">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 mr-6"></div>
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                MANSION SPA JOGJA
                                            </h2>
                                            <p className="text-gray-500 text-lg">
                                                Relaxation
                                            </p>
                                            <p className="text-gray-500 text-lg">
                                                16 years experience overall
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 bg-green-100 px-6 py-3 rounded-md inline-flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-green-500 font-medium text-lg">
                                        99% 93 Patient Stories
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        Kec. Gamping, Kabupaten Sleman, DIY
                                    </p>
                                    <p className="text-gray-500 text-lg">
                                        The most famous relaxation spa
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 text-lg"
                                    >
                                        more
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        FREE &#8377;500 Consultation fee at
                                        clinic
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg mr-4">
                                        Book FREE Spa Visit
                                    </button>
                                    <button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded text-lg"
                                        onClick={handleBookClick}
                                    >
                                        Schedule
                                    </button>
                                </div>

                                {/* Available */}
                                {showAvailable && (
                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold">
                                            Available Today
                                        </h3>
                                        <div className="grid grid-cols-3 gap-6 mt-6">
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Morning
                                                </p>
                                                <p className="font-medium text-lg">
                                                    11:30 AM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Afternoon
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    01:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:30 PM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Evening
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:30 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">
                                    Maps Location
                                </h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid"
                                    width="100%"
                                    height="400"
                                    style={{ border: "" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* spa2 */}
                <div className="flex justify-center items-center">
                    <div className="font-sans">
                        <div className="container mx-auto py-3 grid grid-cols-2 gap-5">
                            <motion.div
                                className="bg-white rounded-lg shadow-2xl p-12"
                                variants={variants}
                                initial="hidden"
                                animate={animationController}
                            >
                                {/* spa1 */}
                                <div className="flex">
                                    <div className="flex items-center border-b border-gray-500 pb-2">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 mr-6"></div>
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                MANSION SPA JOGJA
                                            </h2>
                                            <p className="text-gray-500 text-lg">
                                                Relaxation
                                            </p>
                                            <p className="text-gray-500 text-lg">
                                                16 years experience overall
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 bg-green-100 px-6 py-3 rounded-md inline-flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-green-500 font-medium text-lg">
                                        99% 93 Patient Stories
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        Kec. Gamping, Kabupaten Sleman, DIY
                                    </p>
                                    <p className="text-gray-500 text-lg">
                                        The most famous relaxation spa
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 text-lg"
                                    >
                                        more
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        FREE &#8377;500 Consultation fee at
                                        clinic
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg mr-4">
                                        Book FREE Spa Visit
                                    </button>
                                    <button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded text-lg"
                                        onClick={handleBookClick}
                                    >
                                        Schedule
                                    </button>
                                </div>

                                {/* Available */}
                                {showAvailable && (
                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold">
                                            Available Today
                                        </h3>
                                        <div className="grid grid-cols-3 gap-6 mt-6">
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Morning
                                                </p>
                                                <p className="font-medium text-lg">
                                                    11:30 AM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Afternoon
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    01:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:30 PM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Evening
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:30 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">
                                    Maps Location
                                </h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid"
                                    width="100%"
                                    height="400"
                                    style={{ border: "" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* spa3 */}
                <div className="flex justify-center items-center">
                    <div className="font-sans">
                        <div className="container mx-auto py-4 grid grid-cols-2 gap-5">
                            <motion.div
                                className="bg-white rounded-lg shadow-2xl p-12"
                                variants={variants}
                                initial="hidden"
                                animate={animationController}
                            >
                                {/* spa1 */}
                                <div className="flex">
                                    <div className="flex items-center border-b border-gray-500 pb-2">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 mr-6"></div>
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                MANSION SPA JOGJA
                                            </h2>
                                            <p className="text-gray-500 text-lg">
                                                Relaxation
                                            </p>
                                            <p className="text-gray-500 text-lg">
                                                16 years experience overall
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 bg-green-100 px-6 py-3 rounded-md inline-flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-green-500 font-medium text-lg">
                                        99% 93 Patient Stories
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        Kec. Gamping, Kabupaten Sleman, DIY
                                    </p>
                                    <p className="text-gray-500 text-lg">
                                        The most famous relaxation spa
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 text-lg"
                                    >
                                        more
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-gray-500 text-lg">
                                        FREE &#8377;500 Consultation fee at
                                        clinic
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg mr-4">
                                        Book FREE Spa Visit
                                    </button>
                                    <button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded text-lg"
                                        onClick={handleBookClick}
                                    >
                                        Schedule
                                    </button>
                                </div>

                                {/* Available */}
                                {showAvailable && (
                                    <div className="mt-10">
                                        <h3 className="text-xl font-bold">
                                            Available Today
                                        </h3>
                                        <div className="grid grid-cols-3 gap-6 mt-6">
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Morning
                                                </p>
                                                <p className="font-medium text-lg">
                                                    11:30 AM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Afternoon
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    12:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    01:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    02:30 PM
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-lg">
                                                    Evening
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    06:30 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:00 PM
                                                </p>
                                                <p className="font-medium text-lg">
                                                    07:30 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">
                                    Maps Location
                                </h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid"
                                    width="100%"
                                    height="400"
                                    style={{ border: "" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <Footers />
            </main>
        </AuthenticatedLayout>
    );
}

export default Spa;
