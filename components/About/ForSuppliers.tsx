import {
    Package,
    Users,
    Star,
    MapPin,
    BarChart3,
    UserRound,
} from "lucide-react";

const supplierFeatures = [
    {
        icon: Package,
        title: "Personal Inventory System",
        description:
            "Manage your products, stock and inventory through your own dedicated system.",
    },
    {
        icon: Users,
        title: "Engage With Customers",
        description:
            "Allow customers to discover your business and connect with you based on their needs.",
    },
    {
        icon: Star,
        title: "Customer Ratings",
        description:
            "Receive ratings and feedback from customers to better understand their experience and expectations.",
    },
    {
        icon: UserRound,
        title: "Understand Your Customers",
        description:
            "View useful customer information and understand what customers are looking for.",
    },
    {
        icon: MapPin,
        title: "Show Your Location",
        description:
            "Make your business easier to discover by showing your service area and location.",
    },
    {
        icon: BarChart3,
        title: "Understand Your Market",
        description:
            "Use customer activity and market information to better understand demand in your city.",
    },
];

export default function ForSuppliers() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        For Suppliers
                    </p>

                    <h2 className="text-3xl font-bold text-[#0F2747] sm:text-4xl">
                        More Than Just Inventory Management
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        IVM gives suppliers a personal inventory management
                        system while helping them build stronger relationships
                        with customers and understand their local market.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {supplierFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F2747] text-white transition group-hover:bg-blue-600">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-[#0F2747]">
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
        </section>
    );
}