import Image from "next/image";

export default function Subscribe() {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-2.jpg"
                    alt="IVM electronics inventory"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0F2747]/75" />

            {/* Content */}
            <div className="relative mx-auto flex min-h-[430px] w-full items-center justify-center px-5 py-16 sm:px-8">
                <div className="w-full max-w-2xl text-center">

                    {/* Heading */}
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Subscribe to Us
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                        Subscribe to us so we can inform you first whenever
                        new offers and updates arrive.
                    </p>

                    {/* Email Form */}
                    <form className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-14 w-full rounded-lg border border-white/30 bg-white/10 px-4 text-sm text-white outline-none backdrop-blur-md placeholder:text-white/60 transition focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 sm:flex-1"
                        />

                        <button
                            type="submit"
                            className="h-14 w-full rounded-lg bg-[#2563EB] px-7 text-sm font-semibold text-white transition hover:bg-[#06B6D4] sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Tagline */}
                    <p className="mt-10 text-lg font-medium text-white sm:text-xl">
                        IVM — Always With You
                    </p>

                </div>
            </div>
        </section>
    );
}