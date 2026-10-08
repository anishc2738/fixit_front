import Image from "next/image";

const teamMembers = [
    {
        name: "Anish Bajgain",
        position: "Founder & Full Stack Developer",
        image: "/founder-1.jpg",
    },
    {
        name: "Team Member",
        position: "Co-Founder and Business Expert",
        image: "/founder-2.jpg",
    },
];

export default function WhoWeAre() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Who We Are
                    </p>

                    <h2 className="text-3xl font-bold text-[#0F2747] sm:text-4xl">
                        Connecting Customers With Local Service Providers
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        IVM is built to make it easier for customers to find
                        reliable electronics services and for suppliers to
                        connect with customers in their local market.
                    </p>
                </div>

                {/* Team */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative h-72 w-full bg-slate-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-[#0F2747]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm text-blue-600">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}