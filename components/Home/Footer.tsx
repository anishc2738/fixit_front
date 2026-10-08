import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#DCEAF7] text-black/80">

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* IVM Brand */}
          <div>

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#000000] shadow-sm">
                IVM
              </div>

              <div>
                <span className="block text-xl font-bold tracking-wide">
                  IVM
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                  Inventory Management
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-7 text-black/65">
              A modern inventory management platform designed to connect
              suppliers, products, orders, and customers in one reliable
              system.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">


            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/80">
              Platform
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  href="/inventory"
                  className="group flex items-center gap-2 text-sm text-black/60 transition hover:text-black/80"
                >
                  Inventory Management
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="/suppliers"
                  className="group flex items-center gap-2 text-sm text-black/60 transition hover:text-black/80"
                >
                  Supplier Management
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="/orders"
                  className="group flex items-center gap-2 text-sm text-black/60 transition hover:text-black/80"
                >
                  Order Management
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="/customers"
                  className="group flex items-center gap-2 text-sm text-black/60 transition hover:text-black/80"
                >
                  Customer Management
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                  <MapPin
                    size={17}
                    className="text-[#06B6D4]"
                  />
                </div>

                <div>
                  <p className="text-xs text-black/40">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-black/70">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                  <Mail
                    size={17}
                    className="text-[#06B6D4]"
                  />
                </div>

                <div>
                  <p className="text-xs text-black/40">
                    Email
                  </p>

                  <a
                    href="mailto:info@ivm.com"
                    className="mt-1 block text-sm text-black/70 transition hover:text-black/80"
                  >
                    info@ivm.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#06B6D4]/10">
                  <Phone
                    size={17}
                    className="text-[#06B6D4]"
                  />
                </div>

                <div>
                  <p className="text-xs text-black/40">
                    Phone
                  </p>

                  <a
                    href="tel:+9779800000000"
                    className="mt-1 block text-sm text-black/70 transition hover:text-black/80"
                  >
                    +977 9800000000
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row sm:px-8 lg:px-10">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} IVM. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="text-xs text-white/40 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-white/40 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

          <p className="text-xs font-medium text-white/40">
            IVM — Always With You
          </p>

        </div>
      </div>

    </footer>
  );
}