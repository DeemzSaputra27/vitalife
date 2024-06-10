import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <div>
            <Head title="Homepage" />
            <h1>Welcome to the Homepage</h1>
            <p>This is the default homepage for your Laravel application.</p>
            <Link href="/about">Go to About page</Link>
        </div>
    );
}