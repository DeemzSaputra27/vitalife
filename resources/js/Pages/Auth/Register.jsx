import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

const monthList = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
];

const dayList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const yearList = Array.from(
    new Array(new Date().getFullYear() - 1900),
    (_, i) => 1900 + i
);

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        birth_date_day: "",
        birth_date_month: "",
        birth_date_year: "",
        birth_date: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        const birthDate = `${data.birth_date_day}-${data.birth_date_month}-${data.birth_date_year}`;
        setData("birth_date", birthDate);

        post(route("register"));
    };

    return (
        <GuestLayout className="grid grid-cols-2 gap-4">
            <Head title="Register" />

            <div className="text-center mb-6 lg:mb-12">
                <div className="bg-blue-50 w-64 flex justify-center mx-auto rounded-xl p-2">
                    <Link
                        href={route("login")}
                        className="py-3 w-1/2 h-full opacity-60"
                    >
                        <button>Sign In</button>
                    </Link>
                    <Link
                        href={route("register")}
                        className="py-3 w-1/2 h-full bg-white dark:bg-slate-800 text-black dark:text-white rounded-xl"
                    >
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
            <h2 className="text-center text-indigo-900 dark:text-white text-2xl font-bold mb-3">
                Welcome to Vitalife
            </h2>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="first-name" value="First Name" />

                    <TextInput
                        id="first-name"
                        type="text"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("first_name", e.target.value)}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="last-name" value="Last Name" />

                    <TextInput
                        id="last-name"
                        type="text"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("last_name", e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="birth-date" value="Birth Date" />

                    <div className="w-full flex rounded-xl overflow-hidden">
                        <select
                            value={data.birth_date_day}
                            onChange={(e) =>
                                setData("birth_date_day", e.target.value)
                            }
                            className="min-h-[54px] leading-10 bg-blue-50 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
                        >
                            <option hidden defaultValue>
                                Day
                            </option>
                            {dayList.map((day, i) => (
                                <option value={day} key={i}>
                                    {day}
                                </option>
                            ))}
                        </select>
                        <select
                            value={data.birth_date_month}
                            onChange={(e) =>
                                setData("birth_date_month", e.target.value)
                            }
                            className="min-h-[54px] leading-10 bg-blue-50  dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
                        >
                            <option hidden defaultValue>
                                Month
                            </option>
                            {monthList.map(({ label, value }, i) => (
                                <option value={value} key={i}>
                                    {label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={data.birth_date_year}
                            onChange={(e) =>
                                setData("birth_date_year", e.target.value)
                            }
                            className="min-h-[54px] leading-10 bg-blue-50 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 w-1/3 px-4"
                        >
                            <option hidden defaultValue>
                                Year
                            </option>
                            {yearList.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <InputError message={errors.birth_date} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
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

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="ms-4 bg-indigo-900 text-white"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
