// import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     useEffect(() => {
//         return () => {
//             reset('password');
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="block mt-4">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) => setData('remember', e.target.checked)}
//                         />
//                         <span className="ms-2 text-sm text-gray-600">Remember me</span>
//                     </label>
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }



import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout className="grid grid-cols-2 gap-4">
            <Head title="Log in" />
            <section>
                <div className="p-8 lg:p-10">
                    <h2 className="text-3xl leading-none font-bold mb-12">Log In</h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <InputLabel htmlFor="email" value="Email Address" />
                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email}
                                className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                placeholder="Enter Email Address"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                placeholder="Enter Password"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="font-normal">Remember me</span>
                        </div>
                        <button
                            className="bg-indigo-900 text-white py-3 px-6 rounded w-full"
                            disabled={processing}
                        >
                            Log In
                        </button>
                        {canResetPassword && (
                            <button
                                className="hover:text-blue-600 font-medium py-2 px-4 rounded-lg w-full mt-4"
                                onClick={() => route('password.request')}
                            >
                                Forget your password?
                            </button>
                        )}
                        <div className="relative">
                            <hr className="my-8 border-t border-gray-300" />
                            <span
                                className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800"
                            >
                                Or
                            </span>
                        </div>
                        <div className="text-center mt-8">
                            <p className="opacity-50">Don't have an account?</p>
                            <Link
                                href={route('register')}
                                className="hover:text-blue-600 font-medium text-decoration-none"
                            >
                                Create account
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </GuestLayout>
    );
}

