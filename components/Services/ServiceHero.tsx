import Image from "next/image";
import {
    Wrench,
    Tv,
    WashingMachine,
    Refrigerator,
    Wind,
    Settings,
} from "lucide-react";

const services = [
    {
        title: "Mixer Repair",
        description:
            "Get your mixer and grinder repaired by experienced technicians at your home.",
        image: "/mixer.jpg",
        icon: Wrench,
    },
    {
        title: "TV Repair",
        description:
            "Our technicians can help diagnose and repair common TV problems at your home.",
        image: "/tv.jpg",
        icon: Tv,
    },
    {
        title: "Washing Machine Repair",
        description:
            "Get reliable washing machine repair and maintenance without taking the machine anywhere.",
        image: "/washing-machine.jpg",
        icon: WashingMachine,
    },
    {
        title: "Fridge Repair",
        description:
            "Our repair professionals can help with common refrigerator problems and maintenance.",
        image: "/Fridge.jpg",
        icon: Refrigerator,
    },
    {
        title: "AC Repair",
        description:
            "Get AC inspection, repair and maintenance services conveniently at your home.",
        image: "/ac.jpg",
        icon: Wind,
    },
    {
        title: "Other Accessories",
        description:
            "Have another electronic appliance that needs repair? Tell us your problem and we will help.",
        image: "/other.jpg",
        icon: Settings,
    },
];

export default function ServiceHero() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Introduction */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Our Services
                    </p>

                    <h1 className="mt-3 text-3xl font-bold text-[#0F2747] sm:text-4xl lg:text-5xl">
                        Reliable Repair Services at Your Home
                    </h1>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        IVM connects you with experienced repair professionals
                        who can visit your home and help fix your electronic
                        appliances. No need to carry heavy appliances to a
                        repair shop — simply tell us what you need.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0F2747] shadow-md">
                                        <Icon size={20} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-[#0F2747]">
                                        {service.title}
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600">
                                        <span>Home service available</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}