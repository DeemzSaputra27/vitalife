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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mencoba</h2>}
        >
            <Head title="Dashboard" />

            <div> {/* This div wraps the entire content from the previous JSX */}
                {/* Scroll Top Button */}
                <a href="#" className="scrolltop" id="scroll-top">
                    <i className='bx bx-chevron-up scrolltop__icon'></i>
                </a>
            
                {/* Header */}
                <header className="l-header" id="header">
                    {/* ... (Header content from the previous response) */}
                </header>

                {/* Main Content */}
                <main className="l-main">
                    {/* Home Section */}
                    <section className="home" id="home">
                        {/* ... (Home content from the previous response) */}
                    </section>

                    {/* About Section */}
                    <section className="about section bd-container" id="about">
                        {/* ... (About content from the previous response) */}
                    </section>

                    {/* Services Section */}
                    <section className="services section bd-container" id="services">
                        {/* ... (Services content from the previous response) */}
                    </section>

                    {/* Menu Section */}
                    <section className="menu section bd-container" id="menu">
                        <span className="section-subtitle">Special</span>
                        <h2 className="section-title">Menu of the week</h2>
                        <div className="menu__container bd-grid">
                            {menuItems.map((item, index) => (
                            <div key={index} className="menu__content">
                                <img src={item.image} alt="" className="menu__img" />
                                {/* ... (rest of the menu item details) */}
                            </div>
                            ))}
                        </div>
                    </section>

                    {/* App Section */}
                    <section className="app section bd-container">
                        {/* ... (App content from the previous response) */}
                    </section>

                    {/* Contact Us Section */}
                    <section className="contact section bd-container" id="contact">
                        {/* ... (Contact Us content from the previous response) */}
                    </section>
                </main>

                {/* Footer */}
                <footer className="footer section bd-container">
                    {/* ... (Footer content from the previous response) */}
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;

