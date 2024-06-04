import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" style={{ backgroundImage: 'url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-1.png)', backgroundSize: 'cover' }}>
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}