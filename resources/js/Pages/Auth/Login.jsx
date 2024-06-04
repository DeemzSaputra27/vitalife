// import { useEffect } from "react";
// import Checkbox from "@/Components/Checkbox";
// import GuestLayout from "@/Layouts/GuestLayout";
// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
// import TextInput from "@/Components/TextInput";
// import { Head, Link, useForm } from "@inertiajs/react";

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: "",
//         password: "",
//         remember: false,
//     });

//     useEffect(() => {
//         return () => {
//             reset("password");
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();

//         post(route("login"));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 font-medium text-sm text-green-600">
//                     {status}
//                 </div>
//             )}

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
//                         onChange={(e) => setData("email", e.target.value)}
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
//                         onChange={(e) => setData("password", e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="block mt-4">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData("remember", e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     {canResetPassword && (
//                         <Link
//                             href={route("password.request")}
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

import { useForm } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SocialLoginButton = () => (
    <Fragment>
        <button className="bg-blue-600 text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faFacebook} className=" mr-2 text-white" />
            <span className="text-center">Continue with Facebook</span>
        </button>
        <button className="bg-red-500 text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faGoogle} className=" mr-2 text-white" />
            <span className="text-center">Continue with Google</span>
        </button>
    </Fragment>
);

const SignInForm = () => {
    const [validated, setValidated] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        post(route("login"));
    };

    return (
        <form noValidate validated={validated} onSubmit={submit}>
            <div className="mb-4">
                <TextInput
                    id="email"
                    type="text"
                    className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                    placeholder="Enter Email Address"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mb-4">
                <TextInput
                    id="password"
                    type="password"
                    className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    required
                />
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="mb-4">
                <Checkbox
                    name="remember"
                    checked={data.remember}
                    onChange={(e) => setData("remember", e.target.checked)}
                />
                <span className="font-normal">Remember me</span>
            </div>
            <PrimaryButton className="bg-indigo-900 text-white py-3 px-6 rounded w-full">
                Log In
            </PrimaryButton>
            <button className="hover:text-blue-600 py-2 px-4 rounded-lg w-full">
                Forget your password?
            </button>
            <div className="relative">
                <hr className="my-8 border-t border-gray-300" />
                <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800">
                    Or
                </span>
            </div>
            <SocialLoginButton />
        </form>
    );
};

export default function Login({ status, canResetPassword }) {
    return (
        <GuestLayout>
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <section className="ezy__signup11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-12 lg:gap-24 h-full">
                        <div className="col-span-12 lg:col-span-6">
                            <div
                                className="bg-center bg-no-repeat bg-cover w-full min-h-[150px] rounded-[25px] hidden lg:block h-full"
                                style={{
                                    backgroundImage:
                                        "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign5.jpg)",
                                }}
                            ></div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 py-14 lg:py-24">
                            <div className="h-full max-w-xl bg-white shadow-xl dark:bg-slate-800 rounded-xl p-6 lg:p-14">
                                <div className="w-full max-w-xl mx-auto">
                                    <h2 className="text-indigo-900 dark:text-white text-2xl font-bold mb-3">
                                        Welcome to Easy Frontend
                                    </h2>
                                    <div className="flex items-center mb-6 md:mb-12">
                                        <p className="mb-0 mr-2 opacity-50">
                                            Don't have an account?
                                        </p>
                                        <Link
                                            href={route("register")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Create Account
                                        </Link>
                                    </div>
                                    <SignInForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
