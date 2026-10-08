import {
    Wrench,
    Search,
    MapPin,
    Users,
} from "lucide-react";

const features = [
    {
        icon: Wrench,
        title: "Find Electronics Services",
        description:
            "Find people and businesses that provide electronics repair and fixing services in your city.",
    },
    {
        icon: Search,
        title: "Discover Local Suppliers",
        description:
            "Explore suppliers in your area and understand what products and services are available in your local market.",
    },
    {
        icon: MapPin,
        title: "Find Services Near You",
        description:
            "Use location-based information to discover service providers and suppliers closer to you.",
    },
    {
        icon: Users,
        title: "Connect With Providers",
        description:
            "Connect with suitable service providers and suppliers based on your needs.",
    },
];

export default function ForCustomers() {
    return (
        <section className="bg-[#F8FAFC] py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                            For Customers
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-[#0F2747] sm:text-4xl">
                            Everything You Need From Your Local Market
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600">
                            IVM helps customers discover electronics service
                            providers and suppliers in their city. Instead of
                            searching in different places, you can find useful
                            local information in one platform.
                        </p>

                        <button className="mt-7 rounded-lg bg-[#0F2747] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                            Explore Services
                        </button>
                    </div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="mt-4 font-semibold text-[#0F2747]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}