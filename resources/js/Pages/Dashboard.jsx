import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './css/styles.css'; // Import your CSS

function Dashboard({ auth }) {
    const [menuItems] = useState([
        { name: "Barbecue salad", detail: "Delicious dish", price: "$22.00", image: "assets/img/plate1.png" },
        { name: "Salad with fish", detail: "Delicious dish", price: "$12.00", image: "assets/img/plate2.png" },
        { name: "Spinach salad", detail: "Delicious dish", price: "$9.50", image: "assets/img/plate3.png" },
      ]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;

