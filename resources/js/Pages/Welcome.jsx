import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import Footers from "@/Layouts/Footers";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [cards, setCards] = useState([
        {
            id: 1,
            image: "https://cdn.easyfrontend.com/pictures/featured/featured_10_1.png",
            title: "Technology",
            courses: 17,
        },
    ]);

    const [backgroundImage, setBackgroundImage] = useState([
        "../image/bgspa.jpg",
        "../image/bgyoga3.jpg",
        "../image/bgrun.jpg",
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === backgroundImage.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [backgroundImage, currentIndex]);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />

            <section
                className="ezy__header30 light relative overflow-hidden text-white bg-white dark:bg-[#0b1727] z-10"
                style={{
                    backgroundImage: `url(${backgroundImage[currentIndex]})`,
                    backgroundSize: "100%",
                    objectFit: "cover",
                    transition: "background-image 1s ease-in-out",
                }}
            >
                <nav
                    className="fixed top-4 right-4 flex justify-end rounded-md p-2"
                    style={{
                        animation: "fadeIn 1s ease-in-out",
                    }}
                >
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="bg-gray-100 hover:bg-gray-200 dark:bg-[#0b1727] dark:hover:bg-gray-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white rounded-md"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="bg-gray-100 hover:bg-gray-200 dark:bg-[#0b1727] dark:hover:bg-gray-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white rounded-md"
                            >
                                Log in
                            </Link>
                            <span className="px-3 py-2 text-[#0b1727]">|</span>
                            <Link
                                href={route("register")}
                                className="bg-gray-100 hover:bg-gray-200 dark:bg-[#0b1727] dark:hover:bg-gray-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white rounded-md"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 -z-10"
                    style={{
                        animation: "fadeIn 0.5s ease-in-out",
                    }}
                />
                <div className="container px-4 mx-auto">
                    <ApplicationLogo />
                    {/* content */}
                    <div
                        className="max-w-5xl flex justify-center text-center mx-auto mb-24"
                        style={{
                            animation: "fadeIn 0.5s ease-in-out",
                        }}
                    >
                        <div className="mb-24">
                            <h1
                                className="text-3xl font-bold leading-tight md:text-6xl mb-6"
                                style={{
                                    animation: "fadeIn 0.5s ease-in-out",
                                }}
                            >
                                Apa itu
                                <span
                                    className="text-blue-300 ml-2 my-4 text-6xl font-bold leading-tight"
                                    style={{
                                        animation: "fadeIn 0.5s ease-in-out",
                                    }}
                                >
                                    Vitalife
                                </span>
                                ?
                            </h1>
                            <div
                                className="max-w-lg flex justify-center mx-auto"
                                style={{
                                    animation: "fadeIn 0.5s ease-in-out",
                                }}
                            >
                                <div className="text-center">
                                    <p
                                        className="text-xl opacity-80 leading-snug"
                                        style={{
                                            animation:
                                                "fadeIn 0.5s ease-in-out",
                                        }}
                                    >
                                        Project Vitalife adalah project
                                        pengembangan aplikasi mobile "Vitalife"
                                        yang bertujuan untuk meningkatkan wisata
                                        kesehatan dan kebugaran di Indonesia.
                                        Aplikasi ini akan membantu pengguna
                                        dalam menemukan pusat yoga dan spa
                                        terbaik, acara olahraga dan event
                                        terbaru, berkonsultasi dengan dokter,
                                        melacak perkembangan mereka, dan
                                        mendapatkan umpan balik tentang layanan
                                        aplikasi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <section className="ezy__copyright10 light py-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
                    <div className="container px-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-8 md:col-start-3">
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div className="flex items-center justify-center mb-6">
                                        <div>
                                            <img
                                                src="../image/LOGO_1.png"
                                                alt=""
                                                className="max-w-full h-auto w-24 h-24"
                                            />
                                        </div>
                                        <div>
                                            <p className="ml-3">
                                                &#169; Copyright{" "}
                                                {new Date().getFullYear()}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="opacity-50 mb-6">
                                        Is heaven male their dry doesn't without
                                        him set saw two him man itself second
                                        fifth light over fish over which
                                        creepeth void don't. Image darkness
                                        gathering. All hath don't it, abundantly
                                        darkness can't forth appear, in.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}
