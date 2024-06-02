import React from 'react';
<<<<<<< HEAD
import { Link } from '@inertiajs/inertia-react';
=======
import { Link, Head } from '@inertiajs/react';

export default function Homepage({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
>>>>>>> 61026de897bc3bb9a4a4c8a5a379082017c04011

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>This is the default homepage for your Laravel application.</p>
            <Link href="/about">Go to About page</Link>
        </div>
    );
};

export default Homepage;