"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "phone" && !/^\d*$/.test(value)) {
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (/[א-ת]/.test(formData.email)) {
            newErrors.email = "Email address cannot contain Hebrew characters.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain digits only.";
        } else if (formData.phone.length < 9) {
            newErrors.phone = "Phone number must contain at least 9 digits.";
        }

        return newErrors;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus("idle");
            return;
        }

        setErrors({});
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                phone: "",
            });
        } catch (error) {
            console.error("Submit error:", error);
            setStatus("error");
        }
    }

    return (
        <section
            id="contact"
            className="border-t border-gray-100 bg-white px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Get started
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Ready to work smarter?
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Leave your details and we&apos;ll get back to you.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 space-y-6 rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900"
                        >
                            Full name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 ${errors.name ? "border-red-500" : "border-gray-200"
                                }`} />

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 ${errors.email ? "border-red-500" : "border-gray-200"
                                }`} />

                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-gray-900"
                        >
                            Phone number
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            inputMode="numeric"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0501234567"
                            className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 ${errors.phone ? "border-red-500" : "border-gray-200"
                                }`} />

                        {errors.phone && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {status === "loading" ? "Sending..." : "Submit"}
                    </button>

                    {status === "success" && (
                        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center">
                            <p className="text-sm font-semibold text-green-700">
                                Thanks! Your details were submitted successfully.
                            </p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center">
                            <p className="text-sm font-semibold text-red-700">
                                Something went wrong.
                            </p>

                            <p className="mt-1 text-sm text-red-600">
                                Please try again in a moment.
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}