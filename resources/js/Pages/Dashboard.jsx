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
            <main>
                <div className="bg-biru mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="pt-5">
                        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                            <motion.div
                                className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <p className="uppercase tracking-loose w-full">
                                    Skip the Travel! Take Online
                                </p>
                                <h1 className="my-4 text-5xl font-bold leading-tight">
                                    Welcome{" "}
                                    <span className="text-biru2 ml-2 my-4 text-5xl font-bold leading-tight">
                                        Vitalife
                                    </span>
                                </h1>
                                <p className="leading-normal text-2xl mb-8">
                                    We are the solution for travelling in a
                                    healthy condition and we provide health
                                    specialists
                                </p>
                                <motion.button
                                    className="mx-auto lg:mx-0 hover:underline bg-biru2 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Consult Now
                                </motion.button>
                            </motion.div>
                            <motion.div
                                className="w-full md:w-3/5 py-6 text-center"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="shadow-md rounded-lg overflow-hidden">
                                    <img
                                        className="w-full h-auto scale-75"
                                        src="../image/doc2.png"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div class="p-20 text-center flex flex-col items-center">
                    <h2 class="text-4xl font-bold mb-8">Wellness Support</h2>
                    <div class="flex space-x-20">
                        <Link href="/spa">
                            {/* <Link href={route("spa")}> */}
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
                        <div class="flex-shrink-0 w-16"></div>
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

                        <div class="flex-shrink-0 w-16"></div>
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
                    </div>
                </div>

                <div class="bg-biru p-20 text-center flex flex-col items-center">
                    <h2 class="text-3xl font-bold mb-8">Specialisation</h2>
                    <div class="grid grid-cols-4 gap-20">
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
                                <p class="text-base font-bold">Primary Care</p>
                            </div>
                        </a>
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
                                <p class="text-base font-bold">Cardiology</p>
                            </div>
                        </a>
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
                                <p class="text-base font-bold">Human Senses</p>
                            </div>
                        </a>
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
                                <p class="text-base font-bold">Piscologist</p>
                            </div>
                        </a>
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
                                <p class="text-base font-bold">Fisioterapy</p>
                            </div>
                        </a>
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
                    </div>
                    <button class="bg-biru2 text-white px-6 py-3 rounded-md mt-8 hover:bg-gray-700">
                        View All
                    </button>
                </div>

                <section class="ezy__team15 light py-14 md:py-24 bg-white text-zinc-900 dark:text-white z-[1]">
                    <div class="container px-4 mx-auto">
                        <h1 class="text-3xl md:text-[45px] font-bold mb-12">
                            Featured Instructor
                        </h1>
                        <div class="relative">
                            <div class="grid grid-cols-6 mt-12 gap-6">
                                <div class="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <div class="relative">
                                            <img
                                                class="w-full rounded-t-xl"
                                                src="https://cdn.easyfrontend.com/pictures/users/userM1.jpg"
                                                alt=""
                                            />
                                            <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                                                <h4 class="text-2xl font-bold mb-2">
                                                    Alicia Nicolson
                                                </h4>
                                                <p class="mb-2">
                                                    Lorem ipsum dolor sit amet.
                                                </p>
                                                <a
                                                    href="#"
                                                    class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </div>
                                        <div class="flex p-4 md:p-6 mb-4">
                                            <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                                                <h5 class="text-xl font-medium mb-1">
                                                    85 + Classes
                                                </h5>
                                                <p class="">From The masters</p>
                                            </div>
                                            <div class="w-1/2 px-4">
                                                <h5 class="text-xl font-medium mb-1">
                                                    20 Lessons
                                                </h5>
                                                <p class="">
                                                    Average Per Class
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <div class="relative">
                                            <img
                                                class="w-full rounded-t-xl"
                                                src="https://cdn.easyfrontend.com/pictures/users/userM16.jpg"
                                                alt=""
                                            />
                                            <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                                                <h4 class="text-2xl font-bold mb-2">
                                                    Alex Hales
                                                </h4>
                                                <p class="mb-2">
                                                    The light creature divide
                                                    him.
                                                </p>
                                                <a
                                                    href="#"
                                                    class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </div>
                                        <div class="flex p-4 md:p-6 mb-4">
                                            <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                                                <h5 class="text-xl font-medium mb-1">
                                                    17 + Classes
                                                </h5>
                                                <p class="">From The masters</p>
                                            </div>
                                            <div class="w-1/2 px-4">
                                                <h5 class="text-xl font-medium mb-1">
                                                    27 Lessons
                                                </h5>
                                                <p class="">
                                                    Average Per Class
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-6 md:col-span-3 lg:col-span-2">
                                    <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <div class="relative">
                                            <img
                                                class="w-full rounded-t-xl"
                                                src="https://cdn.easyfrontend.com/pictures/users/userM22.jpg"
                                                alt=""
                                            />
                                            <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                                                <h4 class="text-2xl font-bold mb-2">
                                                    Elecya Perry
                                                </h4>
                                                <p class="mb-2">
                                                    Voluptas Possi numquam id
                                                    ipsum.
                                                </p>
                                                <a
                                                    href="#"
                                                    class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </div>
                                        <div class="flex p-4 md:p-6 mb-4">
                                            <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                                                <h5 class="text-xl font-medium mb-1">
                                                    19 + Classes
                                                </h5>
                                                <p class="">From The masters</p>
                                            </div>
                                            <div class="w-1/2 px-4">
                                                <h5 class="text-xl font-medium mb-1">
                                                    31 Lessons
                                                </h5>
                                                <p class="">
                                                    Average Per Class
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10">
                                <i class="fas fa-angle-left"></i>
                            </button>
                            <button class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10">
                                <i class="fas fa-angle-right"></i>
                            </button>
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
