import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div
            // className="min-h-screen flex flex-col justify-center sm:justify-end items-center pt-6 sm:pt-0"
            // style={{
            //     backgroundImage: `url(${require("../image/LOGO_2.png")})`,
            //     backgroundSize: "contain",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center top",
            // }}
            // className="min-h-screen flex flex-col justify-center sm:justify-end items-center pt-6 sm:pt-0"
            // style={{
            //     backgroundImage:
            //         "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-1.png)",
            //     backgroundSize: "cover",
            // }}
            className="min-h-screen flex flex-col justify-center sm:justify-end items-center pt-6 sm:pt-0"
            style={{
                backgroundImage: `url(https://img.freepik.com/free-vector/healthcare-medical-with-cardiograph-line_1017-30390.jpg)`,
                backgroundSize: "cover", // make the image cover the entire background
                backgroundPosition: "center", // center the image horizontally and vertically
            }}
        >
            <div>
                <Link>
                    <ApplicationLogo className="w-20 h-20" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
