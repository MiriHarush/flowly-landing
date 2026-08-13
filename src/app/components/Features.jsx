import React from 'react';

const features = [
    {
        number: "01",
        title: "Automate",
        description:
            "Automate repetitive tasks and spend more time focusing on what really matters.",
    },
    {
        number: "02",
        title: "Collaborate",
        description:
            "Keep your team aligned with a simple workspace built for seamless collaboration.",
    },
    {
        number: "03",
        title: "Grow",
        description:
            "Turn your workflow into measurable progress and build better habits over time.",
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="border-t border-gray-100 bg-gray-50 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Everything you need
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A simpler way to get things done.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Flowly brings your team's workflow into one simple,
                        focused workspace.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className="text-sm font-medium text-gray-400">
                                {feature.number}
                            </span>

                            <h3 className="mt-8 text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
