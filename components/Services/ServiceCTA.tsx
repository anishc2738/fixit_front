import Link from "next/link";
import { ArrowRight, Home, Wrench } from "lucide-react";

export default function ServiceCTA() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl bg-[#0F2747] px-6 py-12 text-center sm:px-12">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                        <Home size={26} />
                    </div>

                    <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                        Your Appliance Needs a Fix?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                        Do not worry about carrying your appliance to a repair
                        shop. Tell us what is wrong and we will help connect
                        you with a repair professional who can provide service
                        at your home.
                    </p>

                    <Link
                        href="RepairForm"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2747] transition hover:bg-slate-100"
                    >
                        <Wrench size={18} />
                        Request a Repair
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}