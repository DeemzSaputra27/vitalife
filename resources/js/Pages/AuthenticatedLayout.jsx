import React from 'react';
import { Link } from '@inertiajs/react';

const AuthenticatedLayout = ({ user, header, children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                {/* Primary Navigation Menu */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            shrink-0 flex items-center">
                                <Link href="/">
                                    {/* Yourhidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link href={route('dashboard')} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                    Dashboard
                                </Link>
                                {/*hidden sm:flex sm:items-center sm:ml-6">
                            {/* ... (User dropdown menu) */}
                        </div>
                    </div>max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    );
};

export default AuthenticatedLayout;
