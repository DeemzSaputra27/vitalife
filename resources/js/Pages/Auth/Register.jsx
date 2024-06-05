// import { useEffect } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation');
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full"
//                         autoComplete="name"
//                         isFocused={true}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
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
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

//                     <TextInput
//                         id="password_confirmation"
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password_confirmation', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password_confirmation} className="mt-2" />
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     <Link
//                         href={route('login')}
//                         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        day: "",
        month: "",
        year: "",
        terms: false,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout2>
            <Head title="Register" />
            <section
                className="ezy__signup3 light py-14 bg-center bg-no-repeat bg-cover text-violet-900 dark:text-white overflow-hidden"
                style={{ backgroundImage: "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-1.png)" }}
            >
                <div className="container px-4 mx-auto">
                    <div className="flex py-6">
                        <div className="w-full max-w-2xl">
                            <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-4 md:p-12">
                                <h2 className="text-indigo-900 dark:text-white text-3xl font-bold mb-6 md:mb-12">
                                    Sign Up
                                </h2>
                                <form onSubmit={submit}>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex flex-col mb-6 mx-2">
                                                <InputLabel htmlFor="firstName" value="First Name" />
                                                <TextInput
                                                    id="firstName"
                                                    name="firstName"
                                                    value={data.firstName}
                                                    className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
                                                    autoComplete="firstName"
                                                    isFocused={true}
                                                    onChange={(e) => setData("firstName", e.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.firstName} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex flex-col mb-6 mx-2">
                                                <InputLabel htmlFor="lastName" value="Last Name" />
                                                <TextInput
                                                    id="lastName"
                                                    name="lastName"
                                                    value={data.lastName}
                                                    className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
                                                    autoComplete="lastName"
                                                    onChange={(e) => setData("lastName", e.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.lastName} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="mb-6">
                                                <InputLabel htmlFor="birth-date" value="Birth date" />
                                                <div className="w-full flex rounded-xl overflow-hidden">
                                                    <select
                                                        id="day"
                                                        name="day"
                                                        value={data.day}
                                                        className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
                                                        onChange={(e) => setData("day", e.target.value)}
                                                    >
                                                        <option value="">Day</option>
                                                        {Array.from(Array(31).keys()).map((day) => (
                                                            <option key={day + 1} value={day + 1}>
                                                                {day + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <select
                                                        id="month"
                                                        name="month"
                                                        value={data.month}
                                                        className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
                                                        onChange={(e) => setData("month", e.target.value)}
                                                    >
                                                        <option value="">Month</option>
                                                        {[
                                                            "January",
                                                            "February",
                                                            "March",
                                                            "April",
                                                            "May",
                                                            "June",
                                                            "July",
                                                            "August",
                                                            "September",
                                                            "October",
                                                            "November",
                                                            "December",
                                                        ].map((month, index) => (
                                                            <option key={index} value={index + 1}>
                                                                {month}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <select
                                                        id="year"
                                                        name="year"
                                                        value={data.year}
                                                        className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 w-1/3 px-4"
                                                        onChange={(e) => setData("year", e.target.value)}
                                                    >
                                                        <option value="">Year</option>
                                                        {Array.from(Array(100).keys()).map((year) => (
                                                            <option key={2023 - year} value={2023 - year}>
                                                                {2023 - year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-col mb-6 mx-2">
                                                <InputLabel htmlFor="email" value="Email" />
                                                <TextInput
                                                    id="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
                                                    autoComplete="email"
                                                    onChange={(e) => setData("email", e.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.email} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex flex-col mb-6 mx-2">
                                                <InputLabel htmlFor="password" value="Password" />
                                                <TextInput
                                                    id="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
                                                    autoComplete="new-password"
                                                    type="password"
                                                    onChange={(e) => setData("password", e.target.value)}
                                                    required
                                                />
                                                <InputError message={errors.password} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex flex-col mb-6 mx-2">
                                                <InputLabel
                                                    htmlFor="password_confirmation"
                                                    value="Confirm Password"
                                                />
                                                <TextInput
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    value={data.password_confirmation}
                                                    className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
                                                    autoComplete="new-password"
                                                    type="password"
                                                    onChange={(e) =>
                                                        setData("password_confirmation", e.target.value)
                                                    }
                                                    required
                                                />
                                                <InputError
                                                    message={errors.password_confirmation}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <div className="form-check">
                                            <input
                                                id="terms"
                                                name="terms"
                                                type="checkbox"
                                                value={data.terms}
                                                onChange={(e) => setData("terms", e.target.checked)}
                                                className="rounded-lg"
                                            />
                                            <label
                                                htmlFor="terms"
                                                className="rounded-lg"
                                            >
                                                I accept to the{" "}
                                                <Link href={route("terms")}>terms & condition</Link>,
                                                <Link href={route("privacy")}>privacy policy</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <PrimaryButton
                                        className="bg-indigo-800 text-white px-7 py-3 rounded w-full"
                                        disabled={processing}
                                    >
                                        Sign Up
                                    </PrimaryButton>

                                    <div className="relative">
                                        <hr className="my-6 md:my-12" />
                                        <span
                                            className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800"
                                        >
                                            Or
                                        </span>
                                    </div>

                                    <button className="w-full flex justify-center items-center bg-blue-600 rounded py-3 px-5 mb-3">
                                        <span className="fab fa-facebook text-whitetext-2xl"></span>
                                        <span className="w-full text-center text-white">
                                            Continue with Facebook
                                        </span>
                                    </button>
                                    <button className="w-full flex justify-center items-center bg-red-500 rounded py-3 px-5 mb-3">
                                        <span className="fab fa-google text-white text-2xl"></span>
                                        <span className="w-full text-center text-white">
                                            Continue with Google
                                        </span>
                                    </button>

                                    <div className="text-center mt-6 md:mt-12">
                                        <p className="mb-0 mr-2 opacity-50">
                                            Already have an account?
                                        </p>
                                        <Link href={route("login")} className="">
                                            Sign In
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout2>
    );
}
