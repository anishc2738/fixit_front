"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import DashboardRequests from "./Requests";
import DashboardReviews from "./Reviews";

export default function DashboardMain() {
  return (
    <main className="w-full bg-[#F8FAFC] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-6xl">

        {/* Dashboard Heading */}
        <div className="mb-6 pl-14 lg:pl-0">
          <h1 className="text-2xl font-bold text-[#0F2747] sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Manage your profile, requests and reviews
          </p>
        </div>

        {/* Profile Card */}
        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[#E0F2FE] bg-[#F8FAFC]">
              <Image
                src="/profile.jpg"
                alt="User profile"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#0F172A]">
                User Profile
              </h2>

              <div className="mt-4 flex flex-col gap-3">

                {/* Email */}
                <div className="flex items-center gap-3 text-[#64748B]">
                  <div className="rounded-lg bg-[#EFF6FF] p-2">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#64748B]">
                      Email
                    </p>

                    <p className="text-sm font-medium text-[#0F172A]">
                      user@example.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-[#64748B]">
                  <div className="rounded-lg bg-[#ECFEFF] p-2">
                    <Phone size={18} className="text-[#06B6D4]" />
                  </div>

                  <div>
                    <p className="text-xs text-[#64748B]">
                      Phone Number
                    </p>

                    <p className="text-sm font-medium text-[#0F172A]">
                      +977 98XXXXXXXX
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Requests Component */}
        <DashboardRequests />

        {/* Reviews Component */}
        <DashboardReviews />

      </div>
    </main>
  );
}