"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";

const requests = [
  {
    id: 1,
    title: "AC Repair",
    date: "September 28, 2026",
    image: "/ac.jpg",
  },
  {
    id: 2,
    title: "TV Repair",
    date: "September 25, 2026",
    image: "/tv.jpg",
  },
  {
    id: 3,
    title: "Washing Machine Repair",
    date: "September 20, 2026",
    image: "/washing-machine.jpg",
  },
  {
    id: 4,
    title: "Refrigerator Repair",
    date: "September 18, 2026",
    image: "/Fridge.jpg",
  },
];

export default function DashboardRequests() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#0F2747]">
            My Requests
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Your recent service requests
          </p>
        </div>

        <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
          4 Requests
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F1F5F9]">
              <Image
                src={request.image}
                alt={request.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate font-semibold text-[#0F172A]">
                {request.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <CalendarDays size={15} />
                <span>{request.date}</span>
              </div>

              <span className="mt-2 inline-block rounded-full bg-[#ECFDF5] px-2.5 py-1 text-xs font-medium text-[#16A34A]">
                Request Submitted
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}