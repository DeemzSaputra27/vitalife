import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white flex items-center justify-center p-10">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <img 
              className="h-10 w-25" 
              src="/image/LOGO_2.png" // Pastikan path gambar benar
              alt="Your Company" 
            />
            <div className="mt-4">
              <p className="text-gray-400">Sahibabad, Ghaziabad, Uttar Pradesh</p>
              <p className="text-gray-400">201005</p>
              <p className="text-gray-400">+91-8887867787</p>
              <p className="text-gray-400">info@suryanuarsinghome.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" links={[
            { text: 'About Us', href: '#' },
            { text: 'Our Pricing', href: '#' },
            { text: 'Our Gallery', href: '#' },
            { text: 'Appointment', href: '#' },
            { text: 'Privacy Policy', href: '#' }
          ]} />

          {/* Department */}
          <FooterSection title="Department" links={[
            { text: 'Orthology', href: '#' },
            { text: 'Neurology', href: '#' },
            { text: 'Dental Care', href: '#' },
            { text: 'Opthalmology', href: '#' },
            { text: 'Cardiology', href: '#' }
          ]} />

          {/* Useful Links (bisa disesuaikan jika diperlukan) */}
          <FooterSection title="Useful Links" links={[
            { text: 'About Us', href: '#' },
            { text: 'Our Pricing', href: '#' },
            { text: 'Our Gallery', href: '#' },
            { text: 'Appointment', href: '#' },
            { text: 'Privacy Policy', href: '#' }
          ]} />
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-400">
          <p>&copy; 2024 Vitalife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Reusable FooterSection component
function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.nest(link => (
          <li key={link.text}>
            <a href={link.href} className="hover:text-gray-400">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
