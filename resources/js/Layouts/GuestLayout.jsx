import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div
            className="min-h-screen flex flex-col justify-center sm:justify-end items-center pt-6 sm:pt-0"
            style={{
                backgroundImage: `url(../image/spa.jpg)`,
                backgroundSize: "cover",
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
