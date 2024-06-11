import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer>
            <section className="ezy__about9 light py-14 justify-center md:py-24 bg-biru dark:text-[#0b1727]">
                <div className="container px-4 flex flex-col md:flex-row items-center gap-4 mb-12 justify-center">
                    <div className="col-span-12 lg:col-span-6 relative">
                        <img
                            src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
                            alt=""
                            className="max-w-full h-auto rounded-2xl"
                            style={{ width: "80%", marginLeft: "40px" }}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6 ml-4 justify-center">
                        <h6 className="font-medium opacity-70 mb-2">
                            {" "}
                            Hello Buleeee,{" "}
                        </h6>
                        <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2">
                            {" "}
                            Welcome to Vitalife{" "}
                        </h1>
                        <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
                        <p className="opacity-70 mb-2">
                            {" "}
                            Since our inception set out in 2012, TalEx has set
                            out to disrupt inception the HR & Talent/Staffing
                            Management industry. Purposefully designed by our
                            founders (Amrita Grewal and Julie Dacar) to connect
                            great companies and great talent.{" "}
                        </p>
                        <ul className="flex flex-col ezy__about9-features mt-5">
                            <li>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue-600 mr-2 mb-4 text-sm"
                                />
                                <span className="opacity-75 text-sm">
                                    {" "}
                                    Beautiful and easy to understand UI.{" "}
                                </span>
                            </li>
                            <hr className="w-11/12 my-2" />
                            <li>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue-600 mr-2 mb-4 text-sm"
                                />
                                <span className="opacity-75 text-sm">
                                    {" "}
                                    Theme advantages are pixel perfect design &
                                    clear code{" "}
                                </span>
                            </li>
                            <hr className="w-11/12 my-2" />
                            <li>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue-600 mr-2 mb-4 text-sm"
                                />
                                <span className="opacity-75 text-sm">
                                    {" "}
                                    Present your services with flexible{" "}
                                </span>
                            </li>
                            <hr className="w-11/12 my-2" />
                            <li>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue-600 mr-2 mb-4 text-sm"
                                />
                                <span className="opacity-75 text-sm">
                                    {" "}
                                    Find more creative ideas for your projects{" "}
                                </span>
                            </li>
                            <hr className="w-11/12 my-2" />
                            <li>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue-600 mr-2 text-sm"
                                />
                                <span className="opacity-75 text-sm">
                                    {" "}
                                    Faucibus porta lacus fringilla vel{" "}
                                </span>
                            </li>
                        </ul>
                        <div className="mt-12">
                            <button className="bg-gray-900 text-white dark:bg-biru2 dark:text-white hover:bg-opacity-90 rounded-md px-5 py-2 transition">
                                {" "}
                                Learn More{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gray-800 text-white flex items-center justify-center p-10">
                <div className="container mx-auto px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <img
                                className="h-10 w-25"
                                src="../image/LOGO_2.png"
                                alt="Your Company"
                            />
                            <div className="mt-4">
                                <p className="text-gray-400">
                                    Sahibabad, Ghaziabad, Uttar Pradesh
                                </p>
                                <p className="text-gray-400">201005</p>
                                <p className="text-gray-400">+91-8887867787</p>
                                <p className="text-gray-400">
                                    info@suryanuarsinghome.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Our Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Our Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Appointment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                Department
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Ortholgy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Neurology
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Dental Care
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Opthalmology
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Cardiology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                Useful Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Our Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Our Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Appointment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-gray-400"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-gray-400">
                        <p>&copy; 2024 Vitalife. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
