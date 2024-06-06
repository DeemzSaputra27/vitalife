import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout className="grid grid-cols-2 gap-4">
            <Head title="Log in" />
            <div className="text-center mb-6 lg:mb-12">
                <div className="bg-blue-50 dark:bg-slate-700 w-64 flex justify-center mx-auto rounded-xl p-2">

                    <Link href={route('login')} className="py-3 w-1/2 h-full bg-white dark:bg-slate-800 text-black dark:text-white rounded-xl">
                        <button>
                            Sign In
                        </button>
                    </Link>
                    <Link href={route('register')} className="py-3 w-1/2 h-full opacity-60">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
            <h2 className="text-center text-indigo-900 dark:text-white text-2xl font-bold mb-3">
                Welcome to Vitalife
            </h2>
            <section>
                <div className="col-start-1 p-8 lg:p-10">
                    <h2 className="text-3xl leading-none font-bold mb-12">
                        Log In
                    </h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <InputLabel htmlFor="email" value="Email Address" />
                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                value={data.email}
                                className="w-full bg-blue-50 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                placeholder="Enter Email Address"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full bg-blue-50 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                placeholder="Enter Password"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
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
                                onClick={() => route("password.request")}
                            >
                                Forget your password?
                            </button>
                        )}
                        <div className="relative">
                            <hr className="my-8 border-t border-gray-300" />
                            <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                                Or
                            </span>
                        </div>
                        <div className="text-center mt-8">
                            <p className="opacity-50">Don't have an account?</p>
                            <Link
                                href={route("register")}
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
