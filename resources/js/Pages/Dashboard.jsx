import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import Footers from "@/Layouts/Footers";

function Dashboard({ auth }) {
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

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <main className="bg-[#E7F0FF]">
                <div className="mx-auto max-w-6xl sm:px-6 lg:px-1 pb-0 mt-5">
                    <div className="pt-1">
                        <div className="container px-3 mx-auto flex flex-wrap items-center">
                            <div className="flex flex-row items-center">
                                <motion.div
                                    className="w-full md:w-2/5 justify-center items-start text-center md:text-left ml-12"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <p className="uppercase tracking-loose w-full">
                                        Skip the Travel! Take Online
                                    </p>
                                    <h1 className="my-4 text-5xl font-bold leading-tight">
                                        Welcome
                                        <span className="text-blue-300 ml-2 my-4 text-5xl font-bold leading-tight">
                                            Vitalife
                                        </span>
                                    </h1>
                                    <p className="leading-normal text-2xl mb-8">
                                        We are the solution for travelling in a
                                        healthy condition and we provide health
                                        specialists...
                                    </p>
                                    <motion.button
                                        className="mx-auto lg:mx-0 bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            // kode untuk navigasi ke halaman specialisation
                                            window.location.href =
                                                "#specialisation";
                                        }}
                                    >
                                        Consult Now
                                    </motion.button>
                                </motion.div>

                                {/* gambar */}
                                <motion.div
                                    className="w-full md:w-3/5 py-6 text-center"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="rounded-lg overflow-hidden">
                                        <img
                                            className="w-full h-auto scale-100"
                                            src="../image/bgdash.png"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-md p-7 text-center flex flex-col items-center">
                    <h2 class="text-4xl font-bold mb-8">Wellness Support</h2>
                    <div class="flex space-x-20">
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                            }}
                        >
                            <Link href="/spa">
                                <a class="flex-shrink-0 ml-8 mr-0 group">
                                    <div class="relative p-4 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                        <img
                                            src="../image/spa.png"
                                            alt="spa"
                                            class="h-32 mb-5"
                                        />

                                        <p class="text-lg font-bold">SPA</p>
                                    </div>
                                </a>
                            </Link>
                        </motion.button>

                        <div class="flex-shrink-0 w-4"></div>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                            }}
                        >
                            <Link href="/yoga">
                                <a class="flex-shrink-0 ml-8 mr-0 group">
                                    <div class="relative p-4 group-hover:shadow-md rounded-lg  group-hover:border-gray-500 group-hover:rounded-lg">
                                        <img
                                            src="../image/meditation.png"
                                            alt="Meditation"
                                            class="h-32 mb-5"
                                        />
                                        <p class="text-lg font-bold">YOGA</p>
                                    </div>
                                </a>
                            </Link>
                        </motion.button>

                        <div class="flex-shrink-0 w-4"></div>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                            }}
                        >
                            <Link href="/event">
                                <a
                                    href="#event"
                                    class="flex-shrink-0 ml-8 mr-0 group"
                                >
                                    <div class="relative p-4 group-hover:shadow-md rounded-lg  group-hover:border-gray-500 group-hover:rounded-lg">
                                        <img
                                            src="../image/run.png"
                                            alt="event"
                                            class="h-32 mb-5"
                                        />
                                        <p class="text-lg font-bold">EVENT</p>
                                    </div>
                                </a>
                            </Link>
                        </motion.button>
                    </div>
                </div>
                <div
                    id="specialisation"
                    class="bg-biru p-10 text-center flex flex-col items-center"
                >
                    <h2 class="text-3xl font-bold mb-8">Specialisation</h2>
                    <div class="grid grid-cols-4 gap-20">
                        {" "}
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/anatomy.png"
                                        alt="Anatomy"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">Anatomy</p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/care.png"
                                        alt="Primary Care"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Primary Care
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/cardiology.png"
                                        alt="Cardiology"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Cardiology
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/skin.png"
                                        alt="Skin & Genitals"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Skin & Genitals
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/human.png"
                                        alt="Human Senses"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Human Senses
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/psico.png"
                                        alt="Piscologist"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Piscologist
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/fisio.png"
                                        alt="Fisioterapy"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">
                                        Fisioterapy
                                    </p>
                                </div>
                            </a>
                        </motion.button>
                        <motion.button
                            class="text-lg font-bold transition duration-300 ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <a
                                href="#event"
                                class="flex flex-col items-center group"
                            >
                                <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                                    <img
                                        src="../image/preg.png"
                                        alt="Pregnancy"
                                        class="h-24 mb-3"
                                    />
                                    <p class="text-base font-bold">Pregnancy</p>
                                </div>
                            </a>
                        </motion.button>
                    </div>
                    <motion.button
                        class="text-lg font-bold transition duration-300 ease-in-out"
                        whileHover={{
                            scale: 1.1,
                        }}
                    >
                        <button class="bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-gray-700">
                            View All
                        </button>
                    </motion.button>
                </div>

                <section className="ezy__team15 light py-2 md:py-5 bg-white text-zinc-900 dark:text-white z-[1]">
                    <div className="container px-10 mx-auto">
                        <div className="relative">
                            <div className="grid grid-cols-6 mt-12 gap-6">
                                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div className="relative">
                                        <img
                                            className="w-full rounded-xl"
                                            src="../image/banner1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    {/* <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <div className="flex p-4 md:p-6 mb-4">
                                            <div className="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                                                <h5 className="text-xl font-medium mb-1">
                                                    85 + Classes
                                                </h5>
                                                <p className="">
                                                    From The masters
                                                </p>
                                            </div>
                                            <div className="w-1/2 px-4">
                                                <h5 className="text-xl font-medium mb-1">
                                                    20 Lessons
                                                </h5>
                                                <p className="">
                                                    Average Per Class
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div className="relative">
                                        <img
                                            className="w-full rounded-t-xl"
                                            src="../image/banner2.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div className="relative">
                                        <img
                                            className="w-full rounded-t-xl"
                                            src="../image/banner3.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-3 lg:col-span-2 hidden">
                                    <div className="relative">
                                        <img
                                            className="w-full rounded-t-xl"
                                            src="../image/banner4.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <button className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10">
                                    <i className="fas fa-angle-left"></i>
                                </button>
                                <button className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10">
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="ezy__about9 light py-14 md:py-24 bg-biru dark:text-[#0b1727]">
                    <div className="container px-4 flex flex-col md:flex-row items-center gap-4 mb-12">
                        <div className="col-span-12 lg:col-span-6 relative">
                            <img
                                src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
                                alt=""
                                className="max-w-full h-auto rounded-2xl"
                                style={{ width: "50%" }}
                            />
                        </div> */}
                <Footers />
            </main>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
