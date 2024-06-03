import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

function Dashboard({ auth }) {
  const [menuItems] = useState([
    { name: "Barbecue salad", detail: "Delicious dish", price: "$22.00", image: "/assets/img/plate1.png" },
    { name: "Salad with fish", detail: "Delicious dish", price: "$12.00", image: "/assets/img/plate2.png" },
    { name: "Spinach salad", detail: "Delicious dish", price: "$9.50", image: "/assets/img/plate3.png" },
  ]);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mencoba</h2>}
    >
      <Head title="Dashboard" />

      <div>
        {/* Scroll Top Button */}
        <a href="#" className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="scroll-top">
          <i className='bx bx-chevron-up'></i>
        </a>

        {/* Header */}
        <header className="bg-white py-4 shadow-md" id="header">
          <nav className="container mx-auto flex items-center justify-between">
            <img src="/assets/img/LOGO_1.png" alt="" className="h-10 w-auto" />
            <Link href={route('dashboard')} className="text-xl font-semibold text-gray-800">Vitalife</Link>

            <div className="flex items-center">
              <input 
                type="search" 
                id="search-bar" 
                placeholder="Search here..." 
                className="border rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">Search</button>
              <Link href={route('login')} className="ml-4 text-blue-500 hover:text-blue-700">Login/Sign-In</Link>
              <i className='bx bx-moon change-theme ml-4 text-gray-600 hover:text-gray-800' id="theme-button"></i>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-12">
          {/* ... (Your main content sections: Home, About, Services, Menu, App, Contact) */}
          <section className="menu" id="menu">
            <h2 className="text-3xl font-bold mb-4">Menu of the week</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <img src={item.image} alt="" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                  <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <i className='bx bx-cart-alt mr-2'></i> Add to Cart
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          {/* ... (Your footer content here) */}
        </footer>
      </div>
    </AuthenticatedLayout>
  );
}

export default Dashboard;
