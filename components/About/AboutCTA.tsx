import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="bg-[#0F2747] py-20">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                    Be Part of IVM
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    One Platform. Local Connections. Better Opportunities.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                    Whether you are looking for a service or running a
                    business, IVM helps connect you with the people and
                    opportunities around your local market.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2747] transition hover:bg-slate-100"
                    >
                        Explore IVM
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        href="/register"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        Join as a Supplier
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}