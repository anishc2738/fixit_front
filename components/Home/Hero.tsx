export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/0" />

      {/* Content */}
      <div className="flex min-h-[620px] w-full items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">

          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#06B6D4]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#0F2747] shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            Electronics Inventory Management
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0F2747] sm:text-5xl lg:text-6xl">
            Manage Your Inventory
            <span className="block text-[#2563EB]">
              Smarter with IVM
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-[#64748B] sm:text-lg">
            Manage products, suppliers, stock, customers, and orders
            from one simple and powerful inventory management system.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0F2747] hover:shadow-lg"
            >
              Go to Dashboard
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-[#E2E8F0] bg-white/80 px-6 py-3 text-sm font-semibold text-[#0F2747] backdrop-blur-sm transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Learn More
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#64748B]">

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                ✓
              </span>
              Inventory Tracking
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                ✓
              </span>
              Supplier Management
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A]">
                ✓
              </span>
              Order Management
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}