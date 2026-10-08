"use client";

import { Star } from "lucide-react";

export default function DashboardReviews() {
  return (
    <section className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-[#FFFBEB] p-3">
          <Star size={21} className="text-[#F59E0B]" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0F2747]">
            My Reviews
          </h2>

          <p className="text-sm text-[#64748B]">
            Reviews and ratings you have submitted
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-4 py-8 text-center">
        <p className="font-semibold text-[#DC2626]">
          No reviews yet
        </p>

        <p className="mt-1 text-sm text-[#64748B]">
          Your submitted reviews will appear here.
        </p>
      </div>
    </section>
  );
}